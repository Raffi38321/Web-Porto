import type React from "react";

type t = {
  children: React.ReactNode;
  link: string;
};

const IconComp = ({ children, link }: t) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border-2 border-white hover:text-black hover:bg-[#FF4F00] transition"
    >
      {children}
    </a>
  );
};

export default IconComp;
