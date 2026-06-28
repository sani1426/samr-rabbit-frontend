import { RiDeleteBin3Line } from "react-icons/ri"


const CartContents = () => {
    const cartProduct = [
        {productId: 1 , name : "تی شرت" , size : "M" , color : "قرمز" , quantity : 1 , price : 15 , image: "https://picsum.photos/200?random=1"} ,
        {productId: 2 , name : "شلوار" , size : "L" , color : "آبی" , quantity : 3 , price : 30 , image: "https://picsum.photos/200?random=2"} ,
        {productId: 3 , name : "کفش" , size : "m" , color : "قرمز" , quantity : 2 , price : 18 , image: "https://picsum.photos/200?random=3"} ,
        {productId: 4 , name : "هودی" , size : "XL" , color : "مشکی" , quantity : 1 , price : 40 , image: "https://picsum.photos/200?random=4"} ,
        {productId: 5 , name : "شلوارک" , size : "XXL" , color : "صورتی" , quantity : 1 , price : 23 , image: "https://picsum.photos/200?random=5"} ,
    ]
  return (
    <div className="">
        {cartProduct.map(item => (
            <div key={item.productId} className="flex items-start justify-between py-4 border-b">
                    <div className="flex items-start">
                        <img src={item.image} alt={item.name} className="w-20 h-24 object-cover mr-4 rounded" />
                        <div>
                            <h3>{item.name}</h3>
                            <p className="text-sm text-gray-500">سایز : {item.size} | رنگ : {item.color}</p>
                            <div className="flex items-center mt-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                                <span className="mx-4">{item.quantity}</span>
                                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p>${item.price.toLocaleString()}</p>
                        <button><RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" /></button>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default CartContents