import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site";
import classroom from "@/assets/classroom.jpg";
import halima from "@/assets/halima.jpg";
import supplies from "@/assets/supplies.jpg";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halim Hashi Foundation — Better schooling for children in Bangladesh" },
      { name: "description", content: "A family foundation giving children in Bangladesh books, study supplies and support to stay in school." },
      { property: "og:title", content: "Halim Hashi Foundation" },
      { property: "og:description", content: "Books, study supplies and support for children in Bangladesh — started by a family in their mother's name." },
    ],
  }),
  component: Index,
});

const steps = [
  {
    num: "01",
    title: "Direct School Visits",
    desc: "We coordinate with local village teachers and headmasters who intimately know their students' circumstances.",
  },
  {
    num: "02",
    title: "Identifying Real Need",
    desc: "We pinpoint students at immediate risk of dropping out due to unpaid exam fees, missing books, or stationery costs.",
  },
  {
    num: "03",
    title: "In-Person Handover",
    desc: "Supplies and fee payments are handed directly to children and schools with zero administrative middlemen.",
  },
  {
    num: "04",
    title: "Receipts & Transparency",
    desc: "Every distribution is thoroughly documented with transparent receipts and photographs shared with supporters.",
  },
];

const faqs = [
  {
    q: "How do you identify which children receive support?",
    a: "We work directly with village schoolteachers and local headmasters who know the students and their families personally. They help us identify bright, dedicated children who are on the verge of leaving school due to unpaid examination fees or lack of study supplies.",
  },
  {
    q: "How is the foundation funded?",
    a: "The foundation is primarily funded and championed by AKAHELIX Inc. (akahelix.com). Their core sponsorship underwrites our programs and covers all operational and administrative expenses, ensuring 100% of community contributions go directly to students.",
  },
  {
    q: "Can I volunteer or recommend a school that needs assistance?",
    a: "Yes, absolutely! We welcome volunteers who want to help pack kits, tutor children, or assist during school visits. If you know a rural school in Bangladesh that lacks essential supplies, please write to us through our contact page.",
  },
  {
    q: "Do you provide proof or receipts for distributions?",
    a: "Yes. For every distribution project, we maintain detailed records, store purchase invoices, and share photo updates so you can see exactly how and where the help was delivered.",
  },
];

function Index() {
  return (
    <Page>
      {/* 1. HERO SECTION */}
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 pt-14 md:grid-cols-12 md:pt-20">
        <div className="md:col-span-6">
          <p className="eyebrow">A family foundation · Bangladesh</p>
          <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">
            Every child deserves a <em className="text-primary">full school bag.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Our mother never got to finish school. She made sure we did. Now we want to do the same for children who are one textbook, one uniform, one exam fee away from giving up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
              Help a child study
            </Link>
            <Link to="/about" className="rounded-full border border-foreground/20 px-6 py-3 font-semibold hover:border-foreground">
              Read our story
            </Link>
          </div>
        </div>
        <div className="md:col-span-6">
          <img
            src={classroom}
            alt="Schoolgirls in Bangladesh reading a textbook together"
            width={1600}
            height={1008}
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
          />
          <p className="mt-2 text-xs text-muted-foreground">A village classroom, Bangladesh.</p>
        </div>
      </section>

      {/* 2. WHY HER NAME (AMMA'S STORY CALLOUT) */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:items-center">
          <img
            src={halima}
            alt="Halima, the mother the foundation is named after"
            width={1008}
            height={1264}
            loading="lazy"
            className="w-full rounded-lg object-cover md:col-span-5 shadow-md"
          />
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow">Why her name</p>
            <blockquote className="mt-5 font-display text-3xl leading-snug md:text-4xl">
              “I can't buy you everything. But I will always find money for your books.”
            </blockquote>
            <p className="mt-6 max-w-lg text-ink-foreground/70">
              That's what Amma used to tell us. She sold her gold bangles once to pay an exam fee. This foundation is our way of keeping that promise going — for other people's children.
            </p>
            <Link
              to="/about"
              hash="family"
              className="mt-8 inline-block font-semibold text-primary underline-offset-4 hover:underline"
            >
              Meet the family →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Small, practical things that keep kids in class.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {[
            ["01", "Study kits", "Notebooks, pens, geometry sets, calculators and a sturdy bag at the start of every school year."],
            ["02", "Books & fees", "Textbooks, guide books and exam registration fees — the costs that quietly push children out."],
            ["03", "Better classrooms", "Benches, lights, fans and shelves for rural schools that make do with very little."],
          ].map(([n, t, d]) => (
            <div key={n} className="bg-card p-8">
              <span className="font-display text-primary">{n}</span>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRINCIPAL SPONSOR — INSTITUTIONAL & REFINED */}
      <section className="bg-ink text-ink-foreground py-20 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-blue-600 text-white shadow-xs">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M4 3 C 4 9, 16 11, 16 17" />
                    <path d="M16 3 C 16 9, 4 11, 4 17" />
                    <line x1="5.5" y1="5" x2="14.5" y2="5" />
                    <line x1="8" y1="8" x2="12" y2="8" />
                    <line x1="8" y1="12" x2="12" y2="12" />
                    <line x1="5.5" y1="15" x2="14.5" y2="15" />
                  </svg>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Principal Funder & Founding Partner
                </span>
              </div>

              <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
                Sustained by AKAHELIX INC.
              </h3>

              <p className="mt-4 max-w-xl text-base text-ink-foreground/75 leading-relaxed">
                Our educational outreach and rural kit distributions in Bangladesh are underwritten through the core sponsorship of AKAHELIX. This institutional backing ensures every dollar given by the community goes 100% directly to books, study kits, and examination fees.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="https://akahelix.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  <span>Visit akahelix.com</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/partners"
                  className="font-medium text-ink-foreground/80 underline-offset-4 hover:text-white hover:underline"
                >
                  Learn about the partnership →
                </Link>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Zero Overhead Promise
                </p>
                <p className="mt-2 text-2xl font-display font-semibold text-white">
                  100% Direct Delivery
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-foreground/70">
                  Because AKAHELIX underwrites the foundation's administrative and operational requirements, all public donations are spent exclusively on children's study supplies and fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH (4 STEPS) */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Our approach</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">How help reaches the student.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          We don't manage large remote funds. We go into the communities ourselves to ensure resources land where they are needed most.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="rounded-xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-primary">{step.num}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ONE KIT. ONE CHILD. (PHOTO HIGHLIGHT) */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <img
          src={supplies}
          alt="A schoolgirl unpacking new study supplies"
          width={1200}
          height={1200}
          loading="lazy"
          className="aspect-square w-full rounded-lg object-cover shadow-sm"
        />
        <div>
          <p className="eyebrow">How you can help</p>
          <h2 className="mt-4 text-4xl md:text-5xl">One kit. One child. One whole year.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We're just getting started, and we'd rather tell you honestly than show you big numbers. Every gift goes straight into supplies, books and fees — and we'll share where it went.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Give or volunteer
            </Link>
            <Link
              to="/programs"
              className="rounded-full border border-border px-6 py-3 font-semibold hover:border-foreground"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="border-t border-border/70 bg-card py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Questions & Answers</h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to know about our work, donations, and how we operate.
            </p>
          </div>

          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="bg-ink text-ink-foreground py-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl">Want to speak with the family?</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-foreground/70">
            Whether you want to sponsor a student, share ideas, or recommend a classroom in Bangladesh, we would love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Get in touch with us
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}
