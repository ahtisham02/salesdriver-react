import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Copy,
  Sparkles,
} from "lucide-react";
import PageTitle from "../../../../utils/PageTitle";
import {
  findPromptBySlug,
  getPromptSlug,
  getSamplePrompts,
} from "../../../../data/promptVaultHelpers";
import { promptVaultData } from "../../../../data/promptVaultData";
import { PROOF_STACK } from "../../../../data/proofStack";

const CATEGORY_COLORS = {
  "B2B Strategy & Offer": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  "Cold Email & Follow-Up": { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
  "LinkedIn Outreach & Social Selling": { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500" },
  "Sales Calls, Discovery, Objections & Closing": { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
  "ICP, Market & Buyer Research": { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  "CRM, Automation & Revenue Operations": { bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-indigo-500" },
  "AI Agents, Cora & Prompt Builder": { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500" },
  "SEO, AEO & B2B Content": { bg: "bg-teal-50", text: "text-teal-700", dot: "bg-teal-500" },
  "Social Content & Executive Thought Leadership": { bg: "bg-pink-50", text: "text-pink-700", dot: "bg-pink-500" },
  "Ads & Paid Demand Generation": { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  "Landing Pages, HyperPitch & Conversion Copy": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "Proposals, Decks, Case Studies & Sales Collateral": { bg: "bg-cyan-50", text: "text-cyan-700", dot: "bg-cyan-500" },
  "List Building, Data QA & Enrichment": { bg: "bg-lime-50", text: "text-lime-700", dot: "bg-lime-500" },
  "Multichannel Cadences & Follow-Up": { bg: "bg-fuchsia-50", text: "text-fuchsia-700", dot: "bg-fuchsia-500" },
  "Campaign Analytics, Testing & Reporting": { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
  "Customer Success, Onboarding & Retention": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "Agency Service Delivery & Client Strategy": { bg: "bg-slate-50", text: "text-slate-700", dot: "bg-slate-500" },
  "Marketplace, Vendor Matching & Post-a-Brief": { bg: "bg-yellow-50", text: "text-yellow-700", dot: "bg-yellow-500" },
  "Creative, Video Ads & AI Production": { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
};
const DEFAULT_COLOR = { bg: "bg-gray-50", text: "text-gray-700", dot: "bg-gray-500" };

export default function PromptDetailPage() {
  const { slug } = useParams();
  const prompt = findPromptBySlug(slug);
  const [copied, setCopied] = useState(false);

  const related = useMemo(() => {
    if (!prompt) return [];
    const sameCat = promptVaultData.filter(
      (p) => p.category === prompt.category && p.id !== prompt.id
    );
    const samples = getSamplePrompts().filter((p) => p.id !== prompt.id);
    const pool = sameCat.length >= 3 ? sameCat : [...sameCat, ...samples];
    const seen = new Set();
    return pool
      .filter((p) => {
        if (seen.has(p.id)) return false;
        seen.add(p.id);
        return true;
      })
      .slice(0, 3);
  }, [prompt]);

  if (!prompt) return <Navigate to="/prompt-vault" replace />;

  const color = CATEGORY_COLORS[prompt.category] || DEFAULT_COLOR;
  const body = (prompt.prompt || "").trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <PageTitle title={`${prompt.title} | Prompt Vault`} description={prompt.purpose} />
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
      >
        {/* Hero strip */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white to-[#F8FAFC] pt-24 pb-10 md:pt-28 md:pb-12">
          <div aria-hidden className="absolute w-72 h-72 rounded-full bg-[#EEF4FF] -top-36 -left-24 pointer-events-none" />
          <div aria-hidden className="absolute w-56 h-56 rounded-full bg-[#FFF4EA] -bottom-24 -right-16 pointer-events-none" />

          <div className="relative max-w-[960px] mx-auto px-5 md:px-8">
            <Link
              to="/prompt-vault"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2563eb] hover:underline no-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Prompt Vault
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-md ${color.bg} ${color.text}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                {prompt.category}
              </span>
              {prompt.subcategory && (
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#475569]">
                  {prompt.subcategory}
                </span>
              )}
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#EEF4FF] text-[#2563eb]">
                {prompt.id}
              </span>
            </div>

            <h1
              className="mt-4 text-[28px] sm:text-[36px] md:text-[42px] font-extrabold text-[#0B0F19] leading-[1.15] tracking-[-0.02em]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {prompt.title}
            </h1>
            <p className="mt-3 text-base md:text-lg text-[#475569] max-w-2xl leading-relaxed">
              {prompt.purpose}
            </p>
          </div>
        </section>

        {/* Prompt body */}
        <section className="py-10 md:py-14 bg-[#F8FAFC]">
          <div className="max-w-[960px] mx-auto px-5 md:px-8 flex flex-col gap-6">
            <div className="bg-white border border-[#E2E8F0] rounded-[22px] shadow-[0_20px_50px_-28px_#0F172A22] overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 md:px-6 py-4 border-b border-[#F1F5F9] bg-[#FAFBFC]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <div className="min-w-0">
                    <p className="m-0 text-sm font-bold text-[#0B0F19]">Prompt</p>
                    <p className="m-0 text-xs text-[#64748B] truncate">
                      Copy and paste into your AI tool
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                    copied
                      ? "bg-[#16A34A] text-white"
                      : "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                  }`}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy prompt"}
                </button>
              </div>

              <pre className="m-0 whitespace-pre-wrap break-words px-5 md:px-6 py-6 text-[14px] md:text-[15px] leading-relaxed text-[#1e293b] font-mono bg-white max-h-[min(70vh,560px)] overflow-y-auto">
                {body || "Prompt text unavailable."}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1d4ed8] shadow-[0_10px_24px_#2563eb33]"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied to clipboard" : "Copy prompt"}
              </button>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#ea6c0a] shadow-[0_10px_24px_#F9731640] no-underline"
              >
                Unlock full vault
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/prompt-vault"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-bold text-[#0B0F19] hover:border-[#2563eb] hover:text-[#2563eb] no-underline"
              >
                Browse more prompts
              </Link>
            </div>

            {/* Unlock CTA */}
            <div className="rounded-[20px] border border-[#BFDBFE] bg-[#EEF4FF] px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
              <div className="flex gap-3 items-start">
                <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-[#DBE7FE]">
                  <BookOpen className="w-5 h-5 text-[#2563eb]" />
                </span>
                <div>
                  <p
                    className="m-0 text-base font-extrabold text-[#0B0F19]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Need all {PROOF_STACK.prompts} prompts?
                  </p>
                  <p className="m-0 mt-1 text-sm text-[#475569]">
                    Create a free account to unlock the full Prompt Vault across every category.
                  </p>
                </div>
              </div>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-bold text-white hover:bg-[#1d4ed8] whitespace-nowrap no-underline"
              >
                Create free account
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-12 md:py-16 bg-white border-t border-[#e2e8f0]">
            <div className="max-w-[960px] mx-auto px-5 md:px-8">
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                    Related
                  </span>
                  <h2
                    className="m-0 mt-1 text-xl md:text-2xl font-extrabold text-[#0B0F19]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    More from this category
                  </h2>
                </div>
                <Link
                  to="/prompt-vault"
                  className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[#2563eb] hover:underline no-underline"
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((p) => {
                  const c = CATEGORY_COLORS[p.category] || DEFAULT_COLOR;
                  return (
                    <Link
                      key={p.id}
                      to={`/prompt-vault/${getPromptSlug(p)}`}
                      className="group bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#BFDBFE] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_#2563EB44] transition-all no-underline flex flex-col"
                    >
                      <span
                        className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-md mb-3 ${c.bg} ${c.text}`}
                      >
                        {p.subcategory || p.category}
                      </span>
                      <h3
                        className="m-0 text-[15px] font-bold text-[#0B0F19] leading-snug group-hover:text-[#2563eb] transition-colors line-clamp-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {p.title}
                      </h3>
                      <p className="m-0 mt-2 text-xs text-[#64748B] line-clamp-2 flex-1">
                        {p.purpose}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#2563eb]">
                        Open prompt <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
