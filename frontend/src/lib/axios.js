import axios from "axios";
console.log("MODE:", import.meta.env.MODE);
console.log("Base URL:", import.meta.env.VITE_API_BASE_URL);

const axiosInstance = axios.create({
	// baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
	baseURL: import.meta.env.VITE_API_BASE_URL,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
