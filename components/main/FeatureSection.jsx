import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2"


const FeatureSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center ">
                <div className="p-4 rounded-full mb-4">
                    <HiShoppingBag className="text-xl" />
                </div>
                <h4 className="tracking-tighter">ارسال رایگان</h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    تمام سفارشات بالای 2.000.000 تومان رایگان می باشد
                </p>
            </div>
            <div className="flex flex-col items-center ">
                <div className="p-4 rounded-full mb-4">
                    <HiArrowPathRoundedSquare className="text-xl" />
                </div>
                <h4 className="tracking-tighter">10 روز مهلت تست</h4>
                <p className="text-gray-600 text-sm tracking-tighter">
        ضمانت بازگشت وجه
                </p>
            </div>
            <div className="flex flex-col items-center ">
                <div className="p-4 rounded-full mb-4">
                    <HiOutlineCreditCard className="text-xl" />
                </div>
                <h4 className="tracking-tighter">خرید امن</h4>
                <p className="text-gray-600 text-sm tracking-tighter">
              پوسه خرید 100 درصد ایمن
                </p>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection