import { request } from "./api";

export const authService = {
    signup: async (userData) => {
        const data = await request("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(userData),
        });
        return data;
    },

    signin: async (credentials) => {
        const data = await request("/api/auth/signin", {
            method: "POST",
            body: JSON.stringify(credentials),
        });
        if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
        }
        return data;
    },

    refresh: async () => {
        const data = await request("/api/auth/refresh", {
            method: "POST",
        });
        if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
        }
        return data;
    },

    forgotPassword: async (email) => {
        return await request("/api/auth/forgot-password", {
            method: "POST",
            body: JSON.stringify({ email }),
        });
    },

    resetPassword: async (token, newPassword) => {
        return await request("/api/auth/reset-password", {
            method: "POST",
            body: JSON.stringify({ token, new_password: newPassword }),
        });
    },

    updatePassword: async (currentPassword, newPassword) => {
        return await request("/api/auth/update-password", {
            method: "POST",
            body: JSON.stringify({
                current_password: currentPassword,
                new_password: newPassword,
            }),
        });
    },

    verifyEmail: async (token) => {
        return await request(`/api/auth/verify-email?token=${token}`, {
            method: "GET",
        });
    },

    logout: () => {
        localStorage.removeItem("access_token");
    },

    isAuthenticated: () => {
        return !!localStorage.getItem("access_token");
    },
};
