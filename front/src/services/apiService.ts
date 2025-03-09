import apiClient from "@/axios";

class ApiService {
    getUsers() {
        return apiClient.get("/users");
    }
}

export default new ApiService();
