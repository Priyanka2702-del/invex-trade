import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/pages/PageHero";
import ContentSection from "@/components/pages/ContentSection";
import { sitePages } from "@/data/site-content";

const page = sitePages["live-education"];

export const metadata: Metadata = {
  title: `${page.title} — INVEX TRADE`,
  description: page.description,
};

export default function LiveEducationPage() {
  return (
    <PageShell>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} cta={page.cta} />
      {page.blocks.map((block) => (
        <ContentSection key={block.heading} heading={block.heading} body={block.body} list={block.list} />
      ))}
    </PageShell>
  );
}
