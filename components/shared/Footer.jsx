import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 ">
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">جدیدترین اخبار</h3>
          <p className="text-gray-500 mb-4">
            جزو اولین نفراتی باشید که در مورد محصولات وتخفیفات جدید با خبر می
            شوید
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            ثبت نام کنید و 10 درصد تخفیف بگیرید{" "}
          </p>

          <form className="flex flex-row-reverse">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="p-3 w-full text-sm border-t  border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              ثبت نام
            </button>
          </form>
        </div>
{/* shop links */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">فروشگاه</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                تی شرت مردانه
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                بلوز زنانه
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                شلوار مردانه
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                شلوار زنانه
              </Link>
            </li>
          </ul>
        </div>

{/* support links */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">پشتیبانی</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                قوانین
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600 transition-all">
                قابلیت ها
              </Link>
            </li>
          </ul>
        </div>

        {/* follow section */}
        <div>
            <h3 className="text-lg text-gray-800 mb-4">ما را دنبال کنید</h3>
            <div className="flex items-center space-x-4 mb-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <TbBrandMeta className="h-6 w-6 "/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <IoLogoInstagram className="h-6 w-6 "/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <RiTwitterXLine className="h-6 w-6 "/>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
