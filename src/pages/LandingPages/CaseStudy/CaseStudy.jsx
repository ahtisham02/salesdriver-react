import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { caseStudies } from "../../../data/caseStudiesData";
import { BOOKING_PATH } from "../../../config/booking";
import { isCaseStudyPublished } from "../../../content/facts";

export default function CasestudyPage() {
  const published = useMemo(
    () => caseStudies.filter((study) => isCaseStudyPublished(study.slug)),
    []
  );

  const regionLabel = (study) => {
    if (study.title?.includes("(")) {
      return study.title.split("(")[1].replace(")", "").trim();
    }
    return study.customerDetails?.industry || "B2B";
  };

  const industries = useMemo(() => {
    const set = new Set(published.map((s) => s.customerDetails?.industry || regionLabel(s)));
    return ["All", ...Array.from(set)];
  }, [published]);

  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return published;
    return published.filter(
      (s) => (s.customerDetails?.industry || regionLabel(s)) === filter
    );
  }, [published, filter]);

  const featured = filtered[0] || published[0];
  const rest = featured ? filtered.filter((s) => s.slug !== featured.slug) : filtered;

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
    >
      {/* Hero — copy left, demo video right */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] pt-24 pb-12 md:pt-28 md:pb-16 border-b border-[#e2e8f0]">
        <div aria-hidden className="absolute w-80 h-80 rounded-full bg-[#EEF4FF] -top-40 -left-28 pointer-events-none" />
        <div aria-hidden className="absolute w-64 h-64 rounded-full bg-[#FFF4EA] -bottom-28 -right-20 pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            <div className="w-full lg:flex-1 min-w-0">
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Case studies
              </span>
              <h1
                className="mt-3 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0B0F19] leading-[1.05] tracking-[-0.03em]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                How B2B teams{" "}
                <span className="text-[#2563eb]">reach buyers</span>
                <span className="text-[#F97316]">.</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#475569] max-w-xl leading-relaxed">
                Real outbound outcomes from agencies, SaaS, and service teams using SalesDriver —
                meetings booked, retainers closed, markets entered.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { value: String(published.length), label: "Published studies" },
                  { value: "B2B", label: "Outbound focus" },
                  { value: "Global", label: "US, EU & APAC" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#2563eb]" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
                  src="/videos/case-studies-demo.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  aria-label="SalesDriver case studies demo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] z-20 bg-white/95 backdrop-blur border-b border-[#e2e8f0]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setFilter(ind)}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                filter === ind
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 flex flex-col gap-8">
          {published.length === 0 ? (
            <div className="text-center py-20 text-[#64748B]">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-bold text-lg text-[#0B0F19]">No published case studies yet</p>
              <p className="text-sm mt-1">Check back soon for new results.</p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <Link
                  to={`/case-studies/${featured.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-0 bg-white border border-[#E2E8F0] rounded-[24px] overflow-hidden shadow-[0_20px_50px_-28px_#0F172A22] hover:shadow-[0_28px_60px_-24px_#2563EB33] transition-shadow no-underline"
                >
                  <div className="p-7 md:p-10 flex flex-col gap-4 justify-center">
                    <span className="self-start text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#EEF4FF] text-[#2563eb]">
                      Featured · {regionLabel(featured)}
                    </span>
                    <h2
                      className="m-0 text-2xl md:text-3xl font-extrabold text-[#0B0F19] leading-snug group-hover:text-[#2563eb] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {featured.headline}
                    </h2>
                    <p className="m-0 text-[#475569] leading-relaxed line-clamp-3">
                      {featured.overview}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {(featured.stats || []).slice(0, 3).map((stat) => (
                        <span
                          key={stat}
                          className="text-[12px] font-bold px-3 py-1.5 rounded-full bg-[#FFF7ED] text-[#C2410C]"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#2563eb] text-sm font-bold mt-2 group-hover:gap-3 transition-all">
                      Read full story <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-[#0B2A4A] to-[#071E2B] p-7 md:p-10 flex flex-col justify-center gap-5 text-white min-h-[220px]">
                    <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#60A5FA]">
                      Outcome
                    </span>
                    <ul className="m-0 p-0 list-none flex flex-col gap-3">
                      {(featured.results || featured.stats || []).slice(0, 3).map((r) => (
                        <li key={r} className="flex gap-2.5 text-[15px] text-[#E5ECF3]">
                          <span className="text-[#4ADE80] font-extrabold">✓</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    {featured.customerDetails?.industry && (
                      <p className="m-0 text-sm text-[#94A3B8] pt-2 border-t border-[#1E3A5F]">
                        {featured.customerDetails.industry}
                        {featured.customerDetails.size ? ` · ${featured.customerDetails.size}` : ""}
                      </p>
                    )}
                  </div>
                </Link>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {rest.map((study) => (
                    <Link
                      key={study.slug}
                      to={`/case-studies/${study.slug}`}
                      className="group relative bg-white rounded-[20px] border border-[#E2E8F0] p-6 flex flex-col h-full hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-[0_18px_40px_-20px_#2563EB44] transition-all no-underline"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#EEF4FF] text-[#2563eb]">
                          {regionLabel(study)}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563eb] group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3
                        className="m-0 text-lg font-bold text-[#0B0F19] leading-snug mb-2 group-hover:text-[#2563eb] transition-colors line-clamp-3"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {study.headline}
                      </h3>
                      <p className="m-0 text-sm text-[#64748B] leading-relaxed line-clamp-3 mb-5 flex-1">
                        {study.overview}
                      </p>
                      <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                        {(study.stats || []).slice(0, 2).map((stat) => (
                          <span
                            key={stat}
                            className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#FFF7ED] text-[#F97316]"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0B0F19]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Want results like <span className="text-[#2563eb]">these?</span>
          </h2>
          <p className="mt-4 text-[#475569] max-w-xl mx-auto">
            Book a strategy call and see how SalesDriver can build predictable outbound for your team.
          </p>
          <Link
            to={BOOKING_PATH}
            className="inline-flex items-center justify-center gap-2 mt-8 rounded-full bg-[#F97316] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#ea6c0a] transition-colors shadow-[0_10px_24px_#F9731640] no-underline"
          >
            Book a strategy call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
