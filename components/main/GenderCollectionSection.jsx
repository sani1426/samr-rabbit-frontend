import menCollectionImg from "@/public/images/mens-collection.png";
import womenCollectionImg from "@/public/images/women-collection.jfif";
import Image from "next/image";
import Link from "next/link";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
            <div className="relative flex-1">
                <Image src={menCollectionImg} alt="men-collection" className="w-full h-175 object-cover" />
                <div className="absolute bottom-8 right-8 bg-white/80 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">کالکشن مردانه</h2>
                    <Link href="/collection/all?gender=men" className="text-gray-900 underline">مشاهده</Link>
                </div>
            </div>

            <div className="relative flex-1">
                <Image src={womenCollectionImg} alt="women-collection" className="w-full h-175 object-cover" />
                <div className="absolute bottom-8 right-8 bg-white/80 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">کالکشن زنانه</h2>
                    <Link href="/collection/all?gender=women" className="text-gray-900 underline">مشاهده</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection