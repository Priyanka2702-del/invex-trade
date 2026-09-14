"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import { isLoggedIn } from "@/lib/session";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/login");
      return;
    }
    setChecked(true);
  }, [router]);

  if (!checked) return null;

  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <TopBar />
        <main className="px-6 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}