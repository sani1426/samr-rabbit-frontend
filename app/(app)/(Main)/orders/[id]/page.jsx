import OrderDetails from "@/components/main/OrderDetails"


const page = async ({params}) => {
    const {id} = await params;
    let orderDetail = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethode: "online",
      shippingMethode: "express",
      shippingAddress: { city: "تهران", country: "ایران" },
      orderItems: [
        {
          productId: "1",
          name: "تست 1",
          quantity: 1,
          price: 120,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "تست 2",
          quantity: 3,
          price: 200,
          image: "https://picsum.photos/150?random=2",
        },
        {
          productId: "3",
          name: "تست 3",
          quantity: 1,
          price: 300,
          image: "https://picsum.photos/150?random=3",
        },
      ],
    };
  return (
    <OrderDetails order={orderDetail}/>
  )
}

export default page