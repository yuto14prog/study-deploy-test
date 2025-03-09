import axios from "axios";

const apiClient = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
    timeout: 5000,
    proxy: false
});

export default apiClient;
