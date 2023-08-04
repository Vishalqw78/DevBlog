import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://bytelogs.onrender.com",
    headers:{
        authorization : `Bearer ${localStorage.getItem('token')}`
    }
});