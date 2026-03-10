const AboutUs = () => {
  const aboutparagraph1 = "Symphony Music Club is the official music community of JAIN FET-JU, bringing together passionate singers, musicians, and performers who share a love for music. Our goal is to create a platform where talent can shine, creativity can flourish, and students can connect through the power of music."

  const aboutparagraph2 = "From live performances and jam sessions to campus events and collaborations, Symphony provides opportunities for artists to showcase their skills, grow as performers, and create unforgettable musical experiences."

  const aboutparagraph3 = "At Symphony, we believe music is more than just sound, it is expression, passion, and a way to bring people together."
  
  return (
    <section className="min-h-screen bg-black text-white grid grid-cols-1 md:grid-cols-2 items-center font-sans">
    
      <div className="w-full h-full p-10 md:p-20 flex items-center justify-center">
        <img 
          src="https://placehold.co/800x800/222/555?text=mic photo" 
          alt="Microphone" 
          className="max-w-full h-auto object-cover rounded-lg shadow-2xl shadow-purple-500/10"
        />
      </div>

      {/* logo watermark */}
      <div 
        className="relative p-10 md:p-20 md:pl-0 h-full flex flex-col justify-center bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/symphony-logo-watermark.png')", backgroundSize: '40%' }}
      >
        <h2 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-10">
          <span className="text-[#fbbd1d]">About Us</span>
        </h2>

        <div className="space-y-6 text-base md:text-lg text-white opacity-90 leading-relaxed max-w-xl">
          <p>
            {aboutparagraph1}
          </p>
          <p>
            {aboutparagraph2} 
          </p>
          <p>
            {aboutparagraph3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;