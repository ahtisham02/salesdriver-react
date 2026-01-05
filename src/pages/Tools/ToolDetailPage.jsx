import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toolsData } from '../../data/toolsData';
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Shield, 
  Settings, 
  Compass,
  Play,
  CheckCircle2,
  Layers,
  Activity,
  Cpu,
  Sparkles,
  Lock
} from 'lucide-react';
import bgImg from '../../assets/new_assets/tech_system.png';

const ToolDetailPage = () => {
  const { slug } = useParams();
  const tool = toolsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-5 font-plus-jakarta">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#003049] mb-4">Protocol Offline</h1>
          <p className="text-gray-500 mb-8 font-semibold">The tool you are looking for is currently outside our operational parameters.</p>
          <Link to="/platform" className="px-10 py-4 bg-[#00A1E0] text-white font-black uppercase tracking-widest text-xs rounded-full shadow-xl hover:bg-[#0089bd] transition-all">
            Return to Command Center
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-white overflow-hidden font-plus-jakarta">
      {/* Hero Section - Height & Premium Feel */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 md:pt-28 md:pb-24 px-5 md:px-8 bg-[#f5fcfe] overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#00A1E0]/5 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[80%] bg-[#00A1E0]/5 rounded-full blur-[120px] rotate-12"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#00A1E0 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

        <div className="max-w-[1200px] mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-8 md:space-y-10">
              <p className="text-sm sm:text-[13px] font-medium text-blueclr uppercase tracking-wider -mb-4 animate-fade-in">
                Active Deployment
              </p>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-[#003049]">
                  <span className="bg-gradient-to-r from-[#005a8c] to-[#00a0dc] bg-clip-text text-transparent">
                    {tool.name.split(' ')[0]}{' '}
                  </span>
                  <span className="bg-gradient-to-r from-[#00a0dc] to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
                    {tool.name.split(' ').slice(1).join(' ') || 'Protocol'}
                  </span>
                </h1>
                <div className="h-1.5 w-32 bg-[#00A1E0] rounded-full"></div>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-xl md:text-2xl font-bold text-[#003049]/80 tracking-tight leading-tight">
                  {tool.tagline}
                </p>
                <p className="text-gray-500 md:text-lg font-medium leading-relaxed opacity-90">
                  {tool.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <button className="group px-12 py-5 bg-[#003049] text-white font-black uppercase tracking-widest text-xs rounded-full shadow-2xl hover:bg-[#002B49] hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95">
                  Launch {tool.name.split(' ')[0]} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-12 py-5 bg-white border border-[#003049]/10 text-[#003049] font-black uppercase tracking-widest text-xs rounded-full shadow-sm hover:border-[#003049] hover:bg-gray-50 hover:-translate-y-0.5 transition-all active:scale-95">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative group perspective-1000">
              {/* Image Container with Premium Shadow/Glow */}
              <div className="relative z-10 transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#00A1E0]/30 to-blue-400/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Tags - Left Side */}
                <div className="absolute top-[10%] left-[-32%] bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden lg:block z-20 hover:scale-105 transition-transform">
                  {tool.highlights?.[0] || 'Developed data products used across agencies'}
                </div>

                <div className="absolute bottom-[20%] left-[-22%] bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden lg:block z-20 hover:scale-105 transition-transform">
                  {tool.highlights?.[1] || '99.8% Success Rate in Data Protocols'}
                </div>

                {/* Floating Tags - Right Side */}
                <div className="absolute top-[-7%] right-[3%] bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden lg:block z-20 hover:scale-105 transition-transform">
                  {tool.highlights?.[2] || 'Enterprise Infrastructure Grade Security'}
                </div>

                <div className="absolute bottom-[7%] right-[-2%] bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl text-[#005F8F] text-xs md:text-sm font-black border-l-[4px] border-[#00A1E0] hidden lg:block z-20 hover:scale-105 transition-transform">
                  {tool.highlights?.[3] || 'Automated Real-time CRM Synchronization'}
                </div>

                <img 
                  src={tool.image} 
                  alt={tool.name} 
                  className="relative w-full h-auto rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,48,73,0.2)] border border-white/80 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Enhanced Visuals */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-end mb-20">
            <div>
                <h2 className="text-[#00A1E0] text-[11px] font-black uppercase tracking-[0.3em] mb-4">Core Capabilities</h2>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] bg-gradient-to-r from-[#005a8c] to-[#00a0dc] bg-clip-text text-transparent">
                  Engineered to outperform.
                </h3>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl opacity-80 border-l-4 border-[#00A1E0] pl-6">
              {tool.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {tool.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-2xl bg-[#f8fafc] border border-gray-100 hover:border-[#003049]/10 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,48,73,0.05)] transition-all duration-500 flex flex-col h-full animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Background Index for Beautification */}
                <div className="absolute -top-4 -right-2 text-9xl font-black text-[#003049]/[0.02] group-hover:text-[#003049]/[0.05] transition-colors pointer-events-none">
                    0{idx + 1}
                </div>

                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#003049] mb-8 group-hover:bg-[#003049] group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10">
                  {idx === 0 ? <Cpu size={26} /> : idx === 1 ? <Target size={26} /> : idx === 2 ? <Layers size={26} /> : <Shield size={26} />}
                </div>
                <h4 className="text-xl font-black text-[#003049] mb-4 tracking-tight leading-tight relative z-10">{feature.title}</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed opacity-90 relative z-10">{feature.desc}</p>
                <div className="mt-auto pt-6 flex items-center gap-2 text-[#00A1E0] font-black text-[10px] uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Proprietary Protocol <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Flow - Dark Mode Premium */}
      <section className="py-20 md:py-24 bg-[#003049] relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
        ></div>

        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#00A1E0]/15 blur-[150px] rounded-full translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[60%] bg-[#00A1E0]/10 blur-[120px] rounded-full -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <h2 className="text-[#00A1E0] text-[11px] font-black uppercase tracking-[0.4em]">The Workflow</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-r from-[#005a8c] to-[#00A1E0] bg-clip-text text-transparent">Unified Operations.</h3>
            <p className="text-blue-100/60 text-lg font-medium max-w-2xl mx-auto">
                A structured four-phase execution protocol designed for maximum reliability and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {tool.howItWorks.map((step, idx) => (
              <div 
                key={idx} 
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Connection Line */}
                {idx < tool.howItWorks.length - 1 && (
                    <div className="absolute top-8 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-white/10 hidden lg:block z-0"></div>
                )}
                
                <div className="relative p-7 rounded-2xl bg-[#003049] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 h-full flex flex-col items-start shadow-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A1E0] to-blue-600 flex items-center justify-center text-xl font-black text-white mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        {idx + 1}
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00A1E0] group-hover:animate-pulse"></span>
                            <h4 className="text-sm font-black text-[#00A1E0] uppercase tracking-widest">Phase {idx + 1}</h4>
                        </div>
                        <p className="text-blue-100/90 text-[15px] font-medium leading-relaxed">
                            {step}
                        </p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment & Benefit Section - Mixed Tech Look */}
      <section className="py-20 md:py-24 bg-[#f8fafc] relative overflow-hidden">
        {/* Background Visual Interest */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#00A1E0]/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-400/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-[#00A1E0] text-[11px] font-black uppercase tracking-[0.3em]">Operational Readiness</h2>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight bg-gradient-to-r from-[#005a8c] to-[#00A1E0] bg-clip-text text-transparent">Field Deployment Scenarios.</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {tool.useCases.map((useCase, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,48,73,0.05)] hover:-translate-y-1 transition-all duration-500 group animate-fade-in-up"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-[1.25rem] bg-[#f8fafc] flex items-center justify-center text-[#00A1E0] group-hover:bg-[#003049] group-hover:text-white transition-all duration-500 shrink-0 shadow-sm">
                      <CheckCircle2 size={22} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-black text-[#003049]/40 uppercase tracking-widest">Protocol Case {idx + 1}</p>
                        <p className="text-base md:text-lg font-bold text-[#003049]/80 group-hover:text-[#003049] transition-colors">{useCase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-1 rounded-3xl bg-[#003049] overflow-hidden group shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00A1E0]/30 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
                
                <div className="relative z-10 p-10 md:p-14 text-center space-y-10">
                    <div className="w-20 h-20 rounded-[2rem] bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/20 group-hover:rotate-6 transition-transform shadow-xl">
                        <Zap size={36} className="text-[#00A1E0]" />
                    </div>
                    
                    <div className="space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00A1E0] text-[10px] font-black uppercase tracking-widest mb-2">Platform Advantage</div>
                        <h4 className="text-2xl md:text-3xl font-black text-white leading-tight">The Competitive Edge</h4>
                        <p className="text-lg font-medium text-blue-100/70 leading-relaxed italic">
                        "{tool.whyItMatters}"
                        </p>
                    </div>

                    <div className="pt-4">
                        <button className="w-full py-5 bg-gradient-to-r from-[#00A1E0] to-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-full shadow-[0_20px_40px_-10px_rgba(0,161,224,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(0,161,224,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95">
                        Initialize Full Protocol <Play size={18} fill="currentColor" />
                        </button>
                        <div className="mt-6 flex items-center justify-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-[#00A1E0] animate-pulse"></div>
                             <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Deployment Tier: Enterprise Preferred</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Hub - Horizontal Scroll on Mobile */}
      <section className="py-20 bg-white mb-10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-3">
                    <h2 className="text-[#00A1E0] text-[11px] font-black uppercase tracking-[0.4em]">The Ecosystem</h2>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-r from-[#005a8c] to-[#00A1E0] bg-clip-text text-transparent">Synchronized Tools.</h3>
                </div>
                <Link to="/platform" className="group px-7 py-3.5 bg-[#003049] text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[#00263A] transition-all flex items-center gap-3 shadow-lg shadow-[#003049]/10">
                    Entire Suite <div className="w-8 h-8 bg-[#00A1E0] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform"><ArrowRight size={16} /></div>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(toolsData).filter(([key]) => key !== slug).slice(0, 4).map(([key, item], idx) => (
                    <Link 
                        key={key} 
                        to={`/tools/${key}`}
                        className="group p-8 rounded-2xl bg-[#f8fafc] border border-transparent hover:border-[#00A1E0]/20 hover:bg-white transition-all duration-500 overflow-hidden relative flex flex-col h-full animate-fade-in-up"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-[0.1] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                             <img src={item.logo} alt="" className="w-28 h-auto" />
                        </div>
                        
                        <div className="relative z-10 mb-4">
                             <img src={item.logo} alt={item.name} className="h-7 -ml-2.5 w-auto object-contain" />
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            <h4 className="text-xl font-black text-[#003049] tracking-tight">{item.name}</h4>
                            <p className="text-sm font-semibold text-gray-400 leading-relaxed line-clamp-2">{item.tagline}</p>
                            
                            <div className="pt-4 space-y-2">
                                {item.highlights.slice(0, 2).map((highlight, hIdx) => (
                                    <div key={hIdx} className="flex items-center gap-2 text-[11px] font-bold text-[#003049]/60">
                                        <div className="w-1 h-1 rounded-full bg-[#00A1E0]"></div>
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-4 flex items-center gap-2 text-[#00A1E0] font-black text-[10px] uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                             Explore Protocol <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Operational Standards & Infrastructure - Final Aesthetic Polish */}
      <section className="py-24 md:py-32 bg-[#f8fafc] relative overflow-hidden border-y border-gray-100">
        {/* Background Visual Detail */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#00A1E0]/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[60%] bg-blue-400/5 blur-[100px] rounded-full -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-center">
             <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A1E0]/5 border border-[#00A1E0]/10 text-[#00A1E0] text-[10px] font-black uppercase tracking-widest shadow-sm">
                    Strategic Infrastructure
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003049] tracking-tighter leading-[0.95]">
                    Built for <br /> 
                    <span className="bg-gradient-to-r from-[#005a8c] to-[#00a1e0] bg-clip-text text-transparent">Mission-Critical</span> <br /> 
                    Operations.
                  </h3>
                </div>
                
                <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md opacity-90">
                  Every {tool.name} deployment runs on a hardened, enterprise-grade architecture engineered for absolute reliability and sub-second precision.
                </p>
                
                <div className="pt-4 flex flex-wrap gap-4">
                   <div className="px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-xl border border-white shadow-sm flex items-center gap-3 group/badge hover:border-[#00A1E0]/30 transition-all cursor-default">
                      <div className="w-8 h-8 rounded-lg bg-[#00A1E0]/10 flex items-center justify-center text-[#00A1E0] group-hover/badge:bg-[#00A1E0] group-hover/badge:text-white transition-all">
                        <Shield size={18} />
                      </div>
                      <span className="text-xs font-black text-[#003049] uppercase tracking-widest">SOC2 Type II</span>
                   </div>
                   <div className="px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-xl border border-white shadow-sm flex items-center gap-3 group/badge hover:border-[#00A1E0]/30 transition-all cursor-default">
                      <div className="w-8 h-8 rounded-lg bg-[#00A1E0]/10 flex items-center justify-center text-[#00A1E0] group-hover/badge:bg-[#00A1E0] group-hover/badge:text-white transition-all">
                        <Lock size={18} />
                      </div>
                      <span className="text-xs font-black text-[#003049] uppercase tracking-widest">AES-256 Auth</span>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-7">
                {[
                  { label: "Execution Latency", value: "< 240ms", desc: "Global edge-optimized delivery protocol", icon: Zap },
                  { label: "Protocol Precision", value: "99.9%", desc: "Verified result-only data output mapping", icon: Compass },
                  { label: "Service Availability", value: "100%", desc: "Redundant elastic node infrastructure", icon: Activity },
                  { label: "Data Freshness", value: "Hourly", desc: "Continuous real-time stream validation", icon: Settings }
                ].map((stat, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#003049]/10 hover:shadow-[0_30px_60px_-15px_rgba(0,48,73,0.08)] transition-all duration-500 group relative overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${sIdx * 150}ms` }}
                  >
                    {/* Background Detail for consistency with Feature Grid */}
                    <div className="absolute -top-4 -right-2 text-8xl font-black text-[#003049]/[0.02] group-hover:text-[#003049]/[0.04] transition-colors pointer-events-none">
                        {sIdx + 1}
                    </div>

                    <div className="flex items-center justify-between mb-8 relative z-10">
                       <div className="w-12 h-12 rounded-xl bg-[#f8fafc] text-[#00A1E0] flex items-center justify-center group-hover:bg-[#003049] group-hover:text-white transition-all duration-500 shadow-sm">
                          <stat.icon size={24} />
                       </div>
                       <span className="text-3xl lg:text-4xl font-black text-[#003049] tracking-tighter transition-transform group-hover:scale-110 duration-500">{stat.value}</span>
                    </div>
                    
                    <div className="relative z-10">
                       <h4 className="text-sm font-black text-[#003049] uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="w-1 h-3 bg-[#00A1E0] rounded-full"></span>
                          {stat.label}
                       </h4>
                       <p className="text-xs font-semibold text-gray-400 leading-relaxed pr-4">{stat.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Global Consistent Design */}
      <section className="py-20 md:py-28 bg-[#002B49] relative overflow-hidden">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={bgImg}
            alt=""
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002B49] via-[#002B49]/80 to-[#002B49]"></div>
        </div>

        {/* Decorative Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A1E0]/20 rounded-full blur-[120px] animate-pulse"></div>

        {/* Floating Sparkles */}
        <div className="absolute top-20 right-[15%] animate-float opacity-30">
          <Sparkles size={32} className="text-[#00A1E0]" />
        </div>
        <div className="absolute bottom-20 left-[10%] animate-float-slow opacity-20">
          <Sparkles size={24} className="text-[#F59E0B]" />
        </div>

        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#00A1E0]/10 border border-[#00A1E0]/20 px-4 py-1.5 rounded-full mb-2">
              <span className="text-[#00A1E0] text-[10px] font-black uppercase tracking-[0.2em]">Final Protocol</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Ready to lead <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A1E0] via-white to-[#00A1E0] animate-gradient-slow">the market?</span>
            </h2>
            
            <p className="text-blue-100/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
              Activate {tool.name} today and experience the future of precision B2B operations. 
              Join the elite teams dominating their sectors with SalesDriver protocols.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/pricing" className="group px-12 py-5 bg-[#00A1E0] text-white font-black uppercase tracking-widest text-xs rounded-full shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3">
              Start Protocol Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500 hover:bg-white/20 hover:border-white/40 transform hover:-translate-y-1 active:scale-95">
              Request Command Demo
            </Link>
          </div>

          <p className="text-blue-100/30 text-[10px] font-black uppercase tracking-[0.3em] pt-4">
             Trusted by High-Performance Sales Orgs
          </p>
        </div>

        <style jsx="true">{`
          @keyframes gradient-slow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-15px, 15px); }
          }
          .animate-gradient-slow {
            background-size: 200% auto;
            animation: gradient-slow 6s linear infinite;
          }
          .animate-float { animation: float 5s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        `}</style>
      </section>
    </div>
  );
};

export default ToolDetailPage;
