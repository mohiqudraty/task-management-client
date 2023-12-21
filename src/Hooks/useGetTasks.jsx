import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxios";

const useGetTasks = () => {
    
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: tasks = [], refetch, isLoading } = useQuery({
      queryKey: ["all-tasks"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/api/tasks?userEmail=${user?.email}`);
        return res?.data;
        
      },
    });
      return {tasks, refetch, isLoading}
};

export default useGetTasks;