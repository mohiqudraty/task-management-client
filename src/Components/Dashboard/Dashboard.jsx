


const Dashboard = () => {
  

  return (
    <div className="w-3/4 ml-[25%] bg-gray-200 p-4">
    <h2 className="text-xl font-bold mb-4">Welcome to Your Dashboard</h2>
    <div className="flex flex-wrap gap-4">
      {/* Sample Cards */}
      <div className="w-1/3 p-4 bg-white shadow rounded">
        <h3 className="text-lg font-semibold mb-2">Tasks</h3>
        <p className="text-gray-600">
          You have 5 tasks pending. Get started!
        </p>
      </div>

      <div className="w-1/3 p-4 bg-white shadow rounded">
        <h3 className="text-lg font-semibold mb-2">Calendar</h3>
        <p className="text-gray-600">
          Upcoming events and appointments.
        </p>
      </div>

      <div className="w-1/3 p-4 bg-white shadow rounded">
        <h3 className="text-lg font-semibold mb-2">Analytics</h3>
        <p className="text-gray-600">
          Visualize your data and trends.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
