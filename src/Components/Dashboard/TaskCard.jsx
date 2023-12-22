/* eslint-disable no-unused-vars */
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosPublic from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useGetTasks from "../../Hooks/useGetTasks";
import { BiSolidEdit } from "react-icons/bi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { data } from "autoprefixer";

const TaskCard = ({task}) => {
    const {user} = useAuth()
    const [showForm, setShowForm] = useState(false);
    const {  refetch } = useGetTasks();
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const {_id,title,description,status,priority,deadline,userEmail} = task || {}
    // console.log(Object.keys(task).join(','));

//   update task 
const onSubmit = (data) => {
    const taskData = {
        ...data,
        userEmail: user?.email,
        status: 'Pending'
      };
    console.log(data);
    axiosPublic.put(`/api/task-update?id=${_id}`, taskData)
    .then(res => {
        console.log(res.data);
        setShowForm(!showForm)
        if(res.data.modifiedCount > 1){
            
            toast.success("Task Update Successful!")
            
        }
        refetch()
    })

  };


  const handleStatusUpdate = (status) => {
    axiosPublic.put(`/api/task-updateStatus?id=${_id}`, { status: status })
      .then((res) => {
        console.log(res.data);
        if(res.data.modifiedCount > 1){
            
            toast.success(`Task ${status} Update`)
            
        }
        refetch(); 
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });
  };



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
    <button onClick={() => setShowForm(!showForm)} ><BiSolidEdit /></button>

{/* form  */}
{showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-black p-10">
          <div className=" space-y-4">
            <input
              {...register('title', { required: true })}
              type="text"
              defaultValue={title}
              placeholder="Task Title"
              className="border rounded p-2 w-full"
            />
            {errors.title && <span className='text-red-500'>Title is required</span>}


            <textarea
              {...register('description', { required: true })}
              placeholder="Task Description"
              defaultValue={description}
              className="border rounded p-2 w-full"
            />
{errors.description && <span className='text-red-500'>Description is required</span>}
            <input
              {...register('deadline', { required: true })}
              type="date"
              defaultValue={data}
              className="border rounded p-2 w-full"
            />

            <select {...register('priority')}  defaultValue={priority} className="border rounded p-2">
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <div className="flex justify-center items-center gap-5"><input
              type="submit"
              className="bg-green-500  cursor-pointer text-white py-2 px-4 rounded hover:bg-green-600"
            value={'Add'}/>
              <button onClick={() => setShowForm(!showForm)} className="bg-yellow-600  cursor-pointer text-white py-2 px-4 rounded hover:bg-yellow-800">Close</button></div>
            
          </div>
        </form>
      )}

    </div>
    {/* action  */}
    <div className="flex gap-1">
      {status === 'Pending' && (
        <button onClick={() => handleStatusUpdate('In Progress')} className="p-1 rounded-sm bg-gray-700">
          Start
        </button>
      )}
      {status === 'In Progress' && (
        <button onClick={() => handleStatusUpdate('Completed')} className="p-1 rounded-sm bg-yellow-700">
          Done
        </button>
      )}
      {status === 'Completed' && (
        <button onClick={() => handleStatusUpdate('Completed')} className="p-1 rounded-sm bg-green-700">
          Completed
        </button>
      )}
    </div>
  </div>
  </div>
    );
};

export default TaskCard;