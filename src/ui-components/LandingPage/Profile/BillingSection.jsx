import React, { useState, useEffect } from "react";
import { CreditCard, CheckCircle2, Zap, ArrowRight, Download, Plus, Loader2, XCircle } from "lucide-react";
import { subscriptionService } from "../../../services/subscriptionService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BillingSection = () => {
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState(null);
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [subResult, plansResult] = await Promise.allSettled([
        subscriptionService.getCurrentSubscription(),
        subscriptionService.getPlans()
      ]);

      if (subResult.status === "fulfilled") {
        setSubscription(subResult.value);
      } else {
        console.warn("Subscription not found or error:", subResult.reason);
        // If it's a 404 or "No subscription found", we just keep subscription as null
        setSubscription(null);
      }

      if (plansResult.status === "fulfilled") {
        setPlans(plansResult.value);
      } else {
        console.error("Failed to fetch plans:", plansResult.reason);
        toast.error("Failed to load pricing plans.");
      }
    } catch (error) {
      console.error("Unexpected error in fetchData:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpgrade = async (planType) => {
    setIsActionLoading(true);
    try {
      await subscriptionService.upgradeSubscription(planType);
      toast.success(`Successfully upgraded to ${planType}!`);
      setShowUpgradeModal(false);
      fetchData();
    } catch (error) {
      toast.error(error.message || "Failed to upgrade subscription.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleCancelSubscription = async () => {
    if (!window.confirm("Are you sure you want to cancel your subscription? Your access will continue until the end of the billing period.")) return;
    
    setIsActionLoading(true);
    try {
      await subscriptionService.cancelSubscription();
      toast.success("Subscription cancelled successfully.");
      fetchSubscription();
    } catch (error) {
      toast.error(error.message || "Failed to cancel subscription.");
    } finally {
      setIsActionLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-20 flex justify-center items-center border border-white/40 shadow-xl">
        <Loader2 className="animate-spin text-[#00A7E2]" size={40} />
      </div>
    );
  }

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

        <div className="space-y-8">
            <div className="p-10 rounded-[32px] bg-gradient-to-br from-[#003049] via-[#005a8c] to-[#00A7E2] text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20">
                <div className="absolute top-0 right-0 p-12 transform translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 opacity-10">
                    <Zap size={200} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/20">Current Protocol</span>
                        <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${subscription?.status === 'active' ? 'text-green-400' : 'text-red-400'}`}>
                            {subscription?.status === 'active' ? <CheckCircle2 size={16} /> : <XCircle size={16} />} 
                            Subscription {subscription?.status || 'None'}
                        </span>
                    </div>
                    <h3 className="text-5xl font-black mb-3 tracking-tighter">{subscription?.plan_type || "Free Plan"}</h3>
                    <p className="text-blue-100 mb-10 max-w-sm text-lg font-medium leading-relaxed opacity-80">
                      {subscription 
                        ? "Unrestricted access to our elite suite of growth tools and neural processing." 
                        : "Get started with our free tier or upgrade for more power."}
                    </p>
                    <div className="flex flex-wrap items-center gap-8">
                        <button 
                          onClick={() => setShowUpgradeModal(true)}
                          className="px-10 py-4 bg-white text-[#003049] font-black rounded-2xl shadow-2xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group/btn"
                        >
                            {subscription ? "CHANGE PLAN" : "UPGRADE NOW"}
                            <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
                        </button>
                        {subscription && (
                          <div className="flex flex-col">
                              <p className="text-blue-200 uppercase text-[10px] font-black tracking-[0.2em] mb-1">
                                {subscription.status === 'canceled' ? 'Access Ends' : 'Renewal Cycle'}
                              </p>
                              <p className="font-bold text-lg">
                                {new Date(subscription.current_period_end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                              </p>
                          </div>
                        )}
                    </div>
                    {subscription && (
                      <div className="mt-8 flex flex-wrap gap-4 items-center">
                        {subscription.status !== 'canceled' && (
                          <button 
                            onClick={handleCancelSubscription}
                            disabled={isActionLoading}
                            className="text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                          >
                            {isActionLoading ? "PROCESSING..." : "CANCEL SUBSCRIPTION"}
                          </button>
                        )}
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/30 truncate max-w-[200px]" title={subscription.stripe_subscription_id}>
                          ID: {subscription.stripe_subscription_id}
                        </div>
                      </div>
                    )}
                </div>
            </div>

            <div className="bg-white/50 backdrop-blur-md rounded-[24px] p-8 border border-white/60 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-6 bg-[#00A7E2] rounded-full"></div>
                    <h4 className="text-xl font-black text-[#003049]">System Credentials</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/50 rounded-xl border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Customer Identifier</p>
                        <p className="text-sm font-bold text-[#003049] truncate">{subscription?.stripe_customer_id || "Not assigned"}</p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-xl border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Subscription Tier</p>
                        <p className="text-sm font-bold text-[#003049]">{subscription?.plan_type || "No active tier"}</p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-xl border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Service Onset</p>
                        <p className="text-sm font-bold text-[#003049]">
                          {subscription?.created_at ? new Date(subscription.created_at).toLocaleDateString() : "N/A"}
                        </p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-xl border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status Protocol</p>
                        <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-black uppercase ${subscription?.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                          {subscription?.status || "inactive"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-sm bg-black/20">
          <div className="bg-white rounded-[32px] w-full max-w-4xl p-8 md:p-12 shadow-2xl relative animate-in zoom-in duration-300">
            <button 
              onClick={() => setShowUpgradeModal(false)}
              className="absolute top-8 right-8 p-2 text-gray-400 hover:text-[#003049] transition-colors"
            >
              <XCircle size={32} />
            </button>
            <h2 className="text-3xl font-black text-[#003049] mb-2 tracking-tight">Modify Protocol</h2>
            <p className="text-gray-500 font-medium mb-10">Select a new tier for your operation.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.filter(p => p.plan_type !== "Free").map((plan) => (
                <div 
                  key={plan.id}
                  className={`p-6 rounded-[24px] border-2 transition-all cursor-pointer flex flex-col ${
                    subscription?.plan_type === plan.plan_type 
                      ? "border-[#003049] bg-gray-50/50 cursor-default" 
                      : "border-gray-100 hover:border-[#00A7E2] hover:bg-blue-50/30"
                  }`}
                  onClick={() => {
                    if (subscription?.plan_type !== plan.plan_type) {
                      handleUpgrade(plan.plan_type);
                    }
                  }}
                >
                  <h4 className="text-lg font-black text-[#003049] mb-1">{plan.name}</h4>
                  <p className="text-2xl font-black text-[#00A7E2] mb-4">${plan.price}<span className="text-xs text-gray-400 font-bold lowercase">/mo</span></p>
                  <div className="flex-grow space-y-2 mb-6">
                    {(plan.features || []).slice(0, 3).map((f, i) => (
                      <p key={i} className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-green-500" /> {f}
                      </p>
                    ))}
                  </div>
                  <button 
                    disabled={isActionLoading || subscription?.plan_type === plan.plan_type}
                    className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      subscription?.plan_type === plan.plan_type
                        ? "bg-gray-200 text-gray-400"
                        : "bg-[#003049] text-white hover:bg-[#002B49]"
                    }`}
                  >
                    {subscription?.plan_type === plan.plan_type ? "CURRENT" : (isActionLoading ? "PROCESSING..." : "SELECT")}
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-gray-400 font-medium">
              Note: Upgrades are immediate. Price will be pro-rated based on your current cycle.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingSection;
