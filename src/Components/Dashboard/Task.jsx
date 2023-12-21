
import useGetTasks from '../../Hooks/useGetTasks';
import Loader from '../Loader/Loader';
import AddTask from './AddTask';
import TaskCard from './TaskCard';

const Task = () => {
  const { tasks,  isLoading, refetch } = useGetTasks();

  console.log(tasks);
if(isLoading){
  return <Loader></Loader>
}

refetch()

  return (
    <div className="container mx-auto py-8 pl-[25%]">
      <h2 className="text-3xl font-bold mb-6 text-center"><span className='pb-2 border-b-2 border-blue-500 border-double mb-5 '>Task Management</span></h2>
{/* add task  */}
<div className='my-2 w-40 mx-auto'><AddTask></AddTask></div>
      {/* Task List */}
     
        {/* card  */}
      <div className='space-y-5'>
      {
          tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard> )
        }
      </div>

    </div>
  );
};

export default Task;
