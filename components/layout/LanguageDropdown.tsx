"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { languages } from "@/data/languages";
import { Language } from "@/types/nav";

/** Real flag icon (not emoji — Windows/Chrome doesn't render flag emoji, it falls
 * back to plain letters like "GB"). Loads from /public/images/flags/{flagCode}.webp —
 * drop a file named after each language's flagCode (e.g. gb.webp, in.webp, fr.webp) there. */
function FlagIcon({ flagCode, name, className = "" }: { flagCode: string; name: string; className?: string }) {
  return (
    <img
      src={`/images/flags/${flagCode}.webp`}
      width={20}
      height={15}
      alt=""
      title={name}
      loading="lazy"
      className={`inline-block shrink-0 rounded-[2px] object-cover ${className}`}
    />
  );
}

export default function LanguageDropdown({
  isOpen,
  onToggle,
  onClose,
  selected,
  onSelect,
  light,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  selected: Language;
  onSelect: (lang: Language) => void;
  light: boolean;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center gap-1.5 rounded px-2.5 py-2 text-sm font-medium transition ${
          light ? "text-white/90 hover:text-white" : "text-ink hover:text-blue"
        }`}
      >
        <FlagIcon flagCode={selected.flagCode} name={selected.name} />
        <span>{selected.code}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-3 w-[92vw] max-w-[560px] rounded-xl border border-line bg-white p-6 text-ink shadow-xl sm:w-[560px]"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-steel">
              Select Language
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-4">
              {languages.map((lang) => {
                const active = lang.code === selected.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onSelect(lang);
                      onClose();
                    }}
                    className={`flex items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left text-sm transition ${
                      active ? "bg-blue/10 text-blue" : "text-ink hover:bg-paper"
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <FlagIcon flagCode={lang.flagCode} name={lang.name} />
                      <span className="truncate">{lang.name}</span>
                    </span>
                    {active && <Check size={14} className="shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}