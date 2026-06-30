import Image from "next/image";
import heroImg from "@/public/images/hero-1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <Image
        src={heroImg}
        alt="hero-image"
        className="w-full h-110 md:h-150 lg:h-187.5 object-cover"
      />
      <div className="absolute inset-0 bg-black/5  flex items-center justify-center ">
        <div className="text-center text-white p-6">
          <h1 className="text-3xl md:text-7xl font-bold  mb-4">
            استایل خاص ,انتخاب هوشمندانه
          </h1>
          <p className="text-sm md:text-lg mb-6">
            جدیدترین کالکشن لباس زنانه و مردانه با کیفیتی که شایسته استایل شماست
          </p>
          <Link
            href="#"
            className="bg-gradient from-[#b6ff00] to-[#ffbe0b] text-white px-6 py-2 rounded-md text-lg hover:bg-transparent hover:border hover:border-[#b6ff00] hover:text-[#b6ff00] transition-all duration-400 "
          >
            محصولات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
