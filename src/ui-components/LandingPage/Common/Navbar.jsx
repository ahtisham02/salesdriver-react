import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../services/authService";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Database, 
  MousePointerClick, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Bot, 
  AtSign, 
  Video,
  Zap,
  User,
} from "lucide-react";
import img from "../../../assets/Website_Media/Website_Media/salesdriver_logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isAuthenticated());
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  // Scroll handler for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Hash Scrolling
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
      content: [
        { icon: AtSign, name: "ExactMails", desc: "Verified email discovery for clean outreach lists.", path: "/tools/exact-mails" },
        { icon: Database, name: "MTN Data", desc: "Company and contact intelligence for precise targeting.", path: "/tools/mtn-data" },
        { icon: MousePointerClick, name: "Trafera.io", desc: "Website visitor identification and behavior tracking.", path: "/tools/trafera" },
        { icon: ShieldCheck, name: "MTN Verify", desc: "Data and email validation to protect deliverability.", path: "/tools/mtn-verify" },
        { icon: Sparkles, name: "Enrichly", desc: "Deep enrichment that fills in missing contact/company fields.", path: "/tools/enrichy" },
        { icon: Video, name: "HyperPitch", desc: "Fast personalized video messages for warm engagement.", path: "/tools/hyperpitch" },
        { icon: Phone, name: "SD Callix", desc: "Call recordings, transcripts, and organized follow-up notes.", path: "/tools/callix" },
        { icon: Bot, name: "AI SDR (light)", desc: "Optional support for replies, rewrites, and quick assistance.", path: "/tools/aisdr-light" },
      ],
      footerLink: { text: "View the full Platform Suite. All Tools Overview", path: "/platform" }
    },
    {
        label: "Services",
        path: "/services",
        type: "simple-mega",
        content: [
            { title: "Managed Execution", desc: "We run your campaigns for you.", path: "/services" },
            { title: "Strategy Consulting", desc: "Expert guidance on your sales process.", path: "/services" },
            { title: "Data Migration", desc: "Move your data to SalesDriver seamlessly.", path: "/services" },
            { title: "Onboarding & Support", desc: "Get up to speed quickly with our team.", path: "/services" },
        ]
    },
    {
      label: "Pricing",
      path: "/pricing",
      type: "simple-mega",
      content: [
        { title: "Plans Overview", desc: "Compare Starter, Growth, and Enterprise.", path: "/pricing" },
        { title: "Bonus Tools", desc: "Extra software included in your plan.", path: "/pricing" },
        { title: "Start Free", desc: "Get your first month free.", path: "/pricing" },
        { title: "Credit System", desc: "How credits work across all tools.", path: "/pricing" },
        { title: "Compare Plans", desc: "Side-by-side feature comparison.", path: "/pricing" },
      ]
    },
    {
        label: "Company",
        path: "/company",
        type: "simple-mega",
        content: [
            { title: "About Us", desc: "Our mission and team.", path: "/about-us" },
            { title: "Contact", desc: "Get in touch with us.", path: "/contact" },
            { title: "Case Studies", desc: "See how others succeeded.", path: "/casestudy" },
            { title: "Blog", desc: "Latest insights and news.", path: "/blog" },
        ]
    },
    // Hash Links moved to a "Resources" dropdown to declutter, or kept if user insists. 
    // The user said "our all these new 4 apges... should be dropdown". 
    // They didn't explicitly delete the hash links, but fitting all might be tight. 
    // I will include them as simple links for now but maybe later enable them. 
    // For clean UI matching the request "Platform, Services, Pricing, Company", I will stick to these 4 as the main ones.
    // If the user needs the hash links, they can be under "Platform" or "Services" or separate. 
    // I'll add "Resources" for them? No, user said "home page... links like Network, Academy".
    // I will keep them but maybe condense or just appended. 
    {
        label: "Network",
        path: "/",
        hash: "community", 
        type: "link" 
    },
    {
        label: "Academy",
        path: "/",
        hash: "academy", 
        type: "link"
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-plus-jakarta ${
        isScrolled || mobileMenuOpen ? "bg-white shadow-sm py-4" : "bg-white/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer z-50" onClick={() => navigate("/")}>
          <img src={img} alt="SalesDriver" className="h-8 md:h-10 w-auto" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
              <button 
                onClick={() => handleNavigation(item.path, item.hash)}
                className="flex items-center gap-1.5 text-[#003049] font-semibold text-[15px] hover:text-[#00A1E0] transition-colors py-2"
              >
                {item.label}
                {(item.type === 'mega' || item.type === 'simple-mega') && (
                    <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* DROPDOWNS */}
              {activeDropdown === item.label && item.type === 'mega' && (
                <div className="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="max-w-[1440px] mx-auto p-8 relative">
                        {/* Decorative Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00A1E0] to-transparent opacity-50"></div>
                        
                        <div className="grid grid-cols-4 gap-8">
                            {item.content.map((tool, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => handleNavigation(tool.path)}
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 cursor-pointer transition-colors group/item"
                                >
                                    <div className="mt-1 text-[#00A1E0] group-hover/item:scale-110 transition-transform">
                                        <tool.icon size={24} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#005a8c] text-[15px] mb-1 group-hover/item:text-[#00A1E0]">{tool.name}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{tool.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {item.footerLink && (
                            <div className="mt-8 pt-6 border-t border-gray-100 text-center bg-[#f8fafc] -mx-8 -mb-8 pb-6">
                                <span 
                                    className="text-[#005a8c] font-semibold text-sm hover:underline cursor-pointer"
                                    onClick={() => handleNavigation(item.footerLink.path)}
                                >
                                    {item.footerLink.text}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
              )}

              {activeDropdown === item.label && item.type === 'simple-mega' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white shadow-xl border-t border-gray-100 rounded-b-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                     <div className="p-6 grid grid-cols-2 gap-6 relative">
                        {/* Decorative Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00A1E0] to-transparent opacity-50"></div>

                        {item.content.map((option, i) => (
                             <div 
                                key={i}
                                onClick={() => handleNavigation(option.path)}
                                className="group/opt cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
                             >
                                 <h4 className="font-bold text-[#005a8c] text-sm mb-1 group-hover/opt:text-[#00A1E0] transition-colors">{option.title}</h4>
                                 <p className="text-gray-500 text-xs">{option.desc}</p>
                             </div>
                        ))}
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
              <button 
                onClick={() => navigate('/signin')}
                className="px-6 py-2.5 rounded-full border border-[#005a8c]/20 text-[#005a8c] font-bold text-sm tracking-wide hover:border-[#00A1E0] hover:text-[#00A1E0] transition-all"
              >
                LOGIN
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="px-6 py-2.5 rounded-full bg-[#00A1E0] text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-200 hover:bg-[#0089bd] hover:shadow-blue-300 hover:scale-[1.02] transition-all"
              >
                START FREE
              </button>
            </>
          ) : (
            <div className="relative group">
              <button 
                onClick={() => navigate('/profile')}
                className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-gray-50 border border-gray-100 hover:border-[#00A1E0] transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#00A1E0] overflow-hidden">
                   <User size={18} />
                </div>
                <div className="text-left hidden xl:block">
                  <p className="text-[13px] font-bold text-[#003049] leading-tight">My Account</p>
                  <p className="text-[10px] text-gray-500 leading-tight">Manage Profile</p>
                </div>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-[#00A1E0] transition-colors" />
              </button>
              
              {/* Profile Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right group-hover:translate-y-0 translate-y-2">
                <div className="p-4 border-b border-gray-50">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account</p>
                  <div 
                    onClick={() => navigate('/profile')}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    <User size={18} className="text-[#00A1E0]" />
                    <span className="text-sm font-bold text-[#003049]">My Profile</span>
                  </div>
                </div>
                <div className="p-2">
                  <div 
                    onClick={() => {
                        authService.logout();
                        setIsLoggedIn(false);
                        navigate('/signin');
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
                  >
                    <Zap size={18} />
                    <span className="text-sm font-bold">Sign Out</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
            className="lg:hidden text-[#005a8c]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 lg:hidden max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-50 pb-4 last:border-0">
                        <div 
                            className="flex items-center justify-between font-bold text-[#005a8c] text-lg mb-2"
                            onClick={() => {
                                if(item.type === 'link') handleNavigation(item.path, item.hash);
                            }}
                        >
                            {item.label}
                            {(item.type === 'mega' || item.type === 'simple-mega') && <ChevronDown size={16} />}
                        </div>
                        
                        {/* Mobile Submenu for Mega items */}
                        {item.type === 'mega' && (
                            <div className="grid grid-cols-1 gap-3 pl-4">
                                {item.content.map((tool, i) => (
                                    <div key={i} onClick={() => handleNavigation(tool.path)} className="text-gray-600 text-sm py-1">
                                        {tool.name}
                                    </div>
                                ))}
                            </div>
                        )}
                        {item.type === 'simple-mega' && (
                             <div className="grid grid-cols-1 gap-3 pl-4">
                                {item.content.map((opt, i) => (
                                    <div key={i} onClick={() => handleNavigation(opt.path)} className="text-gray-600 text-sm py-1">
                                        {opt.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                
                <div className="flex flex-col gap-3 mt-4">
                    {!isLoggedIn ? (
                        <>
                            <button 
                                onClick={() => { navigate('/signin'); setMobileMenuOpen(false); }}
                                className="w-full py-3 rounded-full border border-[#005a8c]/20 text-[#005a8c] font-bold"
                            >
                                LOGIN
                            </button>
                            <button 
                                onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }}
                                className="w-full py-3 rounded-full bg-[#00A1E0] text-white font-bold shadow-lg"
                            >
                                START FREE
                            </button>
                        </>
                    ) : (
                        <>
                            <button 
                                onClick={() => { navigate('/profile'); setMobileMenuOpen(false); }}
                                className="w-full py-3 flex items-center justify-center gap-3 rounded-full bg-gray-50 border border-gray-100 text-[#003049] font-bold"
                            >
                                <User size={20} className="text-[#00A1E0]" />
                                MY PROFILE
                            </button>
                            <button 
                                onClick={() => {
                                    authService.logout();
                                    setIsLoggedIn(false);
                                    setMobileMenuOpen(false);
                                    navigate('/signin');
                                }}
                                className="w-full py-3 rounded-full bg-red-50 text-red-500 font-bold"
                            >
                                SIGN OUT
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
