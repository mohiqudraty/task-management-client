import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-management-server-alpha-rosy.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
