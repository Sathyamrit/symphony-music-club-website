const ContactBar = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white py-2 px-10 h-8 border-b border-gray-800">
      {/* contact info */}
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <img src="" alt="email-icon" className="w-4 h-4 bg-zinc-700" />
          <span className="text-sm font-medium">symphony.fetju@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="" alt="phone-icon" className="w-4 h-4 bg-zinc-700" />
          <span className="text-sm font-medium">(+91)xxx xxx xxxx</span>
        </div>
      </div>

      {/* socials */}
      <div className="flex gap-5 items-center">
        <a href="#" className="opacity-80 hover:opacity-100 transition">
          <img src="instagram-icon.png" alt="instagram" className="w-4 h-4" />
        </a>
        <a href="#" className="opacity-80 hover:opacity-100 transition">
          <img src="youtube-icon.png" alt="youtube" className="w-4 h-4" />
        </a>
        <a href="#" className="opacity-80 hover:opacity-100 transition">
          <img src="twitter-x-icon.png" alt="twitter-x" className="w-4 h-4" />
        </a>
        <a href="#" className="opacity-80 hover:opacity-100 transition">
          <img src="linkedin-icon.png" alt="linkedin" className="w-4 h-4" />
        </a>
      </div>
      
    </div>
  );
};

export default ContactBar;