
const checkout = {
  _id: "6282",
  createAt: "2023-04-01T12:00:00Z",
  checkoutItems: [
    {
      productId: "6282",
      name: "jacket",
      color: "Blue",
      size: "XL",
      price: 200,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "5642",
      name: "T-shirt",
      color: "Red",
      size: "L",
      price: 130,
      quantity: 3,
      image: "https://picsum.photos/150?random=3",
    },
  ],
  shippingAddress: {
    address: "خیابان 43 بلوک 29",
    city: "تهران",
    country : "ایران" ,
    postalCode: "123456789",
    phone: "09123456789",
  },
  paymentMethod: "Cash on Delivery",
  paymentStatus: "Pending",
};

const page = () => {
  const calculateEstimatedDelivery = (createdAt) => {
   const orderDate = new Date(createdAt);
   orderDate.setDate(orderDate.getDate() + 10);
   return [orderDate.toLocaleDateString()];
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
        <h1 className="text-4xl font-bold text-center text-emerald-700">ممنون از خرید شما!</h1>
        {
            checkout && (
                <div className="p-6 rounded-lg border">
                    <div className="flex justify-between mb-20">
                        {/* order Id & date */}
                        <div className="">
                            <h2 className="text-xl font-semibold">شماره سفارش: {checkout._id}</h2>
                            <p className="text-gray-500">تاریخ سفارش: {new Date(checkout.createAt).toLocaleDateString()}</p>
                        </div>
                        {/* Estinated Delivery  */}
                        <div className="">
                         <p className="text-emerald-700 text-sm">
                        تاریخ ارسال : {calculateEstimatedDelivery(checkout.createAt)}
                         </p>
                            </div>
                    </div>
                    {/* order Items */}
                    <div className="mb-20">
                      {
                        checkout.checkoutItems.map((item, index) => (
                          <div key={index} className="flex items-center mb-4">
                              <img src={item.image} alt="" className="w-16 h-16 object-cover rounded-md mr-4" />
                              <div className="">
                                <h4 className="text-md font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-500">
                                  {item.color} | {item.size}
                                </p>
                              </div>
                              <div className="mr-auto text-right">
                                <p className="text-md">{item.price.toLocaleString()}  تومان</p>
                                <p className="text-sm text-gray-500">{item.quantity} عدد</p>
                              </div>
                          </div>
                        ))
                      }
                    </div>
                    {/* payment & delivery information */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="">
                        <h4 className="text-lg font-semibold mb-2">روش پرداخت:</h4>
                        <p className="text-gray-600">پرداخت در محل</p>
                      </div>
                      {/* delivery information */}
                      <div className="">
                        <h4 className="text-lg font-semibold mb-2">آدرس تحویل گیرنده</h4>
                        <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                        <p className="text-gray-600">{checkout.shippingAddress.city}, {" "}{checkout.shippingAddress.country}</p>
                      </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default page