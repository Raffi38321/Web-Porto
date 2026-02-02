import React from "react";

type T = {
  placeholder: string;
  type: string;
  value: string;
  setValue: any;
  text: string;
  bawah?: boolean;
};

const InputComp = ({ placeholder, setValue, type, value, text, bawah }: T) => {
  return (
    <div className="flex flex-col w-full text-white">
      <label className="text-[20px] font-sora mb-4">{text}</label>
      <input
        className={`font-sora text-[24px] bg-[#D9D9D9] text-black rounded-2xl text-start px-5 py-2 ${bawah ? "h-24" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    </div>
  );
};

export default InputComp;
