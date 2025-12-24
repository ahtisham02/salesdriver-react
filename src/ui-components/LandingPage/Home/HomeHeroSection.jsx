import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Fingerprint, 
  ShieldCheck, 
  Target, 
  Activity, 
  Send, 
  Megaphone, 
  Sparkles 
} from 'lucide-react';

const HomeHeroSection = () => {
  const navigate = useNavigate();
  const [showLines, setShowLines] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLines(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Configuration: 4 Left, 3 Right.
  // Using cleaner geometry calculations for a "Tree" look.
  // Left Branch: Linear slope from (10, 20) to (50, 100).
  // Right Branch: Linear slope from (90, 20) to (50, 100).
  
  // Left Tags (4):
  const leftTags = [
    { id: 1, text: "Identity & Data", Icon: Fingerprint,   x: 10, y: 15 },
    { id: 2, text: "Verification",    Icon: ShieldCheck,   x: 20, y: 35 },
    { id: 3, text: "Intent & Signals", Icon: Target,       x: 30, y: 55 },
    { id: 4, text: "Tracking",        Icon: Activity,      x: 40, y: 75 },
  ];

  // Right Tags (3):
  const rightTags = [
    { id: 5, text: "Outbound",        Icon: Send,          x: 60, y: 25 },
    { id: 6, text: "Ads",             Icon: Megaphone,     x: 75, y: 50 },
    { id: 7, text: "Personalization", Icon: Sparkles,      x: 90, y: 75 },
  ];

  // Line Geometry
  // We want to draw a line from the Tag position DOWN to a main "Branch".
  // Let's define the Branch Lines.
  // Left Branch Line: (0, 35) -> (50, 100).
  // Right Branch Line: (100, 35) -> (50, 100).
  
  // Projection logic: Drop a vertical line from Tag(x,y) to BranchY at that X.
  // Left Branch Y = m*x + b.
  // (0,35) to (50,100). m = (100-35)/(50-0) = 65/50 = 1.3. b = 35.
  // y = 1.3x + 35.
  
  // Right Branch Y = m*x + b.
  // (100,35) to (50,100). m = (100-35)/(50-100) = 65/-50 = -1.3.
  // y - 100 = -1.3(x - 50) => y = -1.3x + 65 + 100 = -1.3x + 165.
  
  const getStemBase = (tag, isLeft) => {
      const lineY = isLeft 
        ? 1.3 * tag.x + 35 
        : -1.3 * tag.x + 165;
      return { x: tag.x, y: Math.min(lineY, 100) }; // Clamp to 100
  };

  const allTags = [
      ...leftTags.map(t => ({ ...t, isLeft: true, base: getStemBase(t, true) })),
      ...rightTags.map(t => ({ ...t, isLeft: false, base: getStemBase(t, false) }))
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#e2f5fb] pt-20 lg:min-h-[90vh] flex flex-col items-center justify-center">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#005895] mb-6 leading-tight">
          One system.<br />
          Not ten subscriptions.
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          All your B2B sales tools in one plan with one shared credit pool—<br className="hidden md:block" />
          built to replace the stack you're overspending on.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/pricing')}
            className="px-8 py-3 bg-[#00a0dc] text-white rounded-full font-bold hover:bg-[#0089bd] transition-colors shadow-lg shadow-blue-200"
          >
            Start Free
          </button>
          <button 
            onClick={() => navigate('/platform')}
            className="px-8 py-3 bg-transparent border-2 border-[#00a0dc] text-[#003049] rounded-full font-bold hover:bg-white transition-colors"
          >
            Explore the System
          </button>
        </div>

        {/* Subtext */}
        <p className="text-[#005a8c] font-medium mb-8">
          Plans start at $99 a month, and your first month is free.
        </p>

        {/* Badge */}
        <div className="inline-block bg-[#fff5db] border border-[#fceeb5] text-[#b45309] px-6 py-2 rounded-full text-sm font-semibold mb-12">
          <span className="font-bold">50% off</span> if you lock in <span className="font-bold">before Jan 31</span>
        </div>
      </div>

      {/* Diagram Container */}
      <div className="relative w-full max-w-[1200px] h-[450px] mx-auto mt-[-40px]">
        
        {/* SVG Structure */}
        <svg 
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${showLines ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: 10 }}
        >
           {/* Branch Lines */}
           {/* Left Branch */}
           <line x1="0%" y1="35%" x2="50%" y2="100%" stroke="#00a0dc" strokeWidth="2" strokeOpacity="0.6" />
           {/* Right Branch */}
           <line x1="100%" y1="35%" x2="50%" y2="100%" stroke="#00a0dc" strokeWidth="2" strokeOpacity="0.6" />

           {/* Stems & Nodes */}
           {allTags.map((tag) => (
             <React.Fragment key={`structure-${tag.id}`}>
               <line 
                  x1={`${tag.base.x}%`} y1={`${tag.base.y}%`} 
                  x2={`${tag.x}%`} y2={`${tag.y}%`} 
                  stroke="#00a0dc" strokeWidth="2" strokeOpacity="0.6" 
               />
               <circle cx={`${tag.base.x}%`} cy={`${tag.base.y}%`} r="5" fill="#fbbf24" stroke="white" strokeWidth="2" />
             </React.Fragment>
           ))}
           
           {/* Root Node */}
           <circle cx="50%" cy="100%" r="8" fill="#00a0dc" stroke="white" strokeWidth="2" />
        </svg>

        {/* Tags */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {allTags.map((tag) => (
             <div
               key={tag.id}
               className="absolute bg-white px-5 py-2 md:px-6 md:py-3 rounded-2xl shadow-sm border-l-[4px] border-[#00A1E0] flex items-center gap-3 animate-fall hover:scale-105 transition-transform duration-300"
               style={{
                 left: `${tag.x}%`,
                 top: `${tag.y}%`, 
                 transform: 'translate(-50%, -50%)', 
                 boxShadow: "0 4px 20px rgba(0, 140, 201, 0.15)",
                 animationDelay: `${0.1 * tag.id}s`,
               }}
             >
               {/* Lucide Icon */}
               <tag.Icon className="w-6 h-6 md:w-7 md:h-7 text-[#00A1E0]" strokeWidth={2} />
               
               {/* Text */}
               <span className="whitespace-nowrap font-semibold text-[#008CC9] text-sm md:text-lg">
                 {tag.text}
               </span>
             </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translate(-50%, -800px);
            opacity: 0;
          }
          60% {
            transform: translate(-50%, 20px);
            opacity: 1;
          }
          80% {
             transform: translate(-50%, -10px);
          }
          100% {
            transform: translate(-50%, -50%); 
            opacity: 1;
          }
        }
        .animate-fall {
          animation: fall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0; 
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HomeHeroSection;
