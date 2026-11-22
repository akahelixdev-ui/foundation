import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Donate or volunteer — Halim Hashi Foundation" },
      { name: "description", content: "Give a study kit, sponsor exam fees or volunteer with the Halim Hashi Foundation in Bangladesh." },
      { property: "og:title", content: "Get involved — Halim Hashi Foundation" },
      { property: "og:description", content: "Help a child in Bangladesh stay in school." },
    ],
  }),
  component: Contact,
});

const EMAIL = "foundation@akahelix.com";

function Contact() {
  return (
    <Page>
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <p className="eyebrow">Get involved</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-tight md:text-6xl">There's a place for you here.</h1>
      </section>
      <section className="mx-auto mt-14 grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {[
          ["Give a study kit", "Cover one child's notebooks, pens, calculator and bag for a full year."],
          ["Sponsor books & fees", "Pay for textbooks or a board-exam fee so a student doesn't miss out."],
          ["Volunteer", "Teach, mentor, help with deliveries, or lend your skills from anywhere."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-lg border border-border bg-card p-8">
            <h2 className="text-2xl">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="rounded-lg bg-ink p-10 text-ink-foreground md:p-14">
          <h2 className="text-4xl">Talk to the family directly.</h2>
          <p className="mt-4 max-w-xl text-ink-foreground/70">No call centre. Write to us and one of us will reply — usually within a couple of days.</p>
          <div className="mt-8 flex flex-wrap gap-6 text-lg">
            <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:underline">{EMAIL}</a>
          </div>
        </div>
      </section>
    </Page>
  );
}
