// components/home/InstrumentCards.tsx

import Image from "next/image";

interface Instrument {
  symbol: string;
  name: string;
  icon: string; // image path ya emoji
}

const instruments: Instrument[] = [
  {
    symbol: "EURUSD",
    name: "Euro vs U.S. Dollar",
    icon: "/images/flags/eurusd.png", // yahan apni image daal dena
  },
  {
    symbol: "US500",
    name: "S&P 500 (US500)",
    icon: "/images/flags/us500.png",
  },
  {
    symbol: "GOLD",
    name: "Gold",
    icon: "/images/icons/gold.png",
  },
  {
    symbol: "COFFEE",
    name: "US Coffee",
    icon: "/images/icons/coffee.png",
  },
  {
    symbol: "AAPL",
    name: "Apple (AAPL.OQ)",
    icon: "/images/icons/apple.png",
  },
];

export default function InstrumentCards() {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4">
      {instruments.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-xl bg-[#1A1F2E] px-4 py-3 text-sm text-white shadow-md hover:bg-[#252B3D] transition"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
            {/* Icon - Image ya Emoji */}
            {item.icon.startsWith("/") ? (
              <Image
                src={item.icon}
                alt={item.symbol}
                width={24}
                height={24}
                className="object-contain"
              />
            ) : (
              <span className="text-lg">{item.icon}</span>
            )}
          </div>
          <div>
            <div className="font-semibold tracking-wide">{item.symbol}</div>
            <div className="text-xs text-white/60">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}