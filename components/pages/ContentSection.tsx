import Reveal from "@/components/ui/Reveal";

export default function ContentSection({
  heading,
  body,
  list,
}: {
  heading: string;
  body: string[];
  list?: string[];
}) {
  return (
    <section className="border-b border-line px-6 py-14 lg:px-10">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight text-ink">
          {heading}
        </h2>
        <div className="space-y-4 leading-relaxed text-steel">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {list && (
          <ul className="mt-5 space-y-2.5">
            {list.map((item) => (
              <li key={item} className="flex gap-3 text-steel">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </section>
  );
}
