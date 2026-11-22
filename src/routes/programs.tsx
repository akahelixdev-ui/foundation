import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site";
import supplies from "@/assets/supplies.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "What we do — Halim Hashi Foundation" },
      { name: "description", content: "Study kits, textbooks, exam fees and classroom equipment for children and schools in Bangladesh." },
      { property: "og:title", content: "What we do — Halim Hashi Foundation" },
      { property: "og:description", content: "Practical help that keeps children in Bangladesh in school." },
    ],
  }),
  component: Programs,
});

const programs = [
  { t: "Study kits", d: "A school bag with notebooks, pens, pencils, a geometry box and a calculator — handed to each child at the start of the year.", items: ["Notebooks & pens", "Geometry box", "Calculator", "School bag"] },
  { t: "Books & exam fees", d: "Many families can manage tuition but not the extras. We cover textbooks, guide books and board-exam registration so no one misses an exam over money.", items: ["Textbooks", "Guide books", "SSC / HSC exam fees"] },
  { t: "Better classrooms", d: "For rural schools: benches, whiteboards, fans, lights and a small bookshelf library so students have a decent place to learn.", items: ["Benches & desks", "Fans & lights", "Classroom library"] },
  { t: "Mentoring", d: "Older students and volunteers who check in, help with homework and talk to families when a child is at risk of leaving school.", items: ["Homework help", "Family visits"] },
];

function Programs() {
  return (
    <Page>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-20 md:grid-cols-2 md:items-end">
        <div>
          <p className="eyebrow">What we do</p>
          <h1 className="mt-5 text-5xl leading-tight md:text-6xl">Better education starts with the basics.</h1>
        </div>
        <p className="text-lg text-muted-foreground">We don't run big campaigns. We find out what a child or school is missing, and we get it to them.</p>
      </section>
      <section className="mx-auto mt-14 max-w-6xl divide-y divide-border border-y border-border px-5">
        {programs.map((p, i) => (
          <article key={p.t} className="grid gap-4 py-10 md:grid-cols-12">
            <span className="font-display text-3xl text-primary md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="text-3xl md:col-span-4">{p.t}</h2>
            <div className="md:col-span-7">
              <p className="text-foreground/85">{p.d}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.items.map((it) => (
                  <li key={it} className="rounded-full bg-secondary px-3 py-1 text-sm">{it}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <img src={supplies} alt="A student opening her new study kit" width={1200} height={1200} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
        <div>
          <h2 className="text-4xl">Know a school that needs help?</h2>
          <p className="mt-4 text-muted-foreground">Tell us about it. We read every message.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Get in touch</Link>
        </div>
      </section>
    </Page>
  );
}
