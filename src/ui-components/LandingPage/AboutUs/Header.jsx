import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BOOKING_PATH } from "../../../config/booking";

export default function Header() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] pt-24 pb-14 md:pt-28 md:pb-20"
      style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
    >
      <div aria-hidden className="absolute w-80 h-80 rounded-full bg-[#EEF4FF] -top-40 -left-32 pointer-events-none" />
      <div aria-hidden className="absolute w-72 h-72 rounded-full bg-[#FFF4EA] -bottom-36 -right-24 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          {/* Left: hero copy */}
          <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-5 text-left">
            <span className="self-start inline-flex items-center gap-2 text-[12px] md:text-[13px] font-bold tracking-[0.14em] uppercase text-[#2563EB] bg-[#EEF4FF] border border-[#DBE7FE] rounded-full px-3.5 py-1.5">
              About SalesDriver
            </span>
            <h1
              className="m-0 text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0B0F19]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Built for people who{" "}
              <span className="text-[#2563EB]">sell for a living</span>
            </h1>
            <p className="m-0 text-base md:text-lg text-[#475569] leading-relaxed max-w-xl">
              SalesDriver exists because B2B sales turned into a maze of tools,
              subscriptions, and scattered systems. We built one platform — and a
              team — that finds the companies that need what you sell and drives
              them to buy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
              <Link
                to={BOOKING_PATH}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_#F9731640] hover:bg-[#ea6c0a] transition-colors no-underline"
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-bold text-[#0B0F19] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors no-underline"
              >
                See case studies
              </Link>
            </div>
          </div>

          {/* Right: meet-the-team video */}
          <div className="w-full lg:w-[52%] xl:w-[580px] flex-shrink-0">
            <div className="relative rounded-[22px] overflow-hidden border border-[#E2E8F0] bg-[#0B1220] shadow-[0_30px_70px_-24px_#0F172A40] aspect-[16/10] min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
              <video
                src="/videos/meet-the-team.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                aria-label="Meet the SalesDriver team"
              />
            </div>
            <p className="mt-3 text-center text-xs text-[#64748B] font-medium">
              Meet the team behind SalesDriver
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
