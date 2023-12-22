
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
    <div className="container mx-auto py-8 md:pl-[25%]">
      <h2 className="text-3xl font-bold mb-6 text-center"><span className='pb-2 border-b-2 border-blue-500 border-double mb-5 '>Task Management</span></h2>
{/* add task  */}
<div className='my-2 w-40 p-5 mx-auto'><AddTask></AddTask></div>
      {/* Task List */}
     
        <section className='p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        
          {/* card to-do  */}
      <div className='space-y-5 mb-5'>
      <h2 className='text-center font-semibold text-xl'>To-Do</h2>
      {
          tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard> )
        }
      </div>
          {/* card on-going  */}
          
      <div className='space-y-5 mb-5'>
      <h2 className='text-center font-semibold text-xl'>Ongoing</h2>
      {
          tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard> )
        }
      </div>
      
          {/* card completed  */}
      <div className='space-y-5 mb-5'>
      <h2 className='text-center font-semibold text-xl'>Completed</h2>
      {
          tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard> )
        }
      </div>

        </section>

    </div>
  );
};

export default Task;
