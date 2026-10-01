"use client";

import { useEffect, useState } from "react";

const DERIV_WS =
  "wss://api.derivws.com/trading/v1/options/ws/public";

export type Market = {
  symbol: string;
  name: string;
  type: string;
  pipSize: number;
  price: number | null;
  previousPrice: number | null;
  epoch: number | null;
};

type ActiveSymbol = {
  underlying_symbol: string;
  underlying_symbol_name: string;
  underlying_symbol_type?: string;
  pip_size?: number;
};

type DerivMessage = {
  msg_type?: string;

  active_symbols?: ActiveSymbol[];

  tick?: {
    symbol: string;
    quote: number;
    epoch: number;
  };

  error?: {
    code?: string;
    message?: string;
  };
};

function getDecimalPlaces(pipSize: number) {
  if (!pipSize || pipSize >= 1) {
    return 2;
  }

  const text = pipSize.toString();

  if (text.includes("e-")) {
    return Number(text.split("e-")[1]);
  }

  return text.split(".")[1]?.length || 2;
}

export function useDerivMarket() {
  const [markets, setMarkets] = useState<Market[]>([]);

  const [connected, setConnected] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    let destroyed = false;

    const ws = new WebSocket(DERIV_WS);

    ws.onopen = () => {
      if (destroyed) return;

      console.log("Deriv WebSocket connected");

      setConnected(true);
      setError(null);

      /*
       * Get ALL active symbols from Deriv
       */
      ws.send(
        JSON.stringify({
          active_symbols: "brief",
          req_id: 1,
        })
      );
    };

    ws.onmessage = (event) => {
      if (destroyed) return;

      try {
        const data: DerivMessage =
          JSON.parse(event.data);

        /*
         * API ERROR
         */
        if (data.error) {
          console.error(
            "Deriv API error:",
            data.error
          );

          setError(
            data.error.message ||
              "Deriv API error"
          );

          return;
        }

        /*
         * =====================================
         * ALL ACTIVE SYMBOLS
         * =====================================
         */
        if (
          data.msg_type === "active_symbols" &&
          data.active_symbols
        ) {
          const activeSymbols =
            data.active_symbols;

          console.log(
            "Total Deriv symbols:",
            activeSymbols.length
          );

          console.log(
            "All active symbols:",
            activeSymbols
          );

          /*
           * Create table rows from API
           */
          const initialMarkets: Market[] =
            activeSymbols.map((item) => ({
              symbol:
                item.underlying_symbol,

              name:
                item.underlying_symbol_name,

              type:
                item.underlying_symbol_type ||
                "",

              pipSize:
                item.pip_size || 0.01,

              price: null,

              previousPrice: null,

              epoch: null,
            }));

          setMarkets(initialMarkets);

          /*
           * =====================================
           * SUBSCRIBE TO ALL SYMBOLS
           * =====================================
           *
           * Deriv ticks endpoint accepts
           * an array of symbols.
           */
          const symbols =
            activeSymbols.map(
              (item) =>
                item.underlying_symbol
            );

          if (symbols.length > 0) {
            ws.send(
              JSON.stringify({
                ticks: symbols,
                subscribe: 1,
                req_id: 2,
              })
            );

            console.log(
              "Subscribed to:",
              symbols.length,
              "symbols"
            );
          }

          setLoading(false);

          return;
        }

        /*
         * =====================================
         * LIVE TICK
         * =====================================
         */
        if (
          data.msg_type === "tick" &&
          data.tick
        ) {
          const tick = data.tick;

          setMarkets((currentMarkets) =>
            currentMarkets.map((market) => {
              if (
                market.symbol !==
                tick.symbol
              ) {
                return market;
              }

              return {
                ...market,

                previousPrice:
                  market.price,

                price:
                  Number(tick.quote),

                epoch:
                  tick.epoch,
              };
            })
          );
        }
      } catch (err) {
        console.error(
          "Deriv message parsing error:",
          err
        );
      }
    };

    ws.onerror = (event) => {
      console.error(
        "Deriv WebSocket error:",
        event
      );

      setConnected(false);
      setLoading(false);

      setError(
        "Unable to connect to Deriv"
      );
    };

    ws.onclose = () => {
      console.log(
        "Deriv WebSocket disconnected"
      );

      setConnected(false);
    };

    return () => {
      destroyed = true;

      ws.close();
    };
  }, []);

  return {
    markets,
    connected,
    loading,
    error,
  };
}