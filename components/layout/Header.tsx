"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/Logo";
import MegaMenuPanel from "@/components/layout/MegaMenuPanel";
import LanguageDropdown from "@/components/layout/LanguageDropdown";
import { megaMenus } from "@/data/nav";
import { defaultLanguage } from "@/data/languages";
import { Language } from "@/types/nav";

export default function Header({
  alwaysSolid = false,
}: {
  alwaysSolid?: boolean;
}) {
  const [scrolledState, setScrolledState] = useState(false);
  const scrolled = alwaysSolid || scrolledState;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll detection
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolledState(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Click outside listener
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Escape key listener
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((cur) => (cur === name ? null : name));
  };

  const closeDropdown = () => setOpenDropdown(null);
  const isLight = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* ==================== TOP ROW (Sub-bar) ==================== */}
      <div
        className={`hidden transition-[grid-template-rows] duration-300 ease-in-out sm:grid ${
          scrolled || mobileOpen ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex h-8 sm:h-9 max-w-content items-center justify-end gap-4 sm:gap-6 px-4 sm:px-6 text-xs sm:text-sm lg:px-10">
            <Link
              href="/partnership"
              className={`transition font-medium ${
                isLight
                  ? "text-[#00B8D9] hover:text-[#00A3C4]"
                  : "text-blue hover:text-blue-deep"
              }`}
            >
              Partnership
            </Link>

            {/* Language switcher — commented out for now, not wired to real
                translations yet. Re-enable once i18n is ready (client-requested). */}
            {/* <LanguageDropdown
              isOpen={openDropdown === "language"}
              onToggle={() => toggleDropdown("language")}
              onClose={closeDropdown}
              selected={language}
              onSelect={setLanguage}
              light={isLight}
            /> */}
          </div>
        </div>
      </div>

      {/* ==================== MAIN NAVBAR ==================== */}
      <div
        ref={navRef}
        className="mx-auto flex h-16 sm:h-20 max-w-content items-center justify-between px-4 sm:px-6 lg:px-10"
      >
        {/* LEFT - Logo + Nav */}
        <div className="flex items-center gap-6 lg:gap-12">
          <Link href="/" onClick={() => { closeDropdown(); setMobileOpen(false); }}>
            <Logo light={isLight && !mobileOpen} />
          </Link>

          <nav className="hidden items-center gap-6 xl:gap-9 text-sm font-medium lg:flex">
            {megaMenus.map((menu) => {
              const isOpen = openDropdown === menu.key;
              return (
                <div key={menu.key} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(menu.key)}
                    className={`flex items-center gap-1 transition tracking-[-0.2px] ${
                      isOpen
                        ? isLight
                          ? "text-white"
                          : "text-blue"
                        : isLight
                          ? "text-white/90 hover:text-white"
                          : "text-ink hover:text-blue"
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <MegaMenuPanel
                    menu={menu}
                    isOpen={isOpen}
                    onClose={closeDropdown}
                  />
                </div>
              );
            })}
          </nav>
        </div>

        {/* RIGHT SIDE (Desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className={`px-4 py-2 text-sm font-medium transition tracking-[-0.2px] ${
              isLight
                ? "text-white/90 hover:text-white"
                : "text-ink hover:text-blue"
            }`}
          >
            Log In
          </Link>
          
          <Link
            href="/open-account"
            className="rounded-lg bg-gradient-to-r from-[#00C8FF] to-[#0052D4] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#00C8FF]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00C8FF]/30 tracking-[-0.2px]"
          >
            Open Account
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className={`p-2 lg:hidden transition ${scrolled || mobileOpen ? "text-ink" : "text-white"}`}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ==================== MOBILE MENU DRAWER ==================== */}
      {mobileOpen && (
        <div className="h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-white px-5 py-6 lg:hidden flex flex-col justify-between">
          <nav className="flex flex-col text-sm font-medium text-ink divide-y divide-line">
            {megaMenus.map((menu) => {
              const isOpen = mobileSection === menu.key;
              return (
                <div key={menu.key} className="py-1">
                  <button
                    type="button"
                    onClick={() => setMobileSection(isOpen ? null : menu.key)}
                    className="flex w-full items-center justify-between py-3.5 text-left font-semibold text-base"
                  >
                    {menu.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 text-slate-500 ${isOpen ? "rotate-180 text-blue" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mb-3 space-y-4 pl-2 pt-1 pb-2">
                      {menu.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            {col.heading}
                          </p>
                          <div className="flex flex-col gap-2.5 pl-2">
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileSection(null);
                                }}
                                className="py-1 text-sm font-medium text-slate-700 hover:text-blue transition"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Additional Links for Mobile */}
            <div className="pt-3 pb-1">
              <Link
                href="/partnership"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-between py-3 text-base font-semibold text-slate-800"
              >
                Partnership
              </Link>
            </div>
          </nav>

          {/* Bottom Actions & Buttons */}
          <div className="mt-8 pt-4 border-t border-line flex flex-col gap-3">
            {/* Language switcher — commented out for now, not wired to real
                translations yet. Re-enable once i18n is ready (client-requested). */}
            {/* <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Select Language</span>
              <LanguageDropdown
                isOpen={openDropdown === "language-mobile"}
                onToggle={() => toggleDropdown("language-mobile")}
                onClose={closeDropdown}
                selected={language}
                onSelect={setLanguage}
                light={false}
              />
            </div> */}

            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg border border-slate-200 py-3 text-center text-sm font-semibold text-slate-800 active:bg-slate-50 transition"
            >
              Log In
            </Link>

            <Link
              href="/open-account"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-gradient-to-r from-[#00C8FF] to-[#0052D4] py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#00C8FF]/20 active:opacity-90 transition-all duration-300"
            >
              Open Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}