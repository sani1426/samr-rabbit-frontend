import Image from "next/image";

const Hero = () => {
  return (
    <section className="">
      <Image
        src="../../public/images/hero-image.png"
        alt="hero-image"
        className="w-full h-[440px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0  flex items-center"></div>
    </section>
  );
};

export default Hero;
