import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-10 w-14 shrink-0 overflow-visible">
        <Image
          src="/images/logo.png"
          alt="INVEX TRADE"
          fill
          priority
          className={`object-contain scale-[1.45] transition-transform duration-300 ${
            light ? "brightness-0 invert" : ""
          }`}
        />
      </div>

     
    </div>
  );
}