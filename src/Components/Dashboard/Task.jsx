// TaskPage.jsx

const Task = () => {
  // Sample tasks data for illustration
  const tasks = [
    { id: 1, title: 'Task 1: Create new feature', description: 'Description for Task 1', deadline: '2023-12-31', priority: 'High' },
    { id: 2, title: 'Task 2: Review designs', description: 'Description for Task 2', deadline: '2023-12-25', priority: 'Moderate' },
    { id: 3, title: 'Task 3: Update documentation', description: 'Description for Task 3', deadline: '2023-12-20', priority: 'Low' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Task Management</h2>

      {/* Task List */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-600 mb-2">{task.description}</p>
            <p className="text-gray-500 mb-2">Deadline: {task.deadline}</p>
            <p className="text-gray-500 mb-2">Priority: {task.priority}</p>
            {/* Add more task details or actions as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
