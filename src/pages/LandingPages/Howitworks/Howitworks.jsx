import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Database,
  Megaphone,
  Bot,
  RefreshCw,
  LineChart,
  Crosshair,
  MessageSquare,
  TrendingUp,
  Check,
} from "lucide-react";
import { BOOKING_PATH } from "../../../config/booking";
import { PROOF_STACK } from "../../../data/proofStack";
import { caseStudies } from "../../../data/caseStudiesData";
import { isCaseStudyPublished } from "../../../content/facts";

const STEPS = [
  {
    num: "01",
    title: "Define your ICP",
    meta: "Firmographics · triggers · buyer roles",
    icon: Target,
    blurb:
      "Lock who you sell to before you spend a credit: company size, industry, geography, and the titles that actually buy.",
    points: [
      "ICP brief with must-have and nice-to-have filters",
      "Buying triggers and exclusion rules",
      "Primary and secondary buyer personas",
    ],
    runsOn: "Strategy workshop + MTN Data",
  },
  {
    num: "02",
    title: "Build clean lists",
    meta: "Data · verification · enrichment",
    icon: Database,
    blurb:
      "Pull accounts and contacts from one credit pool, verify emails, and enrich so outreach lands with the right person.",
    points: [
      "Account and contact lists matched to ICP",
      "Email verification before first send",
      "Suppression of customers and open deals",
    ],
    runsOn: "MTN Data · ExactMails · MTN Verify",
  },
  {
    num: "03",
    title: "Launch sequences",
    meta: "Email · LinkedIn · multichannel",
    icon: Megaphone,
    blurb:
      "Run email and LinkedIn cadences from one place with copy that matches your voice and a clear next step.",
    points: [
      "Multichannel sequences ready to send",
      "Warmed domains and sending infrastructure",
      "Variant tests on subject and angle",
    ],
    runsOn: "SD Sender · HyperPitch · Trafera",
  },
  {
    num: "04",
    title: "AI follow-up",
    meta: "Cora · Prompt Vault · reply assist",
    icon: Bot,
    blurb:
      "Cora and the Prompt Vault help research, draft replies, and keep threads moving without dropping interested buyers.",
    points: [
      "Reply handling with human oversight",
      "Prompt-assisted research and copy",
      "Same-day response on hot threads",
    ],
    runsOn: "Cora · Prompt Vault · SD CRM",
  },
  {
    num: "05",
    title: "Sync your CRM",
    meta: "Activities · stages · reporting",
    icon: RefreshCw,
    blurb:
      "Meetings, replies, and pipeline stages stay connected so sales sees the full story — not a spreadsheet dump.",
    points: [
      "Activities logged to the right account",
      "Stages and owners stay clear",
      "Live dashboard for the week",
    ],
    runsOn: "SD CRM · reporting",
  },
  {
    num: "06",
    title: "Optimize and scale",
    meta: "Benchmarks · templates · managed help",
    icon: LineChart,
    blurb:
      "Kill what fails, double down on what works, and bring in managed outbound when you want the SalesDriver team running it.",
    points: [
      "Weekly scorecard and next tests",
      "Templates for the next cycle",
      "Optional managed pod when you need capacity",
    ],
    runsOn: "Dashboard · Managed Outbound",
  },
];

const PILLARS = [
  {
    tag: "Find",
    icon: Crosshair,
    title: "Better data. Better targets.",
    body: "LeadsDriver, MTN Data, and Trafera help you find, enrich, verify, and prioritize the accounts most likely to buy.",
  },
  {
    tag: "Engage",
    icon: MessageSquare,
    title: "Outreach that gets replies.",
    body: "Email, LinkedIn, sequences, and follow-ups launch from one stack so every channel stays on the same story.",
  },
  {
    tag: "Grow",
    icon: TrendingUp,
    title: "Pipeline you can trust.",
    body: "CRM, scoring, reporting, and AI agents that help execute — not just organize — so pipeline stays visible.",
  },
];

export default function HowitworksPage() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  const Icon = step.icon;

  const featured = caseStudies
    .filter((cs) => isCaseStudyPublished(cs.slug) && cs.overview)
    .slice(0, 3);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
    >
      {/* Hero — copy left, demo video right */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] pt-24 pb-14 md:pt-28 md:pb-20 border-b border-[#e2e8f0]">
        <div aria-hidden className="absolute w-80 h-80 rounded-full bg-[#EEF4FF] -top-40 -left-28 pointer-events-none" />
        <div aria-hidden className="absolute w-64 h-64 rounded-full bg-[#FFF4EA] -bottom-28 -right-20 pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            <div className="w-full lg:flex-1 min-w-0">
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                How it works
              </span>
              <h1
                className="mt-3 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0B0F19] leading-[1.05] tracking-[-0.03em]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Outbound that follows a{" "}
                <span className="text-[#2563eb]">repeatable system</span>
                <span className="text-[#F97316]">.</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#475569] max-w-xl leading-relaxed">
                From ICP to booked meeting — one workflow on the SalesDriver platform.
                Pick a step below to see what happens at each stage.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to={BOOKING_PATH}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_#F9731640] hover:bg-[#ea6c0a] no-underline"
                >
                  Book a strategy call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/platform"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-bold text-[#0B0F19] hover:border-[#2563eb] hover:text-[#2563eb] no-underline"
                >
                  Explore the platform
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { value: PROOF_STACK.growthTools, label: PROOF_STACK.growthToolsLabel },
                  { value: PROOF_STACK.prompts, label: "expert prompts" },
                  { value: PROOF_STACK.startingPrice, label: "to start" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span
                      className="text-2xl font-extrabold text-[#2563eb]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {s.value}
                    </span>
                    <span className="text-sm text-[#64748B] font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[52%] xl:w-[560px] flex-shrink-0">
              <div className="relative rounded-[22px] overflow-hidden border border-[#E2E8F0] bg-[#0B1220] shadow-[0_30px_70px_-24px_#0F172A40] aspect-[16/10] min-h-[240px] sm:min-h-[300px] lg:min-h-[320px]">
                <video
                  src="/videos/how-it-works-demo.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  aria-label="How SalesDriver works demo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find · Engage · Grow */}
      <section className="py-14 md:py-16 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
              The motion
            </span>
            <h2
              className="mt-2 text-3xl md:text-4xl font-extrabold text-[#0B0F19]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Find · Engage · Grow
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((p) => {
              const PIcon = p.icon;
              return (
                <div
                  key={p.tag}
                  className="rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-7 flex flex-col gap-3"
                >
                  <span className="w-11 h-11 rounded-2xl bg-[#EEF4FF] flex items-center justify-center">
                    <PIcon className="w-5 h-5 text-[#2563eb]" strokeWidth={2.2} />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F97316]">
                    {p.tag}
                  </span>
                  <h3
                    className="m-0 text-xl font-extrabold text-[#0B0F19]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="m-0 text-sm text-[#475569] leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive steps */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 flex flex-col gap-9">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-[13px] font-semibold tracking-[0.14em] text-[#2563EB]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                SIX STEPS · ONE SYSTEM
              </span>
              <h2
                className="mt-2 text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0B0F19]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                From ICP to meeting —{" "}
                <span className="text-[#2563EB]">without the tool maze.</span>
              </h2>
            </div>
            <p className="m-0 text-[#475569] max-w-md">
              Click a step. See the outcome, what runs on the platform, and what your team still owns.
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center gap-0 px-1 overflow-x-auto no-scrollbar">
            {STEPS.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center ${i < STEPS.length - 1 ? "flex-1 min-w-[52px]" : ""}`}
                aria-label={`Go to step ${s.num}`}
              >
                <span
                  className={`w-7 h-7 sm:w-[34px] sm:h-[34px] flex-none rounded-full flex items-center justify-center text-[11px] sm:text-[13px] font-bold transition-all ${
                    i === active
                      ? "bg-[#2563EB] text-white shadow-[0_6px_14px_#2563EB40]"
                      : i < active
                        ? "bg-[#2563EB]/15 text-[#2563EB] border-2 border-[#2563EB]/40"
                        : "bg-white text-[#94A3B8] border-2 border-[#E2E8F0]"
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.num}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className={`flex-1 h-[3px] mx-1 sm:mx-2 rounded-full transition-colors ${
                      i < active ? "bg-[#2563EB]" : "bg-[#E2E8F0]"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div role="tablist" aria-label="Workflow steps" className="w-full lg:max-w-[400px] flex flex-col gap-2 flex-shrink-0">
              {STEPS.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.num}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 text-left rounded-2xl px-4 py-3.5 transition-all ${
                      on
                        ? "bg-[#2563EB] text-white border border-[#2563EB] shadow-[0_14px_30px_-10px_#2563EB80]"
                        : "bg-white text-[#0B0F19] border border-[#E2E8F0] hover:border-[#BFDBFE]"
                    }`}
                  >
                    <span
                      className={`w-10 h-10 flex-none rounded-xl flex items-center justify-center text-sm font-bold ${
                        on ? "bg-white/15 text-white" : "bg-[#EEF4FF] text-[#2563EB]"
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {s.num}
                    </span>
                    <span className="flex flex-col leading-snug min-w-0">
                      <b className="text-[15px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {s.title}
                      </b>
                      <span className={`text-[12.5px] ${on ? "opacity-80" : "text-[#64748B]"}`}>
                        {s.meta}
                      </span>
                    </span>
                    {on && <ArrowRight className="w-[18px] h-[18px] ml-auto flex-shrink-0" strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              className="flex-1 min-w-0 bg-white border border-[#DBE7FE] rounded-[22px] shadow-[0_24px_50px_-20px_#2563EB33] p-5 sm:p-7 md:p-8 flex flex-col gap-[18px] relative overflow-hidden"
            >
              <div aria-hidden className="absolute w-[200px] h-[200px] rounded-full bg-[#EEF4FF] -top-20 -right-16 pointer-events-none" />
              <div className="relative flex items-center gap-3.5">
                <span className="w-[52px] h-[52px] rounded-[14px] bg-[#2563EB] flex items-center justify-center shadow-[0_10px_22px_#2563EB40]">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.2} />
                </span>
                <span className="flex flex-col">
                  <span className="text-[13px] font-bold tracking-[0.1em] text-[#F97316]">
                    STEP {step.num}
                  </span>
                  <b
                    className="text-2xl md:text-[28px] leading-snug text-[#0B0F19]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step.title}
                  </b>
                </span>
              </div>
              <p className="relative m-0 text-[#475569] text-[16px] md:text-[17px] max-w-2xl">
                {step.blurb}
              </p>
              <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4">
                <div className="bg-[#F8FAFC] border border-[#EEF2F6] rounded-2xl p-5 flex flex-col gap-3">
                  <span className="text-xs font-bold tracking-[0.12em] text-[#64748B]">WHAT YOU GET</span>
                  {step.points.map((d) => (
                    <span key={d} className="flex gap-2.5 items-start text-[15px] text-[#1F2937]">
                      <span className="w-5 h-5 flex-none rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {d}
                    </span>
                  ))}
                </div>
                <div className="bg-white border border-[#EEF2F6] rounded-2xl px-[18px] py-4 flex flex-col gap-1.5 h-fit">
                  <span className="text-xs font-bold tracking-[0.12em] text-[#64748B]">RUNS ON</span>
                  <b className="text-base text-[#2563EB]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {step.runsOn}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      {featured.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t border-[#e2e8f0]">
          <div className="max-w-[1360px] mx-auto px-5 md:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                  Proof
                </span>
                <h2
                  className="mt-2 text-3xl md:text-4xl font-extrabold text-[#0B0F19]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Real teams. Real pipeline.
                </h2>
              </div>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563eb] hover:underline no-underline"
              >
                All case studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map((study) => (
                <Link
                  key={study.slug}
                  to={`/case-studies/${study.slug}`}
                  className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] p-6 flex flex-col hover:border-[#BFDBFE] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_#2563EB44] transition-all no-underline"
                >
                  <span className="text-[11px] font-bold text-[#2563eb] mb-2">{study.title}</span>
                  <h3
                    className="m-0 text-lg font-bold text-[#0B0F19] leading-snug group-hover:text-[#2563eb] transition-colors line-clamp-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {study.headline}
                  </h3>
                  <p className="m-0 mt-2 text-sm text-[#64748B] line-clamp-3 flex-1">{study.overview}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#2563eb]">
                    Read story <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0B2A4A] text-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to run this system?
          </h2>
          <p className="mt-4 text-[#CBD5E1] max-w-xl mx-auto">
            Start on the platform from {PROOF_STACK.startingPrice}
            {PROOF_STACK.startingPriceSuffix}, or book a call if you want managed outbound.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={BOOKING_PATH}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#ea6c0a] no-underline"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 no-underline"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
