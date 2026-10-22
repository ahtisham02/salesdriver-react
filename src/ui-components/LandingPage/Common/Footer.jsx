import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Database,
  Users,
  Mail,
  Eye,
  Send,
  Workflow,
  Tag,
  Server,
  Lock,
  KeyRound,
  FlaskConical,
  Layers,
  Phone,
  Plug,
  MessageSquare,
} from "lucide-react";
import fb from "../../../assets/Website_Media/Website_Media/icons/facebook.svg";
import yt from "../../../assets/Website_Media/Website_Media/icons/youtube.svg";
import insta from "../../../assets/Website_Media/Website_Media/icons/instagram.svg";
import linkedin from "../../../assets/Website_Media/Website_Media/icons/linkedin.svg";
import xIcon from "../../../assets/Website_Media/Website_Media/icons/x.svg";
import img from "../../../assets/Website_Media/Website_Media/white_salesdriver_logo.svg";
import { CANONICAL_ADDRESS, CANONICAL_PHONE, CANONICAL_EMAIL } from "../../../data/siteConstants";
import { BOOKING_PATH } from "../../../config/booking";
import SLFooter from "../Home/Slider";
import "../../../styles/footerRevamp.css";

const TYPEWRITER_PHRASES = [
  "Find the CEOs of the top 100 US companies and write each a personal message",
  "Verify my list of 2,000 emails and remove the risky ones",
  "Which companies visited my website this week?",
];

const QUICK_PROMPTS = [
  { label: "Find 100 CEOs", phrase: TYPEWRITER_PHRASES[0] },
  { label: "Clean my list", phrase: TYPEWRITER_PHRASES[1] },
  { label: "Who visited my site?", phrase: TYPEWRITER_PHRASES[2] },
];

const LINK_COLS = [
  {
    title: "PRODUCTS",
    links: [
      { n: "MTN Verify", to: "/tools/mtn-verify" },
      { n: "MTN Data", to: "/tools/mtn-data" },
      { n: "LeadsDriver", to: "/tools/leads-driver" },
      { n: "ExactMails", to: "/tools/exact-mails" },
      { n: "Trafera", to: "/tools/trafera" },
      { n: "HyperPitch", to: "/tools/hyperpitch" },
    ],
  },
  {
    title: "SD TOOLS",
    links: [
      { n: "SD Cora", to: "/tools/sd-cora", isNew: true },
      { n: "SD Flow", to: "/tools/sdflow" },
      { n: "SD Integration", to: "/integration-flow" },
      { n: "SD Sender", to: "/tools/sd-sender" },
      { n: "SD Labs", to: "/tools/sd-labs" },
      { n: "SD Deals", to: "/tools/sd-deals" },
      { n: "SD Hosting", to: "/tools/sd-hosting" },
      { n: "SD CRM", to: "/tools/sd-crm" },
      { n: "SD Callix", to: "/tools/callix" },
      { n: "SD Support", to: "/support" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { n: "Contact", to: "/contact" },
      { n: "Book a Demo", to: BOOKING_PATH },
      { n: "Blog", to: "/blog" },
      { n: "How It Works", to: "/how-it-works" },
      { n: "Case Studies", to: "/case-studies" },
      { n: "Documentation", to: "/documentation" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { n: "DataSheets", to: "/data-sheets" },
      { n: "Whitepapers", to: "/white-papers" },
      { n: "Downloadables", to: "/downloadables" },
      { n: "Dictionary", to: "/dictionary" },
      { n: "Webinars", to: "/webinar" },
      { n: "System status", to: "/status" },
    ],
  },
];

const EXTRAS = [
  {
    t: "JoinSecret",
    d: "580+ SaaS tools at 50-90% off",
    to: "/sd-deals",
    icon: Tag,
    isNew: false,
    orange: true,
  },
  {
    t: "Prompt Vault",
    d: "700+ expert AI prompts",
    to: "/prompt-vault",
    icon: Lock,
    isNew: true,
    orange: false,
  },
  {
    t: "Universal API Keys",
    d: "One key for every SalesDriver tool",
    to: "/universal-api-keys",
    icon: KeyRound,
    isNew: false,
    orange: false,
  },
];

const TOOLS_MARQUEE = [
  { n: "MTN Verify", icon: ShieldCheck, to: "/tools/mtn-verify" },
  { n: "MTN Data", icon: Database, to: "/tools/mtn-data" },
  { n: "LeadsDriver", icon: Users, to: "/tools/leads-driver" },
  { n: "ExactMails", icon: Mail, to: "/tools/exact-mails" },
  { n: "Trafera", icon: Eye, to: "/tools/trafera" },
  { n: "HyperPitch", icon: Send, to: "/tools/hyperpitch" },
  { n: "SD Cora", icon: Sparkles, to: "/tools/sd-cora" },
  { n: "SD Flow", icon: Workflow, to: "/tools/sdflow" },
  { n: "SD Integration", icon: Plug, to: "/integration-flow" },
  { n: "SD Sender", icon: Mail, to: "/tools/sd-sender" },
  { n: "SD Labs", icon: FlaskConical, to: "/tools/sd-labs" },
  { n: "SD Deals", icon: Tag, to: "/tools/sd-deals" },
  { n: "SD Hosting", icon: Server, to: "/tools/sd-hosting" },
  { n: "SD CRM", icon: Layers, to: "/tools/sd-crm" },
  { n: "SD Callix", icon: Phone, to: "/tools/callix" },
  { n: "SD Support", icon: MessageSquare, to: "/support" },
];

const NewBadge = () => (
  <span
    style={{
      fontSize: 10,
      fontWeight: 700,
      color: "#F97316",
      background: "#F973161F",
      borderRadius: 999,
      padding: "1px 7px",
    }}
  >
    NEW
  </span>
);

export default function Footer({ hideCtaCard = false }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Typewriter state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");

  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Blinking cursor interval
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter typing & deleting effect
  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 55);
      } else {
        // Pause at full word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, 25);
      } else {
        // Advance to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const query = inputValue.trim() || displayedText || TYPEWRITER_PHRASES[0];
    navigate(`/signup?prompt=${encodeURIComponent(query)}`);
  };

  const handleSelectPrompt = (promptText) => {
    setInputValue(promptText);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubscribe = (e) => {
    if (e) e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <>
      {/* ============ Social-proof marquee — same on every page ============ */}
      <div style={{ background: "#FFFFFF" }}>
        <SLFooter />
      </div>

    <footer className="sd-footer">
      {/* Background dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#ffffff0d 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          pointerEvents: "none",
        }}
      />

      {/* ============ CTA band ============ */}
      {!hideCtaCard && (
        <div className="ft-band" style={{ paddingTop: 72 }}>
          <div
            className="ft-cta"
            style={{
              position: "relative",
              border: "1px solid #16293A",
              borderRadius: 24,
              background: "#071A26",
              padding: "clamp(24px, 3.5vw, 40px) clamp(22px, 3.5vw, 44px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 32,
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: -80,
                top: -120,
                width: 380,
                height: 380,
                borderRadius: "50%",
                background: "#F97316",
                opacity: 0.12,
                filter: "blur(70px)",
                pointerEvents: "none",
              }}
            />
            <div style={{ flex: "1 1 460px", minWidth: 0, display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
              <span className="ft-eyebrow">START TODAY</span>
              <h2
                className="ft-cta-title"
                style={{
                  margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 40,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                Your 5 free credits are waiting.{" "}
                <span style={{ color: "#F97316" }}>Ask CORA anything.</span>
              </h2>
              <p style={{ margin: 0, color: "#94A3B8", maxWidth: 560 }}>
                Find leads, verify emails and send personal outreach from one prompt. No credit card, no setup.
              </p>
            </div>
            <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#04111A",
                  border: "1px solid #1E3346",
                  borderRadius: 14,
                  padding: "8px 8px 8px 14px",
                }}
              >
                <Sparkles width={18} height={18} fill="#F97316" stroke="none" aria-hidden="true" />
                <div className="relative flex-1 min-w-0">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    aria-label="Ask CORA anything"
                    className="w-full bg-transparent text-white text-[15px] outline-none font-medium"
                  />
                  {inputValue === "" && (
                    <div
                      onClick={() => inputRef.current?.focus()}
                      className="absolute inset-0 flex items-center pointer-events-none text-[15px] text-[#CBD5E1] font-medium truncate"
                    >
                      <span>{displayedText}</span>
                      <span
                        className="font-bold ml-0.5"
                        style={{ color: "#F97316", opacity: cursorVisible ? 1 : 0 }}
                      >
                        |
                      </span>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  style={{
                    background: "#F97316",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    padding: "11px 18px",
                    borderRadius: 10,
                    whiteSpace: "nowrap",
                    border: 0,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 15,
                  }}
                >
                  Try free
                </button>
              </form>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {QUICK_PROMPTS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => handleSelectPrompt(p.phrase)}
                    style={{
                      background: "transparent",
                      border: "1px solid #1E3346",
                      color: "#CBD5E1",
                      borderRadius: 999,
                      padding: "6px 12px",
                      fontFamily: "inherit",
                      fontSize: 13,
                      cursor: "pointer",
                      minHeight: 34,
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ Main grid: brand + 3 link columns ============ */}
      <div className="ft-band ft-main" style={{ paddingTop: 64 }}>
        <div className="ft-brand" style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 22, maxWidth: 440 }}>
          <div>
            <Link to="/" aria-label="Go to homepage" style={{ display: "inline-block" }}>
              <img src={img} alt="salesdriver.io" style={{ height: 44, width: "auto" }} />
            </Link>
            <p style={{ margin: "14px 0 0", color: "#94A3B8" }}>
              One B2B growth platform. Data, outreach, AI agents and CRM under one login and one bill.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="ft-eyebrow">ADDRESS</span>
              <span>
                {CANONICAL_ADDRESS.line1 || "2117 N Lake Ave,"}
                <br />
                {CANONICAL_ADDRESS.line2 || "Altadena, CA 91001"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="ft-eyebrow">CONTACT</span>
              <a href={`tel:${CANONICAL_PHONE.replace(/\s+/g, "")}`} style={{ textDecoration: "underline" }}>
                {CANONICAL_PHONE}
              </a>
              <a href={`mailto:${CANONICAL_EMAIL}`} style={{ textDecoration: "underline" }}>
                {CANONICAL_EMAIL}
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
            {[
              { name: "LinkedIn", icon: linkedin, link: "https://www.linkedin.com/company/salesdriver-io" },
              { name: "Facebook", icon: fb, link: "https://www.facebook.com/salesdriver/" },
              { name: "Instagram", icon: insta, link: "https://www.instagram.com/salesdriver.io/?hl=en" },
              { name: "YouTube", icon: yt, link: "https://www.youtube.com/@salesdriver" },
              { name: "X", icon: xIcon, link: "https://x.com/salesdriver" },
            ].map((social) => (
              <a
                key={social.name}
                className="ft-soc"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit SalesDriver on ${social.name}`}
              >
                <img src={social.icon} alt={social.name} style={{ width: 17, height: 17, objectFit: "contain" }} />
              </a>
            ))}
            <Link
              to="/status"
              style={{
                marginLeft: 6,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid #1E3346",
                borderRadius: 999,
                padding: "6px 12px",
                fontSize: 13,
                color: "#CBD5E1",
                textDecoration: "none",
              }}
            >
              <span
                className="ft-live-dot"
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 0 4px #22C55E26" }}
              />
              All systems operational
            </Link>
          </div>
        </div>

        {LINK_COLS.map((col) => (
          <nav key={col.title} aria-label={col.title} style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
            <span className="ft-eyebrow" style={{ marginBottom: 4 }}>{col.title}</span>
            {col.links.map((l) =>
              l.to ? (
                <Link key={l.n} to={l.to} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  {l.n}
                  {l.isNew && <NewBadge />}
                </Link>
              ) : (
                <a key={l.n} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  {l.n}
                  {l.isNew && <NewBadge />}
                </a>
              )
            )}
          </nav>
        ))}
      </div>

      {/* ============ Integrations & extras ============ */}
      <div className="ft-band" style={{ paddingTop: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
          <span className="ft-eyebrow" style={{ whiteSpace: "nowrap" }}>INTEGRATIONS &amp; EXTRAS</span>
          <span style={{ flex: 1, height: 1, background: "#16293A" }} />
        </div>
        <div className="ft-int">
          {EXTRAS.map((x) => {
            const Icon = x.icon;
            return (
              <Link
                key={x.t}
                to={x.to}
                className="ft-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderRadius: 14,
                  padding: "16px 18px",
                  minHeight: 76,
                  border: `1px solid ${x.orange ? "#5A2A0E" : "#16293A"}`,
                  background: x.orange ? "#1A120C" : "#071A26",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    width: 42,
                    height: 42,
                    flex: "none",
                    borderRadius: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: x.orange ? "#F973161F" : "#2F6FED1F",
                  }}
                >
                  <Icon width={20} height={20} stroke={x.orange ? "#F97316" : "#2F6FED"} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" />
                </span>
                <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: x.orange ? "#F97316" : "#FFFFFF",
                    }}
                  >
                    {x.t}
                    {x.isNew && <NewBadge />}
                  </span>
                  <span style={{ fontSize: 13, color: "#94A3B8" }}>{x.d}</span>
                </span>
                <span className="ft-arr" aria-hidden="true" style={{ color: "#94A3B8", fontSize: 18, transition: "all .2s" }}>→</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ============ Newsletter ============ */}
      <div className="ft-band" style={{ paddingTop: 40 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid #16293A",
            borderBottom: "1px solid #16293A",
            padding: "26px 0",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: "#FFFFFF" }}>
              The weekly growth playbook
            </div>
            <div style={{ color: "#94A3B8", fontSize: 14 }}>
              One email a week: outbound tactics, new tools and the best member deals.
            </div>
          </div>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} style={{ flex: "1 1 420px", display: "flex", gap: 8 }}>
              <label style={{ flex: 1, display: "flex", position: "relative" }}>
                <span style={{ position: "absolute", left: -9999 }}>Work email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: "#071A26",
                    border: "1px solid #1E3346",
                    borderRadius: 10,
                    color: "#FFFFFF",
                    fontFamily: "inherit",
                    fontSize: 15,
                    padding: "12px 14px",
                    minHeight: 48,
                  }}
                />
              </label>
              <button
                type="submit"
                style={{
                  background: "#F97316",
                  color: "#FFFFFF",
                  border: 0,
                  borderRadius: 10,
                  padding: "0 20px",
                  fontFamily: "inherit",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  minHeight: 48,
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div style={{ flex: "1 1 420px", display: "flex", alignItems: "center", gap: 10, color: "#22C55E", fontWeight: 600 }}>
              ✓ You're in. First playbook lands this week.
            </div>
          )}
        </div>
      </div>

      {/* ============ Tools marquee ============ */}
      <div className="ft-band" style={{ paddingTop: 26, display: "flex", alignItems: "center", gap: 24 }}>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.14em",
            color: "#94A3B8",
            whiteSpace: "nowrap",
          }}
        >
          SALESDRIVER TOOLS
        </span>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            overflow: "hidden",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="ft-marquee">
            {[...TOOLS_MARQUEE, ...TOOLS_MARQUEE].map((t, idx) => {
              const Icon = t.icon;
              return (
                <Link
                  key={`${t.n}-${idx}`}
                  to={t.to}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    border: "1px solid #16293A",
                    background: "#071A26",
                    borderRadius: 999,
                    padding: "7px 14px",
                    whiteSpace: "nowrap",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#E5ECF3",
                    textDecoration: "none",
                  }}
                >
                  <Icon width={15} height={15} stroke="#F97316" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" />
                  {t.n}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============ Bottom bar ============ */}
      <div className="ft-band" style={{ paddingTop: 26, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
        <div style={{ color: "#94A3B8", fontSize: 15 }}>
          Built on Cora, SalesDriver's AI engine.
          <br />
          &copy; {new Date().getFullYear()} SalesDriver. All rights reserved.
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", fontSize: 14, color: "#94A3B8", alignItems: "center" }}>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.14em" }}>
            PARTNER DEALS
          </span>
          <Link to="/sd-deals" style={{ color: "#F97316" }}>
            JoinSecret: 580+ SaaS tools at member pricing
          </Link>
          <Link to="/sd-deals">SD Deals</Link>
        </div>
        <div className="ft-mut" style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <Link to="/privacy-policy" style={{ textDecoration: "underline" }}>Privacy policy</Link>
          <Link to="/terms-of-service" style={{ textDecoration: "underline" }}>Terms of service</Link>
        </div>
      </div>

      {/* ============ Video band at very bottom (moved from top) ============ */}
      <div
        style={{
          maxWidth: 1380,
          width: "100%",
          margin: "40px auto 48px",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#0B0F19",
            overflow: "hidden",
            borderRadius: 24,
          }}
        >
          <video
            src="/videos/footer-band.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ display: "block", width: "100%", maxHeight: 440, objectFit: "cover" }}
          />
        </div>
      </div>
    </footer>
    </>
  );
}
