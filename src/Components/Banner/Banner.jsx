import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import video from '/time.mp4';

const Banner = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleExplore = () => {
    if (!user) {
      navigate('/login');
    }
  };

  return (
    <section className="relative h-screen lg:h-[560px] flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full h-full lg:min-h-96 w-full lg:w-auto absolute object-cover object-center"
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop>
        </video>
      </div>
      <div className="video-content space-y-5 z-50">
        <h1 className="font-light text-4xl lg:text-6xl"><span className='font-bold text-blue-600'>Welcome to</span> <br /> Task Management Platform</h1>
        <h3 className="font-light text-xl lg:text-3xl">Revolutionizing Task Management for Enhanced Productivity</h3>
        <button onClick={handleExplore} className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 lg:px-8 rounded-full font-semibold shadow-lg transition duration-300">
          Let&#39;s Explore
        </button>
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40 z-20"></div>
    </section>
  );
};

export default Banner;
