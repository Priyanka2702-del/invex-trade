"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";

export default function SupportButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-5 z-50 sm:bottom-20 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="mb-3 w-64 rounded-xl border border-line bg-white p-5 shadow-xl"
          >
            <p className="mb-1 text-sm font-semibold text-ink">Need a hand?</p>
            <p className="mb-4 text-xs leading-relaxed text-steel">
              Our support team is available 24/5. Get help with your account, platform or a trade.
            </p>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded bg-blue px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-blue-deep"
            >
              Contact Support
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close support menu" : "Open support menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue text-white shadow-lg transition hover:bg-blue-deep"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue/40" style={{ animationDuration: "2.4s" }} />
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
