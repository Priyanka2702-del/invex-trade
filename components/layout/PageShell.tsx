import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PageShell({
  children,
  alwaysSolidHeader = false,
}: {
  children: ReactNode;
  alwaysSolidHeader?: boolean;
}) {
  return (
    <>
      <Header alwaysSolid={alwaysSolidHeader} />
      <main className={alwaysSolidHeader ? "pt-20" : ""}>{children}</main>
      <Footer />
    </>
  );
}