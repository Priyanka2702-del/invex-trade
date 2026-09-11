import { ReactNode } from "react";

export default function PageShell({
  children,
  alwaysSolidHeader = false,
}: {
  children: ReactNode;
  alwaysSolidHeader?: boolean;
}) {
  return (
    <>
      <main className={alwaysSolidHeader ? "pt-20" : ""}>{children}</main>
      
    </>
  );
}
