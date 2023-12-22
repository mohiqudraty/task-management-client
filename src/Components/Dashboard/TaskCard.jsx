/* eslint-disable no-unused-vars */
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosPublic from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useGetTasks from "../../Hooks/useGetTasks";
import { BiSolidEdit } from "react-icons/bi";

const TaskCard = ({task}) => {
    const {  refetch } = useGetTasks();
    const axiosPublic = useAxiosPublic()
    const {_id,title,description,status,priority,deadline,userEmail} = task || {}
    // console.log(Object.keys(task).join(','));


// update task -----


// delete task ----
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
    <div className="flex justify-between items-center">
    <p><span className="p-1 rounded-sm text-xs bg-slate-600">{status}</span></p>
    <p><span className="p-1 rounded-sm text-xs bg-red-400">{priority}</span></p>
    </div>
    <p>{deadline}</p>
  {/* action and more  */}
  <div className="flex justify-between">
      {/* update and delete  */}
      <div className="flex gap-1">
    <button onClick={handleDelete}><RiDeleteBinLine /></button>
    <button onClick={handleDelete}><BiSolidEdit /></button>
    </div>
    {/* action  */}
    <div className="flex gap-1">
    <button >Start</button>
    <button >Done</button>
    </div>
  </div>
  </div>
    );
};

export default TaskCard;