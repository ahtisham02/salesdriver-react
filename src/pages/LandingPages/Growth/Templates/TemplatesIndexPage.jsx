import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import { TEMPLATES_LIBRARY } from "../../../../data/templatesLibrary";
import { buildSignupUrl } from "../../../../utils/signupPlanIntent";
import { BOOKING_PATH } from "../../../../config/booking";
import { PROOF_STACK, PROOF_TAGLINE } from "../../../../data/proofStack";
import { FinalCTA } from "../../../../ui-components/LandingPage/Home/HomeV2";
import {
  getCategoryIcon,
  TEMPLATE_DISPLAY_FONT,
  TEMPLATE_PAGE_FONT,
} from "./templateUi";

const CATEGORIES = ["All", ...new Set(TEMPLATES_LIBRARY.map((t) => t.category))];

export default function TemplatesIndexPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return TEMPLATES_LIBRARY;
    return TEMPLATES_LIBRARY.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white flex-grow" style={TEMPLATE_PAGE_FONT}>
      {/* Hero — copy left, templates demo video right */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] pt-24 pb-14 md:pt-28 md:pb-20 border-b border-[#e2e8f0]">
        <div aria-hidden className="absolute w-80 h-80 rounded-full bg-[#EEF4FF] -top-40 -left-28 pointer-events-none" />
        <div aria-hidden className="absolute w-64 h-64 rounded-full bg-[#FFF4EA] -bottom-28 -right-20 pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            <div className="w-full lg:flex-1 min-w-0">
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Templates
              </span>
              <h1
                className="mt-3 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0B0F19] leading-[1.05] tracking-[-0.03em]"
                style={TEMPLATE_DISPLAY_FONT}
              >
                Cold email and{" "}
                <span className="text-[#2563eb]">sequence templates</span>
                <span className="text-[#F97316]">.</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#475569] max-w-xl leading-relaxed">
                Starting points for outbound cadences. Customize to your ICP inside SalesDriver —
                email, LinkedIn, triggers, and multichannel.
              </p>
              <p className="mt-2 text-sm font-medium text-[#64748b]">{PROOF_TAGLINE}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => navigate(buildSignupUrl("starter"))}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D97706] hover:bg-[#B45309] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_#D9770640] transition-colors"
                >
                  Start for {PROOF_STACK.startingPrice}/mo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate(BOOKING_PATH)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-bold text-[#0B0F19] hover:border-[#2563eb] hover:text-[#2563eb]"
                >
                  <PlayCircle className="w-5 h-5 text-[#2563eb]" />
                  Book a strategy call
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#1e293b]/60">
                {["Free plan: 250 credits/mo", "Customize every step", "No credit card required"].map(
                  (t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
                      {t}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="w-full lg:w-[52%] xl:w-[560px] flex-shrink-0">
              <div className="relative rounded-[22px] overflow-hidden border border-[#E2E8F0] bg-[#0B1220] shadow-[0_30px_70px_-24px_#0F172A40] aspect-[16/10] min-h-[240px] sm:min-h-[300px] lg:min-h-[320px]">
                <video
                  src="/videos/templates-demo.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  aria-label="SalesDriver templates demo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="py-16 md:py-20 bg-[#f8fafc]/80 border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-[#f97316] text-xs font-black uppercase tracking-widest mb-3">
              Library
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
              Pick a cadence.{" "}
              <span className="text-[#2563eb]">Make it yours.</span>
            </h2>
            <p className="mt-3 text-[#1e293b]/60 max-w-xl mx-auto">
              Filter by channel or motion, then open any stub for preview and steps.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all border-2 ${
                    active
                      ? "bg-[#2563eb] border-[#2563eb] text-white shadow-cute"
                      : "bg-white border-[#1e293b]/10 text-[#1e293b]/70 hover:border-[#2563eb]/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((t, i) => {
              const Icon = getCategoryIcon(t.category);
              return (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.24) }}
                >
                  <Link
                    to={`/templates/${t.slug}`}
                    className="group flex flex-col h-full rounded-3xl border-2 border-[#1e293b]/10 bg-white p-6 hover:border-[#2563eb]/50 hover:shadow-cute hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center group-hover:bg-[#eff6ff] group-hover:border-[#bfdbfe] transition-colors">
                        <Icon className="w-5 h-5 text-[#2563eb]" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316] bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md">
                        {t.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#1e293b] text-lg leading-snug group-hover:text-[#2563eb] transition-colors">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#1e293b]/60 leading-relaxed flex-1">
                      {t.useCase}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-bold text-[#2563eb] group-hover:gap-2 transition-all">
                      View template <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[#64748b] py-12">No templates in this category yet.</p>
          )}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
