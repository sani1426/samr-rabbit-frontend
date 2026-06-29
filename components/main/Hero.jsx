import Image from "next/image";
import heroImg from "@/public/images/hero-image.png"

const Hero = () => {
  return (
    <section className="">
      <Image
        src={heroImg}
        alt="hero-image"
        className="w-full h-[440px] md:h-[600px] lg:h-[750px] object-cover"
      />
      {/* <div className="absolute inset-0 bg-black  flex items-center justify-center ">
        <div className="text-center text-white"></div> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
