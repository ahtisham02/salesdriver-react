import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Book,
  Terminal,
  ShieldCheck,
  Zap,
  MousePointerClick,
  Database,
  Search,
  Sparkles,
  Phone,
  Code,
  Layers,
  AlertCircle,
  Copy,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Webhook,
} from "lucide-react";
import {
  FlowStats,
  FlowCta,
  FlowReveal,
  FlowSectionHeader,
} from "../../../ui-components/LandingPage/Common/flowLandingUi";
import { BOOKING_PATH } from "../../../config/booking";

const DOC_STATS = [
  { value: "REST", label: "Architecture", icon: Terminal },
  { value: "HMAC", label: "Webhooks", icon: ShieldCheck },
];

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group mt-4">
      <button
        type="button"
        onClick={copy}
        className="absolute right-4 top-4 z-10 p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? (
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#00A7E2]">Copied</span>
        ) : (
          <Copy size={16} />
        )}
      </button>
      <pre className="bg-[#0B2233] rounded-2xl p-5 overflow-x-auto border border-[#1e293b]/20">
        <code className="text-sm font-mono text-[#93c5fd] leading-relaxed whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function DocSection({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 mb-20">
      <FlowReveal>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-[#eff6ff] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#2563eb]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b]">{title}</h2>
        </div>
        <div className="space-y-6 text-[#1e293b]/70 leading-relaxed">{children}</div>
      </FlowReveal>
    </section>
  );
}

function EndpointCard({ method, path, title, description, code, methodColor = "bg-[#eff6ff] text-[#2563eb]" }) {
  return (
    <div className="rounded-3xl border-2 border-[#1e293b]/10 bg-white p-6 hover:shadow-cute hover:-translate-y-1 transition-all">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${methodColor}`}>
          {method}
        </span>
        <span className="text-xs font-mono text-[#1e293b]/50">{path}</span>
      </div>
      <h4 className="text-base font-bold text-[#1e293b] mb-2">{title}</h4>
      <p className="text-sm text-[#1e293b]/60 mb-2">{description}</p>
      {code && <CodeBlock code={code} />}
    </div>
  );
}

export default function Documentation() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("getting-started");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { id: "getting-started", label: "Getting Started", icon: Book },
    { id: "auth", label: "Authentication", icon: Terminal },
    { id: "sd-flow", label: "SD Flow", icon: Zap },
    { id: "leads-driver", label: "LeadsDriver", icon: MousePointerClick },
    { id: "core-tools", label: "Core API Tools", icon: Layers },
    { id: "webhooks", label: "Webhooks", icon: ShieldCheck },
    { id: "errors", label: "Error Handling", icon: AlertCircle },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  return (
    <div
      className="bg-white pt-20 md:pt-24"
      style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
    >
      <div className="relative z-0 bg-[#fff7ed] border-b border-[#fdba74] px-6 py-3 text-center text-sm text-[#9a3412] font-semibold">
        Developer preview. The SalesDriver API is in early access, so endpoints, limits and keys may change.{" "}
        <Link to="/contact?topic=api" className="underline hover:text-[#7c2d12]">Contact us for access</Link>.
      </div>

      {/* Hero — copy left, documentation demo video right */}
      <section className="relative z-0 overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] pt-12 pb-12 md:pt-16 md:pb-16 border-b border-[#e2e8f0]">
        <div aria-hidden className="absolute w-80 h-80 rounded-full bg-[#EEF4FF] -top-40 -left-28 pointer-events-none" />
        <div aria-hidden className="absolute w-64 h-64 rounded-full bg-[#FFF4EA] -bottom-28 -right-20 pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start lg:items-center">
            <div className="w-full lg:flex-1 min-w-0">
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Documentation
              </span>
              <h1
                className="mt-3 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0B0F19] leading-[1.05] tracking-[-0.03em]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Developer{" "}
                <span className="text-[#2563eb]">Docs</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-[#475569] max-w-xl leading-relaxed">
                Integrate SalesDriver intelligence into your stack. REST APIs for data,
                outreach, AI agents, and CRM — one architecture across the growth platform.
              </p>
              <p className="mt-2 text-sm text-[#64748B] max-w-xl">
                API references, integration guides, and setup docs for SD Flow and LeadsDriver.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/universal-api-keys")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1d4ed8] shadow-[0_10px_24px_#2563eb40]"
                >
                  Manage API keys
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate(BOOKING_PATH)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-bold text-[#0B0F19] hover:border-[#2563eb] hover:text-[#2563eb]"
                >
                  Book a call
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                {DOC_STATS.map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
                      <s.icon className="w-4 h-4 text-[#2563eb]" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg font-extrabold text-[#0B0F19]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {s.value}
                      </span>
                      <span className="text-xs text-[#64748B] font-semibold">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[52%] xl:w-[560px] flex-shrink-0">
              <div className="relative rounded-[22px] overflow-hidden border border-[#E2E8F0] bg-[#0B1220] shadow-[0_30px_70px_-24px_#0F172A40] aspect-[16/10] min-h-[240px] sm:min-h-[300px] lg:min-h-[320px]">
                <video
                  src="/videos/documentation-demo.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  aria-label="SalesDriver documentation developer demo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FlowStats stats={DOC_STATS} />

      <div className="max-w-7xl 2xl:max-w-[1700px] mx-auto px-6 lg:px-12 pb-24 w-full">
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-[#2563eb] text-white rounded-full shadow-cute"
          aria-label="Toggle documentation menu"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-10">
          {/* Sidebar */}
          <aside
            className={`lg:w-72 shrink-0 lg:sticky lg:top-24 lg:self-start ${
              sidebarOpen
                ? "fixed inset-x-4 top-24 bottom-4 z-40 bg-white rounded-3xl border-2 border-[#1e293b]/10 shadow-cute p-6 overflow-y-auto"
                : "hidden lg:block"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-4">Documentation</p>
            <nav className="space-y-1" aria-label="Documentation sections">
              {sections.map((s) => {
                const Icon = s.icon;
                const active = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      active
                        ? "bg-[#2563eb] text-white shadow-cute"
                        : "text-[#1e293b]/60 hover:bg-[#f1f5f9] hover:text-[#1e293b]"
                    }`}
                  >
                    <Icon size={18} />
                    {s.label}
                  </button>
                );
              })}
            </nav>
            <div className="mt-8 pt-6 border-t border-[#e2e8f0] space-y-3">
              <Link
                to="/universal-api-keys"
                className="flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline"
              >
                <Code size={16} /> Universal API Keys
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline"
              >
                <Phone size={16} /> Developer support
              </Link>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <DocSection id="getting-started" icon={Book} title="Getting Started">
              <p>
                Welcome to the SalesDriver Developer Platform. Our API is organized around REST. Every tool in the
                ecosystem, from <strong className="text-[#1e293b]">MTN Data</strong> for intelligence to{" "}
                <strong className="text-[#1e293b]">SD Flow</strong> for outreach, is accessible through one unified
                architecture.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Sparkles, title: "The ecosystem", desc: "Credits, workspaces, and tools across the platform." },
                  { icon: Terminal, title: "First API call", desc: "Make your first authenticated request in 5 minutes." },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="rounded-3xl border-2 border-[#1e293b]/10 p-6 hover:shadow-cute hover:-translate-y-1 transition-all"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#2563eb]" />
                      </div>
                      <h3 className="font-bold text-[#1e293b] mb-2">{c.title}</h3>
                      <p className="text-sm text-[#1e293b]/60">{c.desc}</p>
                    </div>
                  );
                })}
              </div>
            </DocSection>

            <DocSection id="auth" icon={Terminal} title="Authentication">
              <p>
                SalesDriver uses <strong className="text-[#1e293b]">Universal API Keys</strong> to authenticate requests.
                Find keys in the{" "}
                <Link to="/universal-api-keys" className="text-[#2563eb] font-semibold hover:underline">
                  API Keys page
                </Link>
                . All requests must use HTTPS.
              </p>
              <div className="rounded-3xl border-2 border-[#1e293b]/10 bg-[#f8fafc] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/50 mb-3">Header format</p>
                <CodeBlock code="Authorization: Bearer YOUR_UNIVERSAL_API_KEY" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/50 mt-6 mb-3">Example (cURL)</p>
                <CodeBlock
                  code={`curl -X GET https://api.salesdriver.io/v1/auth/me \\
  -H "Authorization: Bearer sd_live_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json"`}
                />
              </div>
            </DocSection>

            <DocSection id="sd-flow" icon={Zap} title="SD Flow API">
              <p>
                <strong className="text-[#1e293b]">SD Flow</strong> (workflow automation) automates outreach: draft responses,
                schedule follow-ups, and route leads by AI-scored intent.
              </p>
              <EndpointCard
                method="POST"
                path="/v1/sdflow/draft"
                title="Generate smart draft"
                description="Context-aware email from lead biography and conversation history."
                code={`const response = await fetch('https://api.salesdriver.io/v1/sdflow/draft', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ' + API_KEY },
  body: JSON.stringify({
    lead_id: "ld_12345",
    tone: "professional",
    objective: "book_meeting"
  })
});`}
              />
            </DocSection>

            <DocSection id="leads-driver" icon={MousePointerClick} title="LeadsDriver API">
              <p>
                <strong className="text-[#1e293b]">LeadsDriver</strong> is the lead discovery engine — search millions of
                profiles and trigger multichannel sequences programmatically.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#0B2233] text-white p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00A7E2] mb-4">Highlights</p>
                  <ul className="space-y-2">
                    {[
                      "Search 200M+ business profiles",
                      "Multichannel sequencing",
                      "Intent & engagement signals",
                      "Native CRM sync",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <ChevronRight size={14} className="text-[#00A7E2] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border-2 border-[#1e293b]/10 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1e293b]/50 mb-3">Sample query</p>
                  <CodeBlock
                    code={`curl -G https://api.salesdriver.io/v1/leads/search \\
  -d "industry=fintech" \\
  -d "seniority=director+" \\
  -d "limit=50"`}
                  />
                </div>
              </div>
            </DocSection>

            <DocSection id="core-tools" icon={Layers} title="Core API tools">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Database, name: "MTN Data", desc: "Firmographics and contact intelligence.", path: "/v1/mtn-data/company/:domain" },
                  { icon: Search, name: "ExactMails", desc: "Verified B2B email discovery.", path: "/v1/exact-mails/find" },
                  { icon: Sparkles, name: "LeadsDriver", desc: "Profile enrichment for people and companies.", path: "/v1/leadsdriver/bulk" },
                  { icon: Phone, name: "SD Callix", desc: "Voice intelligence and transcription.", path: "/v1/callix/recordings" },
                ].map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.name} className="rounded-3xl border-2 border-[#1e293b]/10 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#2563eb]" />
                        <h3 className="font-bold text-[#1e293b]">{t.name}</h3>
                      </div>
                      <p className="text-sm text-[#1e293b]/60 mb-3">{t.desc}</p>
                      <CodeBlock code={t.path} />
                    </div>
                  );
                })}
              </div>
            </DocSection>

            <DocSection id="webhooks" icon={Webhook} title="Webhooks">
              <p>
                Subscribe to platform events and trigger actions in your app. Webhooks are secured with{" "}
                <strong className="text-[#1e293b]">HMAC-SHA256</strong> signatures.
              </p>
              <div className="rounded-3xl border-2 border-[#1e293b]/10 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#f1f5f9] border-b border-[#e2e8f0]">
                    <tr>
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#1e293b]/50">Event</th>
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#1e293b]/50">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    {[
                      { event: "lead.created", desc: "New lead discovered via LeadsDriver." },
                      { event: "sequence.reply", desc: "Lead replied to an outreach sequence." },
                      { event: "call.completed", desc: "SD Callix session finalized." },
                      { event: "payment.succeeded", desc: "Credit purchase confirmed." },
                    ].map((row) => (
                      <tr key={row.event} className="hover:bg-[#f8fafc]">
                        <td className="px-5 py-3 font-mono text-[#2563eb] font-semibold">{row.event}</td>
                        <td className="px-5 py-3 text-[#1e293b]/60">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            <DocSection id="errors" icon={AlertCircle} title="Error handling">
              <p>SalesDriver uses standard HTTP codes to indicate success or failure.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { code: "200 OK", desc: "Request succeeded.", color: "text-[#16a34a]" },
                  { code: "400 Bad Request", desc: "Missing or invalid parameters.", color: "text-[#d97706]" },
                  { code: "401 Unauthorized", desc: "No valid API key.", color: "text-[#dc2626]" },
                  { code: "402 Request Failed", desc: "Valid params but failed (e.g. out of credits).", color: "text-[#dc2626]" },
                  { code: "429 Too Many Requests", desc: "Rate limit exceeded.", color: "text-[#6366f1]" },
                  { code: "500 Server Error", desc: "Unexpected platform error.", color: "text-[#64748b]" },
                ].map((e) => (
                  <div key={e.code} className="rounded-2xl border-2 border-[#1e293b]/10 p-4 bg-white">
                    <span className={`text-xs font-bold uppercase tracking-wider ${e.color}`}>{e.code}</span>
                    <p className="text-sm text-[#1e293b]/60 mt-1">{e.desc}</p>
                  </div>
                ))}
              </div>
            </DocSection>
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#f1f5f9]/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FlowSectionHeader
            eyebrow="Next step"
            title="Ready to connect"
            titleAccent="your stack?"
            subtitle="Generate a universal key and make your first API call in minutes."
          />
          <button
            type="button"
            onClick={() => navigate("/universal-api-keys")}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold shadow-cute transition-all"
          >
            Get API keys <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <FlowCta
        title="Need help integrating?"
        description="Talk to our team about webhooks, custom workflows, or enterprise API access."
        primaryLabel="Book a Strategy Call"
        onPrimary={() => navigate("/book")}
        secondaryLabel="View platform"
        onSecondary={() => navigate("/platform")}
      />
    </div>
  );
}
