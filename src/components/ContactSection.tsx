import React, { useState } from "react";
import InputComp from "./InputComp";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <section className="px-20 py-7 min-h-screen bg-[#222222]">
      <p className="text-[70px] font-sora font-extrabold text-white">
        LET'S WORK
      </p>
      <p className="text-[64px] font-sora font-extrabold text-[#D9D9D9]">
        TOGETHER
      </p>
      <form>
        <div className="flex flex-col lg:flex-row gap-5 mb-5">
          <InputComp
            value={name}
            setValue={setName}
            placeholder="Your Name"
            text="Name"
            type="text"
          />
          <InputComp
            value={email}
            setValue={setEmail}
            placeholder="Your@gmail.com"
            text="Email"
            type="email"
          />
        </div>
        <InputComp
          value={message}
          setValue={setMessage}
          placeholder="Messages"
          text="Message"
          type="text"
          bawah={true}
        />
      </form>
    </section>
  );
};

export default ContactSection;
