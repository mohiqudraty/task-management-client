import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxios";

const Benefit = () => {
    const axiosPublic = useAxiosPublic()
    const [userTypes, setUserTypes] = useState([])
    useEffect(()=> {
        axiosPublic.get('/api/benefits')
        .then(res => {
            setUserTypes(res.data)
        })
    },[axiosPublic])
    return (
        <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Who Benefits from Our Platform?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userTypes.map((userType) => (
              <div key={userType._id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <img
                  src={userType.imageUrl}
                  alt={userType.type}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{userType.type}</h3>
                <p className="text-gray-600 text-center">{userType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Benefit;

