const Features = () => {
    return (
        <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Simplify Task Management</h2>
            <p className="text-gray-600 mb-12">
            Our platform aims to revolutionize the way you manage tasks. Expect seamless task creation, intuitive organization, and effortless collaboration within your teams.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 mt-12">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-blue-600 mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4">Task Creation</h3>
                <p className="text-gray-600 mb-4">
                  Users can create tasks with titles, descriptions, deadlines, and priorities.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-blue-600 mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4">Task Management</h3>
                <p className="text-gray-600 mb-4">
                  Efficiently manage tasks with drag-and-drop functionality across different lists.
                </p>
              </div>
            </div>
  
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-blue-600 mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4">User Authentication</h3>
                <p className="text-gray-600 mb-4">
                  Secure logins, registrations, and profile management for users.
                </p>
              </div>
            </div>
  
            {/* Add more features in a similar format */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;