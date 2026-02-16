const Yapper = () => {
  return (
    <div className="gap-5 flex flex-col">
      <div className="flex flex-row">
        <p className="font-sora font-semibold text-[12px] md:text-[15px] border-black border-[3px] px-2 md:px-3 py-2 md:py-3">
          About
        </p>
        <p className="font-sora font-semibold text-[12px] md:text-[15px] border-black border-[3px] border-l-0 pl-3 md:pl-5 py-2 md:py-3 pr-7 md:pr-10 rounded-r-full bg-[#FF4F00]">
          Me
        </p>
      </div>
      <p className="font-sora font-semibold text-[25px]">Muhammad Raffi</p>
      <p className="font-sora text-[12px] md:text-[15px] font-light max-w-[695px]">
        I build modern, high-performance web applications using React, Next.js,
        and the MERN Stack (MongoDB, Express, React, Node.js). My focus is on
        creating scalable architectures, intuitive user experiences, and clean,
        maintainable code.
      </p>
      <p className="font-sora text-[12px] md:text-[15px] font-light max-w-[695px]">
        Beyond web development, I develop games using Godot, bringing ideas to
        life through interactive mechanics and engaging gameplay. I enjoy
        working across both web and game development to continuously learn,
        experiment, and build impactful digital experiences.
      </p>
    </div>
  );
};

export default Yapper;
