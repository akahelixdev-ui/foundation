import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site";
import { ExternalLink, ShieldCheck, HeartHandshake, Sparkles, Building2, BookOpen } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners — Halim Hashi Foundation" },
      { name: "description", content: "The Halim Hashi Foundation is primarily funded and championed by AKAHELIX Inc., ensuring 100% of community gifts reach students directly." },
      { property: "og:title", content: "Partners & Sponsors — Halim Hashi Foundation" },
      { property: "og:description", content: "Mainly funded and supported by AKAHELIX Inc." },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <Page>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <p className="eyebrow">Partners & Supporters</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-tight md:text-6xl">
          Powered by people who believe in <em className="text-primary font-normal">learning.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          The Halim Hashi Foundation is made possible through the generous principal support of AKAHELIX. Their ongoing backing ensures our educational programs in Bangladesh remain fully funded and sustainable year after year.
        </p>
      </section>

      {/* Primary Partner Feature Card */}
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="bg-[#0f172a] p-8 text-white md:p-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                  <Sparkles className="h-3.5 w-3.5" /> Principal Supporter & Founding Sponsor
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  AKAHELIX INC.
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  High-complexity genetics laboratory planning, LDT validation & clinical compliance · Port Chester, New York
                </p>
              </div>

              <a
                href="https://akahelix.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-blue-500 focus:outline-hidden"
              >
                <span>Visit akahelix.com</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-300">
              Led by Dr. Abul K. Azad, AKAHELIX builds, plans, and validates molecular and cytogenetics laboratories across North America. Believing deeply in the transformative power of schooling and equal opportunity for rural youth, AKAHELIX provides the core funding and backing that makes the Halim Hashi Foundation's work in Bangladesh possible.
            </p>
          </div>

          <div className="grid divide-y divide-border border-t border-border bg-card md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Underwriting Operations</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                AKAHELIX covers core logistical, procurement, and distribution expenses, ensuring no public gifts are lost to administrative overhead.
              </p>
            </div>

            <div className="p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Kits & Exam Sponsorships</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Directly sponsoring full-year study kits, geometry sets, and board examination fees for rural students facing financial hardship.
              </p>
            </div>

            <div className="p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Classroom Infrastructure</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Funding desks, benches, ceiling fans, and curated children's libraries for village primary schools across flood-prone and remote districts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="rounded-2xl border border-border bg-muted/30 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="eyebrow">Work with us</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Interested in partnering with the foundation?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We collaborate with community leaders, diaspora groups, educational trusts, and village headmasters who share our commitment to keeping Bangladeshi children in school.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Contact our team
              </Link>
              <Link
                to="/programs"
                className="rounded-full border border-border px-6 py-3 font-semibold hover:border-foreground"
              >
                Learn about our programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
