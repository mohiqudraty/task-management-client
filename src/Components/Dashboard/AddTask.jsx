import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxios';
import useGetTasks from '../../Hooks/useGetTasks';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

const AddTask = () => {
    const {user} = useAuth()
    const {refetch} = useGetTasks()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
  const [showForm, setShowForm] = useState(false);

//   post task 
  const onSubmit = (data) => {
    const taskData = {
        ...data,
        userEmail: user?.email,
        status: 'Pending'
      };
    console.log(data);
    axiosPublic.post('/api/task-post', taskData)
    .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
            setShowForm(!showForm)
            toast.success("Task Add Successful!")
            
        }
        refetch()
    })

  };

  return (
    <div className="mt-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Hide Form' : 'Add Task'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className=" space-y-4">
            <input
              {...register('title', { required: true })}
              type="text"
              placeholder="Task Title"
              className="border rounded p-2 w-full"
            />
            {errors.title && <span className='text-red-500'>Title is required</span>}


            <textarea
              {...register('description', { required: true })}
              placeholder="Task Description"
              className="border rounded p-2 w-full"
            />
{errors.description && <span className='text-red-500'>Description is required</span>}
            <input
              {...register('deadline', { required: true })}
              type="date"
              className="border rounded p-2 w-full"
            />

            <select {...register('priority')} className="border rounded p-2">
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <input
              type="submit"
              className="bg-green-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-green-600"
            value={'Add'}/>
              
            
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTask;
