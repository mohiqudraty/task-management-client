import logo from '/tasks.png'
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
        <img className='w-12' src={logo} alt="logo" />
          <p>Copyright © 2023 - All right reserved 2023 SCC Technovision Inc.</p>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <FaLinkedin />
        <FaGithub />
        <FaFacebookSquare />
        </nav>
      </footer>
    );
  };
  
  export default Footer;