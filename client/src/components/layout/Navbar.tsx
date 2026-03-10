import { Link, useLocation } from 'react-router-dom';
import TopContactBar from './ContactBar';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="w-full">
      {isHomePage && <TopContactBar />}

      <nav className="flex items-center justify-between w-full px-10 py-4 bg-black/40">
        <div className="flex-shrink-0">
          <img 
            src="/symphony-logo.png" 
            alt="Logo" 
            className="h-12 w-auto"
          />
        </div>

        <ul className="flex items-center gap-8 list-none m-0 p-0">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>

      <div className="flex-shrink-0">
        <Link 
          to="/become-a-member" 
          className="bg-[#fbbd1d] hover:bg-yellow-500 text-black font-extrabold py-4 px-10 rounded-full text-sm inline-block transition-colors"
        >
          Become a member
        </Link>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;