import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site";
import halima from "@/assets/halima.jpg";
import { FamilyTree } from "@/components/family-tree";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our story — Halim Hashi Foundation" },
      { name: "description", content: "Why a family in Bangladesh started a foundation in their mother's name to help children study." },
      { property: "og:title", content: "Our story — Halim Hashi Foundation" },
      { property: "og:description", content: "A mother who put her children's books first, and the children who want to pass that on." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Page>
      <section className="mx-auto max-w-3xl px-5 pt-20">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-5 text-5xl leading-tight md:text-6xl">It started at our mother's kitchen table.</h1>
      </section>
      <section className="mx-auto mt-12 grid max-w-6xl gap-12 px-5 md:grid-cols-12">
        <img src={halima} alt="Halima at home" width={1008} height={1264} className="w-full rounded-lg object-cover md:col-span-5" />
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 md:col-span-7">
          <p>Amma left school when she was twelve. Not because she didn't love it — because there was no money for books, and girls were expected to help at home.</p>
          <p>When she had children of her own, she made one rule: whatever else we went without, we would never go without school. Old notebooks were cut and re-stitched. Textbooks were borrowed, copied by hand, returned on time.</p>
          <p>We grew up, found work, built lives. And we kept noticing children in our village in the same place we once were — bright, willing, and one small cost away from dropping out.</p>
          <p className="font-display text-2xl text-foreground">So on 15 October 2026, we started the Halim Hashi Foundation. In her name, and in her spirit.</p>
        </div>
      </section>
      <section id="family" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5">
        <FamilyTree />
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <h2 className="text-3xl">What we promise</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Go to the child", "We visit schools and families ourselves, so help reaches the kids who need it."],
            ["Spend it simply", "Donations go to books, supplies, fees and classroom basics. Nothing fancy."],
            ["Show you where", "We'll share photos, receipts and updates as each project happens."],
          ].map(([t, d]) => (
            <li key={t} className="border-t-2 border-primary pt-5">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
