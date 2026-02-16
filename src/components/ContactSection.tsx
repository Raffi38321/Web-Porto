import { useState } from "react";
import InputComp from "./InputComp";
import FocusSection from "./FocusSection";
const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handelSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <section className="dark-section  bg-[#222222]">
      <FocusSection style=" min-h-[700px] px-6 py-10 md:px-11 md:py-7 flex flex-col justify-center overflow-hidden">
        <p className="text-[40px] md:text-[60px] lg:text-[70px] font-sora font-extrabold text-white mb-0">
          LET'S WORK
        </p>
        <p className="text-[32px] md:text-[50px] lg:text-[64px] font-sora font-extrabold text-[#D9D9D9]">
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
          <button
            type="submit"
            onClick={handelSubmit}
            className="
            font-sora font-bold text-[20px] md:text-[24px]
            w-full mt-10
            py-4
          bg-[#FF4F00] text-white
            rounded-xl
            transition-all duration-300
           hover:bg-[#e64500] hover:scale-[1.02]
            active:scale-[0.98]
            shadow-md hover:shadow-lg
            "
          >
            SUBMIT
          </button>
        </form>
      </FocusSection>
    </section>
  );
};

export default ContactSection;
