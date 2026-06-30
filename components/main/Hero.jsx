import Image from "next/image";
import heroImg from "@/public/images/hero-1-text.png";

const Hero = () => {
  return (
    <section className="">
      <Image
        src={heroImg}
        alt="hero-image"
        className="w-full h-110 md:h-150 lg:h-187.5 object-cover"
      />
      {/* <div className="absolute inset-0 bg-black  flex items-center justify-center ">
        <div className="text-center text-white"></div> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
