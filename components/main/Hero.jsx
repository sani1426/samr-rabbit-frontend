import Image from "next/image";
import heroImg from "@/public/images/hero-1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src={heroImg}
        alt="hero-image"
        className="w-full h-110 md:h-150 lg:h-187.5 object-cover z-[-1]"
      />
      <div className="absolute inset-0 back-gradient z-10 flex items-center justify-center ">
        <div className="text-center text-white p-6 ">
          <h1 className="text-3xl md:text-7xl font-bold  mb-4">
            استایل خاص ,انتخاب هوشمندانه
          </h1>
          <p className="text-sm md:text-lg mb-6">
            جدیدترین کالکشن لباس زنانه و مردانه با کیفیتی که شایسته استایل شماست
          </p>
          <Link
            href="#"
            className=" px-6 py-2 rounded-md text-lg bg-transparent border border-[#b6ff00] text-[#b6ff00] hover:bg-[#b6ff00] hover:text-white transition-all duration-200 "
          >
            محصولات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
