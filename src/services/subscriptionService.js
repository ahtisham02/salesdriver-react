import { request } from "./api";

export const subscriptionService = {
    getPlans: async () => {
        return await request("/api/subscriptions/plans", {
            method: "GET",
        });
    },

    createCheckout: async (planType, successUrl, cancelUrl) => {
        return await request("/api/subscriptions/create-checkout", {
            method: "POST",
            body: JSON.stringify({
                plan_type: planType,
                success_url: successUrl,
                cancel_url: cancelUrl,
            }),
        });
    },

    upgradeSubscription: async (newPlanType) => {
        return await request("/api/subscriptions/upgrade", {
            method: "POST",
            body: JSON.stringify({
                new_plan_type: newPlanType,
            }),
        });
    },

    cancelSubscription: async () => {
        return await request("/api/subscriptions/cancel", {
            method: "POST",
        });
    },

    getCurrentSubscription: async () => {
        return await request("/api/subscriptions/current", {
            method: "GET",
        });
    },
};
