import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeadImg from "../../../assets/Group1000001040.png";
import img1 from "../../../assets/Rectangle 35.png";
import img2 from "../../../assets/Rectangle 35 (1).png";
import img3 from "../../../assets/Rectangle 35 (2).png";
import img4 from "../../../assets/Rectangle 35 (3).png";
import img5 from "../../../assets/Rectangle 35 (4).png";
import img6 from "../../../assets/Rectangle 35 (5).png";

const tabs = [
  "Strategy",
  "Sales",
  "Data",
  "Content",
  "Automation",
  "SEO/Ads",
  "Support",
];

const tabData = {
  Strategy: [
    {
      title: "Virtual Sales Reps",
      logo: "MeetNow Agency",
      logoImg: img2,
      path: "https://meetnow.agency/",
      description:
        "Virtual sales reps that handle outreach, book meetings, and close deals, reducing overhead and scaling sales difficulty.",
      points: [
        "Lower costs compared to hiring in-house sales reps",
        "Consistent pipeline of qualified meetings",
        "Scalable feature to grow without extra overhead",
      ],
    },
    {
      title: "Social Selling",
      logo: "SEP Marketing Services",
      logoImg: img1,
      path: "https://companycmarketing.com/home",
      description:
        "AI-powered social selling that connects businesses with the right prospects and turns social media into a sales engine.",
      points: [
        "Automated outreach to target ideal customers",
        "AI-driven engagement to increase response rates",
        "More leads generated through LinkedIn and other platforms",
      ],
    },
    {
      title: "Web Design",
      logo: "CompanyC Creative",
      logoImg: img3,
      path: "https://info.b2bmarketing.biz/home",
      description:
        "Conversion focused web design that enhances user experience and drives measurable business growth.",
      points: [
        "Strategically designed websites for higher conversions",
        "Optimized layouts to enhance user experience",
        "Data-driven approach to maximize online sales",
      ],
    },
    {
      title: "Web Solution",
      logo: "Web Point Digital",
      logoImg: img4,
      path: "https://info.sepmarketingservices.com/home",
      description:
        "High-converting websites built to attract, engage, and convert customers, ensuring businesses stand out online",
      points: [
        "Custom website design optimized for conversions",
        "Seamless user experience to improve engagement",
        "Scalable web solutions tailored to business growth",
      ],
    },
    {
      title: "Lead Generation",
      logo: "B2B Marketing.biz",
      logoImg: img5,
      path: "https://webpointdigital.com/home",
      description:
        "Automated B2B lead generation that delivers high-quality, sales-ready prospects straight to your pipeline.",
      points: [
        "Consistent stream of qualified B2B leads",
        "AI-powered automation to reduce manual prospecting",
        "Faster deal closures with pre-qualified opportunities",
      ],
    },
    {
      title: "Custom Solutions",
      logo: "Icon Devs",
      logoImg: img6,
      path: "https://icondevs.com/home",
      description:
        "Custom software solutions built to streamline operations, improve efficiency, and support business growth.",
      points: [
        "Custom software to fit specific business needs",
        "Automation to eliminate inefficiencies and manual work",
        "Scalable solutions that grow with your company",
      ],
    },
  ],
  Sales: [],
  Data: [],
  Content: [],
  Automation: [],
  "SEO/Ads": [],
  Support: [],
};

export default function ExactUILayout() {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(() => {
    const navState = location.state;
    if (navState?.activeTab && tabData.hasOwnProperty(navState.activeTab)) {
      return navState.activeTab;
    }
    return "Strategy";
  });

  const [expanded, setExpanded] = useState(() => {
    const navState = location.state;
    const tabToConsider = (navState?.activeTab && tabData.hasOwnProperty(navState.activeTab))
                          ? navState.activeTab
                          : "Strategy";
    const featuresForExpansion = tabData[tabToConsider] || [];

    if (navState?.activeSolution && featuresForExpansion.length > 0) {
      const solutionIndex = featuresForExpansion.findIndex(
        (feature) => feature.title === navState.activeSolution
      );
      if (solutionIndex !== -1) {
        return solutionIndex;
      }
    }
    if (navState?.activeTab && tabData.hasOwnProperty(navState.activeTab) && !navState?.activeSolution && featuresForExpansion.length > 0) {
      return 0;
    }
    return featuresForExpansion.length > 0 ? 0 : 1; // Fallback to original 1 if needed or 0 if items exist
  });

  useEffect(() => {
    const navState = location.state;
    if (navState) {
      let tabNeedsUpdate = false;
      let newTab = activeTab;

      if (navState.activeTab && tabData.hasOwnProperty(navState.activeTab) && navState.activeTab !== activeTab) {
        setActiveTab(navState.activeTab);
        newTab = navState.activeTab;
        tabNeedsUpdate = true;
      }

      const currentFeatures = tabData[newTab] || [];

      if (navState.activeSolution && currentFeatures.length > 0) {
        const solutionIndex = currentFeatures.findIndex(
          (feature) => feature.title === navState.activeSolution
        );
        if (solutionIndex !== -1) {
          setExpanded(solutionIndex);
        } else {
          setExpanded(currentFeatures.length > 0 ? 0 : null);
        }
      } else if (tabNeedsUpdate) {
        setExpanded(currentFeatures.length > 0 ? 0 : null);
      }
    }
  }, [location.state, activeTab]);

  const features = tabData[activeTab] || [];

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const hasDraggedRef = useRef(false);

  const DRAG_THRESHOLD = 10;

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const handleDragStart = (e) => {
    if (!scrollContainerRef.current) return;
    if (e.button && e.button !== 0) return;

    setIsDragging(true);
    setStartX(getClientX(e));
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    hasDraggedRef.current = false;
    scrollContainerRef.current.style.cursor = "grabbing";
    document.body.style.userSelect = 'none';
  };

  const handleDragMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const currentX = getClientX(e);
    const walk = currentX - startX;

    if (!hasDraggedRef.current && Math.abs(walk) > DRAG_THRESHOLD) {
        hasDraggedRef.current = true;
    }
    
    if (hasDraggedRef.current && e.cancelable) {
        e.preventDefault();
    }

    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleDragEnd = () => {
    if (!isDragging || !scrollContainerRef.current) return;
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = "grab";
    document.body.style.userSelect = '';
  };
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleDragMove, { passive: false });
      document.addEventListener('touchend', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('touchend', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('touchend', handleDragEnd);
      document.body.style.userSelect = '';
    };
  }, [isDragging, startX, scrollLeftStart]); // Added startX, scrollLeftStart for completeness in closure

  return (
    <div className="container relative mx-auto px-6 lg:px-14 pt-10 lg:pt-14 my-4">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h1 className="lg:text-[58px] mt-2 text-3xl font-extrabold text-[#00A7E2] tracking-wide">
            Comprehensive Solutions{" "}
          </h1>
        </div>
        <div className="sm:block absolute hidden left-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-r from-white/70 via-white/40 to-transparent z-10"></div>

        <div className="relative flex flex-col sm:flex-row items-start">
          <div className="flex sm:hidden flex-col items-center justify-center px-2 pt-4 space-y-3">
            {Array.from({ length: features.length || 0 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setExpanded(i)}
                className={`w-[7px] rounded-full transition-all duration-300 ${
                  expanded === i
                    ? "bg-gradient-to-b h-40 from-[#00AEEF] to-[#005895] shadow-md opacity-80"
                    : "bg-gray-300 h-16 opacity-50"
                }`}
              />
            ))}
          </div>
          <div
            ref={scrollContainerRef}
            className="flex sm:flex-row scrollbar-hide flex-col -mt-[540px] sm:-mt-0 sm:pl-0 pl-16 space-y-3 sm:space-y-0 sm:space-x-3 w-full overflow-y-auto sm:overflow-x-auto p-2 sm:p-6"
            style={{ cursor: "grab" }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ease-in-out rounded-3xl w-[95%] sm:w-[130px] sm:h-[390px] flex flex-col ${
                  expanded === index
                    ? "min-h-[395px] sm:min-w-[500px] scale-[1.01] p-4 mb-4 sm:mb-0 sm:pl-2 shadow-lg items-start bg-[#D9EEFA]"
                    : "bg-[#ECF7FD] hover:scale-[1.03] hover:bg-[#D9EEFA] hover:shadow-lg"
                }`}
                onClick={() => {
                  if (hasDraggedRef.current) {
                    return;
                  }
                  setExpanded(expanded === index ? null : index);
                }}
              >
                <span
                  className={`text-lg px-6 text-center pt-6 font-bold text-gray-700 ${
                    expanded === index ? "self-start mb-5" : ""
                  }`}
                >
                  {`0${index + 1}`}
                </span>
                <h3
                  className={`text-lg px-6 font-bold text-center transition-transform duration-500 ${
                    expanded === index
                      ? "rotate-0 md:text-3xl"
                      : "sm:rotate-90 !mt-[20px] !mb-[26px] sm:!mb-[0px] sm:!mt-[70px] text-nowrap md:text-xl"
                  }`}
                >
                  {feature.title}
                </h3>
                {expanded === index && (
                  <>
                    <p className="text-gray-600 mt-3 p-6 text-sm leading-relaxed text-center md:text-left">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 ml-9">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between ml-9">
                      <div className="flex items-center space-x-2 mt-3">
                        <img
                          src={feature.logoImg}
                          alt={feature.logo}
                          className={`${
                            index === 4
                              ? "md:w-60 w-52"
                              : index < 5
                              ? "md:w-48 w-40"
                              : "md:w-40 w-32"
                          } object-contain`}
                        />
                      </div>
                    </div>
                    <a
                      href={feature.path || "https://link.salesdriver.io/widget/booking/YLwxGlwqKM9noAp4HNIx"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`${
                        index === 4
                          ? "lg:-mt-[22px]"
                          : index === 3 || index === 2 || index === 0
                          ? "lg:-mt-[14px]"
                          : index === 1
                          ? "lg:-mt-[38px] -mt-4"
                          : "lg:-mt-[8px] mt-1"
                      } mt-auto -mb-4 sm:-mb-0 -mr-4 px-5 py-2.5 text-white text-xl font-semibold self-end rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-[#005895] to-[#00A7E2] transition-all duration-300 ease-in-out hover:from-[#fbad18] hover:to-[#fbad18]`}
                    >
                      Learn More
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="sm:block absolute hidden right-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-l from-white/85 via-white/60 to-transparent z-10"></div>
        <div className="sm:flex hidden justify-center space-x-2">
          {Array.from({ length: features.length || 0 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setExpanded(i === expanded ? null : i)}
              className={`h-[7px] rounded-full transition-all duration-300 cursor-pointer ${
                expanded === i
                  ? "w-52 bg-gradient-to-r from-[#00AEEF] to-[#005895]"
                  : "w-20 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}