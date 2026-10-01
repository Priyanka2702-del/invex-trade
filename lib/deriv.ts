"use client";

import { useEffect, useState } from "react";

type Price = {
  price: number;
  previousPrice?: number;
  epoch: number;
};

export function useDerivEURUSD() {
  const [price, setPrice] = useState<Price | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://api.derivws.com/trading/v1/options/ws/public"
    );

    ws.onopen = () => {
      console.log("Deriv connected");

      ws.send(
        JSON.stringify({
          ticks: "frxEURUSD",
          subscribe: 1,
          req_id: 1,
        })
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.msg_type !== "tick") {
        return;
      }

      if (data.tick?.symbol !== "frxEURUSD") {
        return;
      }

      setPrice((current) => ({
        price: Number(data.tick.quote),
        previousPrice: current?.price,
        epoch: data.tick.epoch,
      }));
    };

    ws.onerror = (error) => {
      console.error("Deriv error:", error);
    };

    ws.onclose = () => {
      console.log("Deriv disconnected");
    };

    return () => {
      ws.close();
    };
  }, []);

  return price;
}