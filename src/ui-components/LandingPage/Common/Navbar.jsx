import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { authService } from "../../../services/authService";
import { userService } from "../../../services/userService";
import UserAvatar from "../../Common/UserAvatar";
import { broadcastLogout } from "../../../utils/broadcastLogout";
import { BOOKING_PATH } from "../../../config/booking";
import {
  ChevronDown,
  Menu,
  X,
  Database,
  ShieldCheck,
  Sparkles,
  Phone,
  Code,
  AtSign,
  Video,
  Zap,
  User,
  Tag,
  BookOpen,
  Users,
  Mail,
  FileText,
  MessageSquare,
  ArrowRight,
  ArrowLeftRight,
  Briefcase,
  CalendarDays,
  Bot,
  Layers,
  Globe,
  Target,
  Check,
} from "lucide-react";
import img from "../../../assets/Website_Media/Website_Media/salesdriver_logo.svg";
import whiteImg from "../../../assets/Website_Media/Website_Media/white_salesdriver_logo.svg";
import fbIcon from "../../../assets/Website_Media/Website_Media/icons/facebook.svg";
import linkedinIcon from "../../../assets/Website_Media/Website_Media/icons/linkedin.svg";
import instaIcon from "../../../assets/Website_Media/Website_Media/icons/instagram.svg";
import youtubeIcon from "../../../assets/Website_Media/Website_Media/icons/youtube.svg";
import "../../../styles/footerRevamp.css";

/** Routes whose first viewport is a dark hero (nav needs light text + white logo). */
const DARK_HERO_ROUTES = new Set([
  "/agencies",
]);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileNavSection, setMobileNavSection] = useState(null);
  const [mobilePlatformGroup, setMobilePlatformGroup] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isAuthenticated());
  const [userData, setUserData] = useState(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isPlatformRoute = location.pathname === "/platform";
  const path = location.pathname.replace(/\/$/, "") || "/";
  const isDarkHeroRoute = DARK_HERO_ROUTES.has(path);
  const menuOpen = Boolean(activeDropdown) || mobileMenuOpen;
  const useLightNav = !isScrolled && !menuOpen && isDarkHeroRoute;
  const logoSrc = useLightNav ? whiteImg : img;

  // Scroll handler for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      setUserData(null);
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
    userService.getCurrentUser().then(setUserData).catch(() => {});
  }, [location.pathname]);

  // Handle Hash Scrolling
  const handleSignOut = () => {
    authService.logout();
    broadcastLogout();
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    navigate("/signin");
  };

  const handleNavigation = (path, hash) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (path) {
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const navItems = [
    {
      label: "Platform",
      path: "/platform",
      type: "mega",
      groups: [
        {
          category: "Data",
          tools: [
            { icon: Database, name: "MTN Data", brand: "Company & contact data", desc: "Full company and contact data for precise targeting.", path: "/tools/mtn-data" },
            { icon: ShieldCheck, name: "MTN Verify", brand: "Data validation", desc: "Data and email validation to protect deliverability.", path: "/tools/mtn-verify" },
            { icon: Sparkles, name: "LeadsDriver", brand: "Contact enrichment", desc: "Deep enrichment that fills in missing contact and company fields.", path: "/tools/leads-driver" },
            { icon: AtSign, name: "ExactMails", brand: "Email discovery", desc: "Verified email discovery for clean outreach lists.", path: "/tools/exact-mails" },
          ]
        },
        {
          category: "Outreach",
          tools: [
            { icon: Target, name: "Trafera", brand: "Visitor intent", desc: "Website visitor identification and behavior tracking.", path: "/tools/trafera" },
            { icon: Video, name: "HyperPitch", brand: "Personalized pages", desc: "Auto-personalized landing pages for your full list.", path: "/tools/hyperpitch" },
            { icon: Phone, name: "SD Callix", brand: "Call management", desc: "Call recordings, transcripts, and organized follow-up notes.", path: "/tools/callix" },
            { icon: Mail, name: "SD Sender", brand: "Email & LinkedIn delivery", desc: "Multi-channel campaigns, warm-up and a unified reply inbox.", path: "/tools/sd-sender" },
          ]
        },
        {
          category: "Operations",
          tools: [
            { icon: Bot, name: "SD Cora", brand: "AI sales agent", desc: "Describe a goal and Cora plans and runs the whole outbound motion.", path: "/tools/sd-cora" },
            { icon: Layers, name: "SD CRM", brand: "Pipeline & deals", desc: "Contacts, companies, deals and activity in one pipeline.", path: "/tools/sd-crm" },
            { icon: Zap, name: "SD Labs", brand: "Mini tools", desc: "100+ mini tools included in your $99/mo plan.", path: "/tools/sd-labs" },
            { icon: Code, name: "SD Hosting", brand: "Premium hosting", desc: "Expert WordPress maintenance and high-speed hosting.", path: "/tools/sd-hosting" },
          ]
        },
        {
          category: "Compare",
          tools: [
            { icon: ArrowLeftRight, name: "SalesDriver vs Apollo", brand: "Apollo alternative", desc: "400M+ contacts, verified emails, outreach and CRM in one plan.", path: "/compare/apollo" },
            { icon: ArrowLeftRight, name: "SalesDriver vs RB2B", brand: "RB2B alternative", desc: "Turn website visits into buyers and follow-ups with Trafera.", path: "/compare/rb2b" },
            { icon: ArrowLeftRight, name: "SalesDriver vs HubSpot", brand: "HubSpot alternative", desc: "A full CRM with data, outreach and AI, without the tier maze.", path: "/compare/hubspot" },
            { icon: ArrowLeftRight, name: "SalesDriver vs Zapier", brand: "Zapier alternative for sales", desc: "Sales-native workflows with SD Flow, no Zaps to maintain.", path: "/compare/zapier" },
          ]
        },
      ],
      footerLink: { text: "View the full Platform Suite. All Tools Overview", path: "/platform" }
    },
    {
      label: "Services",
      path: "/services",
      type: "company-mega",
      content: [
        { icon: Users,    title: "Managed Outbound",               desc: "We build and run your outbound program.",          path: "/services/managed-outbound/" },
        { icon: CalendarDays, title: "Appointment Setting",        desc: "Qualified meetings booked for your team.",        path: "/services/appointment-setting/" },
        { icon: Briefcase, title: "Outsourced Business Dev",       desc: "Full BD function, outsourced to SalesDriver.",    path: "/services/outsourced-business-development/" },
        { icon: Target,   title: "Agency Business Development",    desc: "Done-for-you BD for agencies.",                   path: "/services/agency-business-development/" },
        { icon: Globe,    title: "US Market Entry",                desc: "Enter the US market with SalesDriver support.",   path: "/services/us-market-entry/" },
        { icon: ArrowRight, title: "All Services",                 desc: "View the full managed services overview.",        path: "/services" },
      ],
      featured: {
        label: "Managed Outbound",
        headline: "We run outbound. You take meetings.",
        sub: "$999/mo + $250 per booked meeting. Charged only when a meeting books.",
        path: "/services/managed-outbound/",
        cta: "See managed plans",
      },
    },
    {
      label: "Pricing",
      path: "/pricing",
      type: "link",
      // type: "simple-mega",
      // content: [
      //   { title: "Plans Overview", desc: "Compare Starter, Growth, and Enterprise.", path: "/pricing" },
      //   { title: "Bonus Tools", desc: "Extra software included in your plan.", path: "/pricing" },
      //   { title: "Start Free", desc: "Get your first month free.", path: "/pricing" },
      //   { title: "Credit System", desc: "How credits work across all tools.", path: "/pricing" },
      //   { title: "Compare Plans", desc: "Side-by-side feature comparison.", path: "/pricing" },
      // ]
    },
    {
      label: "Company",
      type: "company-mega",
      content: [
        { icon: Users,       title: "About Us",      desc: "Our mission, team, and story.",          path: "/about-us",     badge: null },
        { icon: Mail,        title: "Contact",        desc: "Book a call or send a message.",         path: "/contact",      badge: null },
        { icon: CalendarDays, title: "Book a Demo",   desc: "15-minute walkthrough of the platform.", path: BOOKING_PATH, badge: null },
        { icon: FileText,    title: "Case Studies",   desc: "Real results from real clients.",        path: "/case-studies",    badge: null },
        { icon: MessageSquare, title: "Blog",         desc: "Insights, tactics, and growth ideas.",   path: "/blog",         badge: null },
        { icon: BookOpen,    title: "Prompt Vault",   desc: "700+ expert AI prompts for every team.", path: "/prompt-vault", badge: "New" },
      ],
      featured: {
        type: "video",
        src: "/videos/company-menu-demo.mp4",
        path: "/about-us",
        label: "Company",
      },
    },
    {
      label: "SD Deals",
      path: "/sd-deals",
      type: "link",
      highlight: true,
    }
    // {
    //     label: "Network",
    //     path: "/",
    //     hash: "community", 
    //     type: "link" 
    // },
    // {
    //     label: "Academy",
    //     path: "/",
    //     hash: "academy", 
    //     type: "link"
    // }
  ];

  return (
    <header
      style={{ ...(isPlatformRoute ? { position: 'fixed' }: {}), fontFamily: "'Quicksand', system-ui, sans-serif" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-plus-jakarta ${
        isScrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8f0] py-4"
         : isDarkHeroRoute
            ? "bg-transparent py-5"
           : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer z-50" onClick={() => navigate("/")}>
          <img src={logoSrc} alt="SalesDriver" className="h-8 md:h-10 w-auto" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Social cluster only fits at 1280px+; below that it overlaps the nav links */}
          <div className="hidden xl:flex items-center gap-3 pr-4 border-r border-gray-100 mr-2">
            {[
              { name: "LinkedIn", icon: linkedinIcon, link: "https://www.linkedin.com/company/salesdriver-io" },
              { name: "Facebook", icon: fbIcon, link: "https://www.facebook.com/salesdriver/" },
              { name: "YouTube", icon: youtubeIcon, link: "https://www.youtube.com/@salesdriver" },
              { name: "Instagram", icon: instaIcon, link: "https://www.instagram.com/salesdriver.io/" },
            ].map((social, i) => social.link && (
              <a key={i} title={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110 bg-[#1e293b] rounded-full flex-shrink-0 pt-1.5 pb-[5px] px-1.5">
                <img src={social.icon} alt={social.name} className="w-4 h-4" />
              </a>
            ))}
          </div>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="group static h-full flex items-center"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setActiveDropdown(item.label);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150); // 150ms delay
              }}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 font-bold text-[15px] transition-colors py-1 ${
                    item.highlight
                      ? "bg-[#f97316] text-white px-3 py-1.5 rounded-lg hover:bg-[#ea6c0a] font-black text-[11px] uppercase tracking-wider leading-tight"
                     : useLightNav
                        ? "text-white/90 hover:text-white"
                       : "text-[#1e293b] hover:text-[#2563eb]"
                  }`}
                >
                  {item.highlight && <Tag size={12} />}
                  {item.label}
                  {(item.type === 'mega' || item.type === 'simple-mega' || item.type === 'company-mega') && (
                    <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180': ''}`} />
                  )}
                </Link>
              ): (
              <button
                type="button"
                onClick={() => {
                  if (item.type === "company-mega" || item.type === "mega" || item.type === "simple-mega") {
                    setActiveDropdown(activeDropdown === item.label ? null: item.label);
                  } else {
                    handleNavigation(item.path, item.hash);
                  }
                }}
                className={`flex items-center gap-1 font-bold text-[15px] transition-colors py-1 ${
                  item.highlight
                    ? "bg-[#f97316] text-white px-3 py-1.5 rounded-lg hover:bg-[#ea6c0a] font-black text-[11px] uppercase tracking-wider leading-tight"
                   : useLightNav
                      ? "text-white/90 hover:text-white"
                     : "text-[#1e293b] hover:text-[#2563eb]"
                }`}
              >
                {item.highlight && <Tag size={12} />}
                {item.label}
                {(item.type === 'mega' || item.type === 'simple-mega' || item.type === 'company-mega') && (
                  <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180': ''}`} />
                )}
              </button>
              )}

              {/* DROPDOWNS */}
              {activeDropdown === item.label && item.type === 'mega' && (
                <div className="absolute left-0 top-full w-full z-[60] bg-white shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  <div className="max-w-[1440px] mx-auto px-8 pt-2.5 pb-3 relative">
                    {/* Decorative Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-50"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {item.groups.map((group, gi) => (
                        <div key={gi}>
                          {/* Category Header */}
                          <div className="mb-2.5 pb-1.5 border-b border-gray-100">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb]">{group.category}</span>
                          </div>
                          {/* Tools in category */}
                          <div className="flex flex-col gap-0.5">
                            {group.tools.map((tool, i) => (
                              <Link
                                key={i}
                                to={tool.path}
                                onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                                className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-blue-50/50 cursor-pointer transition-colors group/item"
                              >
                                <div className="mt-0.5 text-[#2563eb] group-hover/item:scale-110 transition-transform flex-shrink-0">
                                  <tool.icon size={18} strokeWidth={2} />
                                </div>
                                <div>
                                  <h4 className="font-bold text-[#1e293b] text-[13px] leading-tight group-hover/item:text-[#2563eb] transition-colors">{tool.name}</h4>
                                  <p className="text-[10px] text-[#2563eb]/70 font-semibold mt-0.5">{tool.brand}</p>
                                  <p className="text-gray-400 text-[11px] leading-snug mt-0.5 line-clamp-2">{tool.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Platform promo banner — marquee pills match client mega-menu */}
                  <div className="px-4 md:px-8 pb-3 pt-1">
                    <div className="max-w-[1340px] mx-auto rounded-2xl bg-[#0B1220] border border-[#1E3346] px-5 md:px-7 py-5 flex flex-col xl:flex-row gap-5 xl:gap-6 items-stretch xl:items-center overflow-hidden relative">
                      <div aria-hidden className="absolute -left-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#f97316]/40 blur-2xl pointer-events-none" />
                      <div className="relative flex items-center gap-4 min-w-0 xl:max-w-[260px] flex-shrink-0">
                        <span className="w-11 h-11 rounded-full bg-[#f97316] shadow-[0_0_24px_#f9731688] flex-shrink-0" />
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#f97316]">The SalesDriver Platform</p>
                          <p className="text-white font-bold text-sm leading-snug mt-0.5">16 tools. One login, one bill.</p>
                        </div>
                      </div>

                      <div className="relative flex-1 min-w-0 flex flex-col gap-2.5 overflow-hidden">
                        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] font-bold text-white/90">
                          <span>400M+ contacts</span>
                          <span>100+ mini tools</span>
                          <span>580+ SaaS deals</span>
                          <span>1 credit pool</span>
                        </div>

                        {/* Moving tool tabs marquee */}
                        <div
                          className="relative overflow-hidden"
                          style={{
                            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
                            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
                          }}
                        >
                          <div className="nav-plat-marquee flex w-max gap-2">
                            {[
                              { t: "ExactMails · Data", c: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
                              { t: "MTN Verify · Data", c: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30" },
                              { t: "MTN Data · Data", c: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30" },
                              { t: "LeadsDriver · Data", c: "bg-teal-500/20 text-teal-300 border-teal-400/30" },
                              { t: "HyperPitch · Outreach", c: "bg-rose-500/20 text-rose-300 border-rose-400/30" },
                              { t: "SD Sender · Outreach", c: "bg-orange-500/20 text-orange-300 border-orange-400/30" },
                              { t: "Trafera · Outreach", c: "bg-pink-500/20 text-pink-300 border-pink-400/30" },
                              { t: "SD Callix · Outreach", c: "bg-amber-500/20 text-amber-300 border-amber-400/30" },
                              { t: "SD Cora · AI", c: "bg-violet-500/20 text-violet-300 border-violet-400/30" },
                              { t: "SD CRM · Ops", c: "bg-sky-500/20 text-sky-300 border-sky-400/30" },
                              { t: "SD Flow · Ops", c: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30" },
                              { t: "SD Labs · Ops", c: "bg-lime-500/20 text-lime-300 border-lime-400/30" },
                            ].concat([
                              { t: "ExactMails · Data", c: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
                              { t: "MTN Verify · Data", c: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30" },
                              { t: "MTN Data · Data", c: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30" },
                              { t: "LeadsDriver · Data", c: "bg-teal-500/20 text-teal-300 border-teal-400/30" },
                              { t: "HyperPitch · Outreach", c: "bg-rose-500/20 text-rose-300 border-rose-400/30" },
                              { t: "SD Sender · Outreach", c: "bg-orange-500/20 text-orange-300 border-orange-400/30" },
                              { t: "Trafera · Outreach", c: "bg-pink-500/20 text-pink-300 border-pink-400/30" },
                              { t: "SD Callix · Outreach", c: "bg-amber-500/20 text-amber-300 border-amber-400/30" },
                              { t: "SD Cora · AI", c: "bg-violet-500/20 text-violet-300 border-violet-400/30" },
                              { t: "SD CRM · Ops", c: "bg-sky-500/20 text-sky-300 border-sky-400/30" },
                              { t: "SD Flow · Ops", c: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30" },
                              { t: "SD Labs · Ops", c: "bg-lime-500/20 text-lime-300 border-lime-400/30" },
                            ]).map((p, i) => (
                              <span key={`${p.t}-${i}`} className={`text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${p.c}`}>{p.t}</span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/70">
                          {["AI agent runs every tool", "Find buyers", "Verify emails", "Personalized video pages"].map((c) => (
                            <span key={c} className="inline-flex items-center gap-1">
                              <Check size={12} className="text-[#4ade80]" strokeWidth={3} /> {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="relative flex flex-col items-start xl:items-end gap-2 flex-shrink-0 z-10">
                        <span className="text-white/70 text-xs font-medium">from <b className="text-white text-base">$99</b>/mo</span>
                        <Link
                          to="/signup"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-bold px-5 py-2.5 shadow-lg"
                        >
                          Start free <ArrowRight size={14} />
                        </Link>
                        <Link
                          to="/platform"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[12px] font-bold text-[#60a5fa] hover:underline"
                        >
                          Explore every tool →
                        </Link>
                      </div>
                    </div>
                  </div>
                  {item.footerLink && (
                    <div className="border-t border-gray-100 text-center bg-[#f8fafc] py-3 flex items-center justify-center gap-2 flex-wrap">
                      <button
                        type="button"
                        className="text-[#1e293b] font-semibold text-sm hover:underline hover:text-[#2563eb] cursor-pointer"
                        onClick={() => handleNavigation(item.footerLink.path)}
                      >
                        {item.footerLink.text}
                      </button>
                      <span className="text-gray-300 font-semibold" aria-hidden="true">·</span>
                      <button
                        type="button"
                        className="text-[#2563eb] font-bold text-sm hover:underline cursor-pointer"
                        onClick={() => handleNavigation("/compare")}
                      >
                        Compare
                      </button>
                    </div>
                  )}
                </div>
              )}


              {activeDropdown === item.label && item.type === 'simple-mega' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] z-[60] bg-white shadow-xl border-t border-gray-100 rounded-b-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-6 grid grid-cols-2 gap-6 relative">
                    {/* Decorative Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-50"></div>

                    {item.content.map((option, i) => (
                      <Link
                        key={i}
                        to={option.path}
                        onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                        className="group/opt cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors block"
                      >
                        <h4 className="font-bold text-[#1e293b] text-sm mb-1 group-hover/opt:text-[#2563eb] transition-colors">{option.title}</h4>
                        <p className="text-gray-500 text-xs">{option.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Beautiful Company dropdown ── */}
              {activeDropdown === item.label && item.type === 'company-mega' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[min(960px,calc(100vw-24px))] z-[60] bg-white shadow-2xl border border-[#e2e8f0] rounded-2xl animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  {/* Top accent line */}
                  <div className="h-[3px] bg-gradient-to-r from-[#2563eb] via-[#f97316] to-[#2563eb]" />

                  <div className="flex flex-col md:flex-row md:items-stretch">
                    {/* Left: nav links */}
                    <div className="w-full md:w-[38%] md:max-w-[360px] flex-shrink-0 p-4 sm:p-5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40 mb-3 px-2">{item.label}</p>
                      <div className="space-y-0.5">
                        {item.content.map((option, i) => {
                          const Icon = option.icon;
                          return (
                            <Link
                              key={i}
                              to={option.path}
                              onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                              className="group/opt flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#eff6ff] cursor-pointer transition-all"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#f1f5f9] flex items-center justify-center flex-shrink-0 group-hover/opt:bg-[#2563eb] transition-colors">
                                <Icon className="w-4 h-4 text-[#2563eb] group-hover/opt:text-white transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-[#1e293b] text-sm group-hover/opt:text-[#2563eb] transition-colors">{option.title}</span>
                                  {option.badge && (
                                    <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#f97316] text-white leading-none">{option.badge}</span>
                                  )}
                                </div>
                                <p className="text-[11px] text-[#1e293b]/50 mt-0.5 truncate">{option.desc}</p>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-[#1e293b]/20 group-hover/opt:text-[#2563eb] group-hover/opt:translate-x-0.5 transition-all flex-shrink-0" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right: landscape video panel (~62%) so demo isn't cropped */}
                    {item.featured && (
                      <Link
                        to={item.featured.path || "/about-us"}
                        onClick={() => { setActiveDropdown(null); setMobileMenuOpen(false); }}
                        className="relative w-full md:flex-1 bg-[#0B1220] overflow-hidden block group/feat min-h-[220px] md:min-h-0"
                        aria-label="Watch company demo"
                      >
                        <video
                          src={item.featured.src || "/videos/company-menu-demo.mp4"}
                          className="absolute inset-0 w-full h-full object-contain object-center bg-[#0B1220]"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          controls={false}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B1220]/85 to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-end justify-between gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#f97316]">
                            {item.featured.label || "Company"}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white group-hover/feat:gap-2 transition-all">
                            Learn more <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              )}

            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/signin"
                className={`px-6 py-2.5 rounded-full border !font-roboto font-bold text-base tracking-wide transition-all ${
                  useLightNav
                    ? "border-white/30 text-white hover:border-white hover:text-white"
                   : "border-[#e2e8f0] text-[#1e293b] hover:border-[#2563eb] hover:text-[#2563eb]"
                }`}
              >
                Login
              </Link>
              <Link
                to={BOOKING_PATH}
                className="px-6 py-2.5 rounded-full bg-[#f97316] text-white font-bold text-base !font-roboto tracking-wide whitespace-nowrap shadow-lg hover:bg-[#ea6c0a] hover:scale-[1.02] transition-all"
              >
                Book a Demo
              </Link>
            </>
          ): (
            <div className="relative group">
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-5 px-2.5 py-1.5 pr-6 rounded-full bg-gray-50 border border-gray-100 hover:border-[#2563eb] transition-all group"
              >
                <UserAvatar user={userData} size="xs" className="ring-2 ring-white" />
                <div className="text-left hidden xl:block">
                  <p className="text-[13px] -mb-2.5 font-bold text-[#1e293b] leading-tight">My Account</p>
                  <p className="text-[10px] text-gray-500 leading-tight">Manage Profile</p>
                </div>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-[#2563eb] transition-colors" />
              </button>

              {/* Profile Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right group-hover:translate-y-0 translate-y-2">
                <div className="p-4 border-b border-gray-50">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account</p>
                  <div
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors mb-2"
                  >
                    <Zap size={18} className="text-[#2563eb]" />
                    <span className="text-sm font-bold text-[#1e293b]">Dashboard</span>
                  </div>
                  <div
                    onClick={() => navigate('/profile')}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    <User size={18} className="text-[#2563eb]" />
                    <span className="text-sm font-bold text-[#1e293b]">My Profile</span>
                  </div>
                </div>
                <div className="p-2">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-gray-600 hover:text-red-500 cursor-pointer transition-colors text-left"
                  >
                    <Zap size={18} />
                    <span className="text-sm font-bold">Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`lg:hidden ${useLightNav ? "text-white" : "text-[#1e293b]"}`}
          onClick={() => {
            setMobileMenuOpen((open) => {
              if (open) {
                setMobileNavSection(null);
                setMobilePlatformGroup(null);
              }
              return !open;
            });
          }}
        >
          {mobileMenuOpen ? <X size={28} />: <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 lg:hidden max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => {
              const isExpandable =
                item.type === "mega" || item.type === "simple-mega" || item.type === "company-mega";
              const sectionOpen = mobileNavSection === item.label;
              return (
              <div key={index} className="border-b border-gray-50 pb-4 last:border-0">
                <button
                  type="button"
                  className="w-full flex items-center justify-between font-bold text-[#1e293b] text-lg mb-2 text-left"
                  onClick={() => {
                    if (item.type === "link") {
                      handleNavigation(item.path, item.hash);
                      return;
                    }
                    if (isExpandable) {
                      setMobileNavSection(sectionOpen ? null : item.label);
                      if (!sectionOpen) setMobilePlatformGroup(null);
                    }
                  }}
                >
                  {item.label}
                  {isExpandable && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${sectionOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Mobile Submenu for Mega items — accordion sections */}
                {item.type === "mega" && sectionOpen && (
                  <div className="flex flex-col gap-1 pl-1">
                    {item.groups.map((group, gi) => {
                      const groupOpen = mobilePlatformGroup === group.category;
                      return (
                        <div key={gi} className="rounded-xl border border-[#e2e8f0] overflow-hidden">
                          <button
                            type="button"
                            className="w-full flex items-center justify-between px-3 py-2.5 bg-[#f8fafc] text-left"
                            onClick={() =>
                              setMobilePlatformGroup(groupOpen ? null : group.category)
                            }
                          >
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb]">
                              {group.category}
                            </span>
                            <ChevronDown
                              size={14}
                              className={`text-[#64748b] transition-transform duration-200 ${
                                groupOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {groupOpen && (
                            <div className="flex flex-col py-1 bg-white">
                              {group.tools.map((tool, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => handleNavigation(tool.path)}
                                  className="text-left text-gray-600 text-sm py-2 px-3 flex items-center gap-2 hover:bg-[#eff6ff]"
                                >
                                  <span className="font-semibold text-[#1e293b]">{tool.name}</span>
                                  <span className="text-[10px] text-[#2563eb]/70 font-semibold">
                                    ({tool.brand})
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                {item.type === "simple-mega" && sectionOpen && (
                  <div className="grid grid-cols-1 gap-1 pl-1">
                    {item.content.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleNavigation(opt.path)}
                        className="text-left text-gray-600 text-sm py-2 px-2 rounded-lg hover:bg-[#eff6ff]"
                      >
                        {opt.title}
                      </button>
                    ))}
                  </div>
                )}
                {item.type === "company-mega" && sectionOpen && (
                  <div className="flex flex-col gap-1 pl-1">
                    {item.content.map((opt, i) => {
                      const Icon = opt.icon;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleNavigation(opt.path)}
                          className="flex items-center gap-3 py-2.5 px-2 rounded-xl hover:bg-[#eff6ff] cursor-pointer transition-colors text-left w-full"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 text-[#2563eb]" />
                          </div>
                          <span className="text-sm font-bold text-[#1e293b]">{opt.title}</span>
                          {opt.badge && (
                            <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#f97316] text-white leading-none">{opt.badge}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              );
            })}

            <div className="flex flex-col gap-3 mt-4">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 rounded-full border border-[#2563eb]/20 text-[#2563eb] font-bold text-center block"
                  >
                    LOGIN
                  </Link>
                  <Link
                    to={BOOKING_PATH}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 rounded-full bg-[#f97316] text-white font-bold shadow-lg text-center block"
                  >
                    Book a Demo
                  </Link>
                </>
              ): (
                <>
                  <button
                    onClick={() => { navigate('/profile'); setMobileMenuOpen(false); }}
                    className="w-full py-3 flex items-center justify-center gap-3 rounded-full bg-gray-50 border border-gray-100 text-[#1e293b] font-bold"
                  >
                    <User size={20} className="text-[#2563eb]" />
                    MY PROFILE
                  </button>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full py-3 rounded-full bg-red-50 text-red-500 font-bold"
                  >
                    SIGN OUT
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-50">
              {[
                { name: "LinkedIn", icon: linkedinIcon, link: "https://www.linkedin.com/company/salesdriver-io" },
                { name: "Facebook", icon: fbIcon, link: "https://www.facebook.com/salesdriver/" },
                { name: "YouTube", icon: youtubeIcon, link: "https://www.youtube.com/@salesdriver" },
                { name: "Instagram", icon: instaIcon, link: "https://www.instagram.com/salesdriver.io/" },
              ].map((social, i) => social.link && (
                <a
                  key={i}
                  title={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 flex-shrink-0"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
