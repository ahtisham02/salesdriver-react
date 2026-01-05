const BASE_URL = "https://salesdriver.site:6001";

const getHeaders = () => {
    const token = localStorage.getItem("access_token");
    const headers = {
        "Content-Type": "application/json",
    };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
};

export const request = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    const headers = getHeaders();

    const response = await fetch(url, {
        ...options,
        headers: {
            ...headers,
            ...options.headers,
        },
    });

    if (response.status === 204) {
        return null;
    }

    const data = await response.json();

    if (!response.ok) {
        let errorMessage = "Something went wrong";

        if (data.detail) {
            if (typeof data.detail === "string") {
                errorMessage = data.detail;
            } else if (Array.isArray(data.detail)) {
                // Handle FastAPI validation error format: [{msg: "..."}, ...]
                errorMessage = data.detail.map(err => err.msg || JSON.stringify(err)).join(", ");
            } else {
                errorMessage = JSON.stringify(data.detail);
            }
        } else if (data.message) {
            errorMessage = data.message;
        }

        if (errorMessage === "Invalid authentication token") {
            localStorage.removeItem("access_token");
            setTimeout(() => {
                window.location.href = "/signin";
            }, 3000);
        }

        const error = new Error(errorMessage);
        error.status = response.status;
        error.detail = data.detail;
        throw error;
    }

    return data;
};
