const coreTeamData = [
  {
    name: 'SATHYA',
    role: 'CLUB LEAD',
    imageUrl: 'https://placehold.co/400x400/333/666?text=Sathya',
  },
  {
    name: 'AISHWAR',
    role: 'CLUB CO-LEAD',
    imageUrl: 'https://placehold.co/400x400/333/666?text=Aishwar',
  },
  {
    name: 'Dr. Sneha',
    role: 'Faculty Incharge',
    imageUrl: 'https://placehold.co/400x400/333/666?text=Dr.+Sneha',
  },
];

const Team = () => {
  return (
    <section 
      className="min-h-screen bg-black text-white relative px-10 md:px-20 py-24 bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/111/444?text=Background')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase text-[#fbbd1d] leading-none tracking-tight mb-16">
          Meet the team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {coreTeamData.map((member, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center text-center shadow-2xl"
            >
              <div className="w-full aspect-square bg-zinc-800 rounded-xl overflow-hidden mb-6">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-zinc-300 uppercase tracking-widest">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;