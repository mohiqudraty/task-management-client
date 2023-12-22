import { Link, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { FaGithub } from "react-icons/fa";


const Register = () => {
  const { createUser, registerWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (password.length < 6) {
      return toast.error("password should be 6 character");
    }

    const hasCapitalLetter = /(?=.*?[A-Z])/.test(password);
    const hasSpecialCharacter = /(?=.*?[#?!@$%^&*-])/.test(password);

    if (!hasCapitalLetter) {
      toast.error("Password must contain one uppercase letter.");
      return;
    }
    if (!hasSpecialCharacter) {
      toast.error("Password must contain one special character");
      return;
    }
    const toastId = toast.loading("Loading...");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const registeredUser = result.user;
        updateProfile(registeredUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("User Registration Success", { id: toastId });
            navigate("/dashboard/task");
          })
          .catch((err) => {
            toast.success(
              `already hav an account Please login${err.message} `,
              {
                id: toastId,
              }
            );
            navigate("/login");
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleRegister = () => {
    registerWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Google SignIn Success");
        navigate("/dashboard/task");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      create an account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 max-w">
        Or <br />
        <Link to={'/login'} className="font-medium text-blue-600 hover:text-blue-500">
          
          Sign in to your account
        </Link>
      </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleRegister} >
{/* name  */}
      <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input id="name" name="name" type="text" autoComplete="text" required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your Name" />
            </div>
          </div>
          {/* Photo url  */}
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <div className="mt-1">
              <input id="photo" name="photo" type="text" autoComplete="text" required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your Photo Url" />
            </div>
          </div>
          {/* email  */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input id="email" name="email" type="email" autoComplete="email" required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email address" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input id="password" name="password" type="password" autoComplete="current-password" required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password" />
            </div>
          </div>
          {/* submit button  */}
          <div>
            <button type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Register
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div>
            <button onClick={handleGoogleRegister}
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                  alt="" />
                  <FaGithub className="w-16 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
