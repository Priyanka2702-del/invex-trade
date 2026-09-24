"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { MegaMenu } from "@/types/nav";

export default function MegaMenuPanel({
  menu,
  isOpen,
  onClose,
}: {
  menu: MegaMenu;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          style={{ width: menu.width }}
          className="absolute left-0 top-full z-50 mt-3 max-w-[90vw] rounded-xl border border-line bg-white p-8 shadow-xl"
        >
          <div
            className="grid gap-x-8 gap-y-6 text-sm"
            style={{ gridTemplateColumns: `repeat(${menu.columns.length}, minmax(0, 1fr))` }}
          >
            {menu.columns.map((col) => (
              <div key={col.heading}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-steel">
                  {col.heading}
                </p>
                <div className="flex flex-col">
                  {col.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-md px-2 py-2 -mx-2 text-ink transition-colors hover:bg-paper hover:text-blue"
                    >
                      {link.label}
                      {link.description && (
                        <span className="mt-0.5 block text-xs font-normal text-steel">
                          {link.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
