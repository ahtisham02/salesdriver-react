import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, BookOpen, X, ArrowRight } from "lucide-react";
import { promptVaultCategories } from "../../../data/promptVaultData";
import { PromptCard } from "../../../ui-components/LandingPage/Home/PromptVaultSection";
import {
  getSamplePrompts,
  getPromptSlug,
  VAULT_SAMPLE_COUNT,
} from "../../../data/promptVaultHelpers";
import { PROOF_STACK } from "../../../data/proofStack";

const CATEGORY_DOT = {
  "B2B Strategy & Offer": "bg-blue-500",
  "Cold Email & Follow-Up": "bg-orange-500",
  "LinkedIn Outreach & Social Selling": "bg-sky-500",
  "Sales Calls, Discovery, Objections & Closing": "bg-green-500",
  "ICP, Market & Buyer Research": "bg-purple-500",
  "CRM, Automation & Revenue Operations": "bg-indigo-500",
  "AI Agents, Cora & Prompt Builder": "bg-violet-500",
  "SEO, AEO & B2B Content": "bg-teal-500",
  "Social Content & Executive Thought Leadership": "bg-pink-500",
  "Ads & Paid Demand Generation": "bg-red-500",
  "Landing Pages, HyperPitch & Conversion Copy": "bg-amber-500",
  "Proposals, Decks, Case Studies & Sales Collateral": "bg-cyan-500",
  "List Building, Data QA & Enrichment": "bg-lime-500",
  "Multichannel Cadences & Follow-Up": "bg-fuchsia-500",
  "Campaign Analytics, Testing & Reporting": "bg-rose-500",
  "Customer Success, Onboarding & Retention": "bg-emerald-500",
  "Agency Service Delivery & Client Strategy": "bg-slate-500",
  "Marketplace, Vendor Matching & Post-a-Brief": "bg-yellow-500",
  "Creative, Video Ads & AI Production": "bg-orange-500",
};

const SHORT_LABELS = {
  "B2B Strategy & Offer": "B2B Strategy",
  "Cold Email & Follow-Up": "Cold Email",
  "LinkedIn Outreach & Social Selling": "LinkedIn",
  "Sales Calls, Discovery, Objections & Closing": "Sales Calls",
  "ICP, Market & Buyer Research": "ICP Research",
  "CRM, Automation & Revenue Operations": "CRM & RevOps",
  "AI Agents, Cora & Prompt Builder": "AI Agents",
  "SEO, AEO & B2B Content": "SEO & Content",
  "Social Content & Executive Thought Leadership": "Social Content",
  "Ads & Paid Demand Generation": "Paid Ads",
  "Landing Pages, HyperPitch & Conversion Copy": "Landing Pages",
  "Proposals, Decks, Case Studies & Sales Collateral": "Proposals",
  "List Building, Data QA & Enrichment": "List Building",
  "Multichannel Cadences & Follow-Up": "Multichannel",
  "Campaign Analytics, Testing & Reporting": "Analytics",
  "Customer Success, Onboarding & Retention": "Customer Success",
  "Agency Service Delivery & Client Strategy": "Agency",
  "Marketplace, Vendor Matching & Post-a-Brief": "Marketplace",
  "Creative, Video Ads & AI Production": "Creative & Video",
};

const samplePrompts = getSamplePrompts();
const categoryCounts = promptVaultCategories.reduce((acc, cat) => {
  acc[cat] = samplePrompts.filter((p) => p.category === cat).length;
  return acc;
}, {});
const sampleCategories = promptVaultCategories.filter((cat) => categoryCounts[cat] > 0);

const PromptVaultPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const chipsRef = useRef(null);

  const filtered = useMemo(() => {
    let list = samplePrompts;
    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.purpose.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.subcategory || "").toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchText]);

  const openPrompt = (prompt) => {
    navigate(`/prompt-vault/${getPromptSlug(prompt)}`);
  };

  useEffect(() => {
    // Keep active chip in view on mobile
    const el = chipsRef.current?.querySelector("[data-active='true']");
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selectedCategory]);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] pt-24 pb-12 md:pt-28 md:pb-14 border-b border-[#e2e8f0]">
        <div aria-hidden className="absolute w-80 h-80 rounded-full bg-[#EEF4FF] -top-40 -left-28 pointer-events-none" />
        <div aria-hidden className="absolute w-64 h-64 rounded-full bg-[#FFF4EA] -bottom-28 -right-20 pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                <BookOpen className="w-3.5 h-3.5" />
                Prompt Vault
              </span>
              <h1
                className="mt-3 text-[36px] sm:text-[44px] md:text-[56px] font-extrabold text-[#0B0F19] leading-[1.05] tracking-[-0.03em]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {PROOF_STACK.prompts} expert prompts.{" "}
                <span className="text-[#2563eb]">Every team.</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#475569] max-w-xl leading-relaxed">
                Browse sample prompts below. Create a free account for the full vault inside your dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 lg:pb-2">
              {[
                { value: PROOF_STACK.prompts, label: "Prompts" },
                { value: String(VAULT_SAMPLE_COUNT), label: "Samples public" },
                { value: "Free", label: "With your plan" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-[#2563eb]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {s.value}
                  </span>
                  <span className="text-sm text-[#64748B] font-semibold">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#FDBA74] bg-[#FFF7ED] px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="m-0 text-sm font-bold text-[#0B0F19]">
              Showing {VAULT_SAMPLE_COUNT} sample prompts. Unlock {PROOF_STACK.prompts} with a free account.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#1d4ed8] whitespace-nowrap no-underline"
            >
              Create free account <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky filters + search */}
      <section className="sticky top-[72px] z-20 bg-white/95 backdrop-blur border-b border-[#e2e8f0]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 py-3 flex flex-col gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
            <input
              type="text"
              placeholder="Search sample prompts..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl border border-[#E2E8F0] bg-white text-sm text-[#0B0F19] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563eb]/50 focus:ring-2 focus:ring-[#2563eb]/10"
            />
            {searchText && (
              <button
                type="button"
                onClick={() => setSearchText("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0B0F19]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div ref={chipsRef} className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              type="button"
              data-active={selectedCategory === "All" ? "true" : "false"}
              onClick={() => setSelectedCategory("All")}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                selectedCategory === "All"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
              }`}
            >
              All ({samplePrompts.length})
            </button>
            {sampleCategories.map((cat) => {
              const on = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  data-active={on ? "true" : "false"}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    on ? "bg-[#2563eb] text-white" : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${on ? "bg-white" : CATEGORY_DOT[cat] || "bg-gray-400"}`} />
                  {SHORT_LABELS[cat] || cat}
                  <span className={`text-[10px] ${on ? "text-white/80" : "text-[#94A3B8]"}`}>
                    {categoryCounts[cat]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 md:py-14 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between mb-6 gap-3">
            <div>
              <h2 className="m-0 text-lg font-bold text-[#0B0F19]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {selectedCategory === "All" ? "All sample prompts" : SHORT_LABELS[selectedCategory] || selectedCategory}
              </h2>
              <p className="m-0 text-xs text-[#64748B] mt-0.5">
                {filtered.length} prompt{filtered.length !== 1 ? "s" : ""}
                {searchText ? ` matching “${searchText}”` : ""}
              </p>
            </div>
            {(selectedCategory !== "All" || searchText) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchText("");
                }}
                className="text-xs text-[#2563eb] font-bold hover:underline inline-flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#64748B]">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-bold text-lg text-[#0B0F19]">No prompts found</p>
              <p className="text-sm mt-1">Try a different keyword or category.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchText("");
                }}
                className="mt-6 px-6 py-2.5 rounded-full border-2 border-[#2563eb] text-[#2563eb] font-bold text-sm hover:bg-[#2563eb] hover:text-white transition-all"
              >
                Show all prompts
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} onOpen={openPrompt} ctaLabel="View prompt" />
              ))}
            </div>
          )}

          <div className="mt-12 rounded-[24px] border border-[#BFDBFE] bg-[#EEF4FF] p-8 md:p-10 text-center">
            <h2
              className="m-0 text-xl md:text-2xl font-extrabold text-[#0B0F19]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Need the full vault?
            </h2>
            <p className="mt-2 text-sm text-[#475569] max-w-md mx-auto">
              {PROOF_STACK.prompts} prompts across 19 categories unlock with a free SalesDriver account.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#2563eb] px-8 py-3 text-sm font-bold text-white hover:bg-[#1d4ed8] no-underline"
            >
              Create free account for full vault
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromptVaultPage;
