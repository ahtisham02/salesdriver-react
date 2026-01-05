import { request } from "./api";

export const userService = {
    getCurrentUser: async () => {
        return await request("/api/users/me", {
            method: "GET",
        });
    },

    updateCurrentUser: async (userData) => {
        return await request("/api/users/me", {
            method: "PUT",
            body: JSON.stringify(userData),
        });
    },

    deleteCurrentUser: async () => {
        return await request("/api/users/me", {
            method: "DELETE",
        });
    },
};
