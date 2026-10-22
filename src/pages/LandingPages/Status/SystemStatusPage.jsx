import { Link } from "react-router-dom";
import { Activity, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import {
  systemStatus,
  isSystemHealthy,
  STATUS_SERVICES,
  STATUS_LABELS,
} from "../../../data/systemStatusData";
import { BOOKING_PATH } from "../../../config/booking";

const GROUPS = [...new Set(STATUS_SERVICES.map((s) => s.group))];

export default function SystemStatusPage() {
  const overall = isSystemHealthy
    ? STATUS_LABELS.operational
    : STATUS_LABELS[systemStatus.state] || STATUS_LABELS.degraded;

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
    >
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] pt-24 pb-12 md:pt-28 md:pb-16 border-b border-[#e2e8f0]">
        <div aria-hidden className="absolute w-80 h-80 rounded-full bg-[#EEF4FF] -top-40 -left-28 pointer-events-none" />
        <div aria-hidden className="absolute w-64 h-64 rounded-full bg-[#FFF4EA] -bottom-28 -right-20 pointer-events-none" />

        <div className="relative max-w-[960px] mx-auto px-5 md:px-8">
          <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
            System status
          </span>
          <h1
            className="mt-3 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold text-[#0B0F19] leading-[1.05] tracking-[-0.03em]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            SalesDriver{" "}
            <span className="text-[#2563eb]">uptime</span>
            <span className="text-[#F97316]">.</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-[#475569] max-w-xl leading-relaxed">
            Live view of core platform services. Updated when incidents are reported.
          </p>

          <div
            className="mt-8 rounded-2xl border-2 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ borderColor: `${overall.color}33`, background: overall.bg }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#fff", color: overall.color }}
            >
              {isSystemHealthy ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <AlertTriangle className="w-6 h-6" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-[#0B0F19]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {isSystemHealthy ? systemStatus.label : systemStatus.message}
              </p>
              <p className="text-sm text-[#475569] mt-0.5">{systemStatus.detail}</p>
            </div>
            <span
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white border"
              style={{ color: overall.color, borderColor: `${overall.color}44` }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: overall.color }} />
              {overall.label}
            </span>
          </div>
          <p className="mt-3 text-xs text-[#94a3b8] font-semibold">
            Last updated: {systemStatus.updatedAt}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="max-w-[960px] mx-auto px-5 md:px-8 space-y-10">
          {GROUPS.map((group) => (
            <div key={group}>
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-4 h-4 text-[#2563eb]" />
                <h2 className="text-sm font-black uppercase tracking-widest text-[#64748b]">
                  {group}
                </h2>
              </div>
              <ul className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden divide-y divide-[#f1f5f9]">
                {STATUS_SERVICES.filter((s) => s.group === group).map((svc) => {
                  const meta = STATUS_LABELS[svc.status] || STATUS_LABELS.operational;
                  return (
                    <li
                      key={svc.id}
                      className="flex items-center justify-between gap-4 px-5 py-3.5"
                    >
                      <span className="text-sm font-bold text-[#0B0F19]">{svc.name}</span>
                      <span
                        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                        style={{ color: meta.color, background: meta.bg }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: meta.color }}
                        />
                        {meta.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="rounded-2xl border border-[#e2e8f0] bg-[#F8FAFC] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <p className="font-bold text-[#0B0F19]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Seeing an issue?
              </p>
              <p className="text-sm text-[#64748b] mt-1">
                Contact support or book a call — we will check your account and stack.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact?topic=support"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1d4ed8] no-underline"
              >
                Contact support
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={BOOKING_PATH}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#0B0F19] hover:border-[#2563eb] no-underline"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
