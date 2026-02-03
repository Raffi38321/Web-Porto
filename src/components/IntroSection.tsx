import IntroText from "./IntroText";

const IntroSection = () => {
  return (
    <div className="min-h-screen bg-[#D9D9D9] pt-24 px-11 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <IntroText>FullStack-Web</IntroText>

          <p className="font-sora text-[50px] md:text-[64px] font-bold leading-none border-black border-2 px-7 py-3 bg-[#0E4C92] text-white">
            &
          </p>
        </div>

        <IntroText>Game-Developer</IntroText>
      </div>

      <p className="font-sora text-[15px] lg:text-[20px] text-center max-w-[958px] mt-[70px]">
        I specialize in building modern web applications using React, Next.js,
        and the MERN Stack (MongoDB, Express, React, Node.js). I also develop
        interactive games using Godot, focusing on performance, scalability, and
        user experience.
      </p>
    </div>
  );
};

export default IntroSection;
