import Image from 'next/image';
import Link from 'next/link';
import featuredImg from "@/public/images/hero-2.png";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center bg-green-50 rounded-3xl">
        <div className="lg:w-1/2 p-8 text-center lg:text-right">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            استایل و آرامش
          </h2>
          <h2 className="text-xl lg:text-5xl font-bold mb-6">
            برای تمام نیازهای روزمره شما
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد
          </p>
          <Link
            href="/collection/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            مشاهده محصولات
          </Link>
        </div>

        {/* left section */}
        <div className="lg:w-1/2">
          <Image src={featuredImg} alt="featured-image" className="w-full h-full object-cover lg:rounded-tl-3xl lg:rounded-bl-3xl" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection