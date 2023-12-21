/* eslint-disable no-unused-vars */
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosPublic from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useGetTasks from "../../Hooks/useGetTasks";

const TaskCard = ({task}) => {
    const {  refetch } = useGetTasks();
    const axiosPublic = useAxiosPublic()
    const {_id,title,description,status,priority,deadline,userEmail} = task || {}
    // console.log(Object.keys(task).join(','));


    const handleDelete = () => {
        axiosPublic.delete(`/api/task-delete?id=${_id}`)
        .then(res => {
            console.log(res.data);
            refetch()
            if(res.data.deletedCount){
                toast.success('Task Deleted')
            }
        })
    }
    return (
  <div className="bg-blue-600 text-white p-5 rounded-sm">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p>{description}</p>
    <p>{status}</p>
    <p>{priority}</p>
    <p>{deadline}</p>
    <button onClick={handleDelete}><RiDeleteBinLine /></button>
  </div>
    );
};

export default TaskCard;