import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 px-10 md:px-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x400/111/444?text=Footer+Background')" }}
      ></div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          

          <div>
            <h3 className="text-2xl font-bold mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-[#fbbd1d] font-bold block">About</Link></li>
              <li><Link to="/events" className="hover:text-[#fbbd1d] font-bold block">Events</Link></li>
              <li><Link to="/videos" className="hover:text-[#fbbd1d] font-bold block">Videos</Link></li>
              <li><Link to="/gallery" className="hover:text-[#fbbd1d] font-bold block">Gallery</Link></li>
              <li><Link to="/join" className="hover:text-[#fbbd1d] font-bold block">Join Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 font-serif">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="text-[#fbbd1d] text-xl" />
                <span className="font-bold">(+91)xxxxx xxxxx</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-[#fbbd1d] text-2xl" />
                <span className="font-bold">(+91)xxxxx xxxxx</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-[#fbbd1d] text-xl" />
                <span className="font-bold">symphony.fetju@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-8 mb-6">
          <a href="#" className="text-2xl text-[#fbbd1d]">Instagram</a>
          <a href="#" className="text-2xl text-[#fbbd1d]">Youtube</a>
          <a href="#" className="text-2xl text-[#fbbd1d]">X</a>
          <a href="#" className="text-2xl text-[#fbbd1d]">LinkedIn</a>
        </div>

        <div className="border-t border-zinc-700 w-full pt-6">
          <p className="text-xs text-zinc-500 text-center md:text-center">
            © 2026 Symphony Music Club. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;