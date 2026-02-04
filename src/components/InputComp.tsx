import React from "react";

type T = {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  bawah?: boolean;
};

const InputComp = ({
  placeholder,
  setValue,
  type = "text",
  value,
  text,
  bawah,
}: T) => {
  return (
    <div className="flex flex-col w-full text-white">
      <label className="text-[18px] lg:text-[20px] font-sora mb-4">
        {text}
      </label>

      {bawah ? (
        <textarea
          className="font-sora text-[18px] lg:text-[20px] bg-[#D9D9D9] text-black rounded-2xl px-5 py-3 h-36 resize-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          className="font-sora text-[18px] lg:text-[20px] bg-[#D9D9D9] text-black rounded-2xl px-5 py-2"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
        />
      )}
    </div>
  );
};

export default InputComp;
