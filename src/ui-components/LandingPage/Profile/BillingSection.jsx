import React from "react";
import { CreditCard, CheckCircle2, Zap, ArrowRight, Download, Plus } from "lucide-react";

const BillingSection = () => {
  const plan = {
    name: "Business Pro",
    price: "$99/mo",
    status: "Active",
    nextBilling: "January 24, 2025"
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 border border-white/40 shadow-xl shadow-blue-900/5">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-white text-green-600 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm border border-green-100">
            <Zap size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#003049] tracking-tight">Financial Hub</h2>
            <p className="text-gray-500 font-medium">Manage your subscription blueprint and capital flow.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
                <div className="p-10 rounded-[32px] bg-gradient-to-br from-[#003049] via-[#005a8c] to-[#00A7E2] text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20">
                    <div className="absolute top-0 right-0 p-12 transform translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 opacity-10">
                        <Zap size={200} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/20">Current Protocol</span>
                            <span className="flex items-center gap-1.5 text-[10px] font-black text-green-400 uppercase tracking-widest">
                                <CheckCircle2 size={16} /> Subscription Active
                            </span>
                        </div>
                        <h3 className="text-5xl font-black mb-3 tracking-tighter">{plan.name}</h3>
                        <p className="text-blue-100 mb-10 max-w-sm text-lg font-medium leading-relaxed opacity-80">Unrestricted access to our elite suite of growth tools and neural processing.</p>
                        <div className="flex flex-wrap items-center gap-8">
                            <button className="px-10 py-4 bg-white text-[#003049] font-black rounded-2xl shadow-2xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group/btn">
                                SCALE PLAN
                                <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                            <div className="flex flex-col">
                                <p className="text-blue-200 uppercase text-[10px] font-black tracking-[0.2em] mb-1">Renewal Cycle</p>
                                <p className="font-bold text-lg">{plan.nextBilling}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/50 backdrop-blur-md rounded-[24px] p-8 border border-white/60 shadow-sm transition-all hover:bg-white hover:border-blue-100">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-xl font-black text-[#003049]">Liquid Assets</h4>
                        <button className="flex items-center gap-2 text-[#00A7E2] font-black text-sm hover:text-[#0089bd] transition-all hover:scale-105">
                            <Plus size={20} /> ATTACH CARD
                        </button>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group/card">
                        <div className="w-16 h-16 bg-blue-50 text-[#00A7E2] rounded-xl flex items-center justify-center transition-transform group-hover/card:rotate-12">
                            <CreditCard size={32} />
                        </div>
                        <div className="flex-1">
                            <p className="font-black text-lg text-[#003049]">Visa •••• 4242</p>
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Expires 12/28</p>
                        </div>
                        <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-full uppercase tracking-[0.15em] border border-green-100">Primary</span>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="p-8 bg-white/50 backdrop-blur-md border border-white/60 rounded-[32px] shadow-sm flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-6 bg-[#00A7E2] rounded-full"></div>
                        <h4 className="text-lg font-black text-[#003049]">Invoicing History</h4>
                    </div>
                    <div className="space-y-6 flex-1">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between group pt-6 first:pt-0 border-t border-gray-100/50 first:border-0 hover:bg-white/40 p-2 rounded-xl transition-colors">
                                <div>
                                    <p className="text-[15px] font-black text-[#003049]">Dec {20-i}, 2024</p>
                                    <p className="text-xs text-gray-400 font-bold tracking-widest leading-loose">USD $99.00</p>
                                </div>
                                <button className="p-3 text-gray-400 hover:text-[#00A7E2] hover:bg-blue-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                                    <Download size={22} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-10 py-4 text-xs font-black text-gray-400 uppercase tracking-[0.2em] hover:text-[#003049] hover:bg-white rounded-2xl transition-all border border-transparent hover:border-gray-100 shadow-sm">
                        Audit Complete History
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSection;
