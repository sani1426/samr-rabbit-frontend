import ShowImage from "../ui/ShowImage";

const selectedProduct = {
  name: "تیشرت آستین بلند حرارتی (بافت وافلی)",
  description:
    "با این تیشرت حرارتی آستین بلند که از پنبه نرم با بافت وافلی ساخته شده، گرم بمانید. ایده‌آل برای پوشیدن لایه‌ای در ماه‌های سرد سال؛ طراحی جذب آن تناسب اندام راحت و گرمی را تضمین می‌کند.",
  price: 27.99,
  discountPrice: 22.99,
  countInStock: 20,
  sku: "LST-THR-009",
  category: "Top Wear",
  brand: "Winter Basics",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["زغالی", "سبز", "سرمه‌ ای"],
  collections: "Winter Essentials",
  material: "Cotton",
  gender: "Men",
  images: [
    {
      url: "https://picsum.photos/500/500?random=7",
      altText: "Long-Sleeve Thermal Tee Front View",
    },
    {
      url: "https://picsum.photos/500/500?random=9",
      altText: "Long-Sleeve Thermal Tee Front View",
    },
  ],
  rating: 4.4,
  numReviews: 18,
};

const ProductDetails = () => {
  const mapColor = (color) => {
    switch (color) {
      case "زرد":
        return "yellow";
        break;
      case "سرمه ای":
        return "navy blue";
        break;
      case "سبز تیره":
        return "dark green";
        break;
      case "زغالی":
        return "black";
        break;
      case "آبی":
        return "blue";
        break;
      case "قرمز":
        return "red";
        break;
      case "صورتی":
        return "pink";
        break;
      case "نارنجی":
        return "orange";
        break;
      case "نقره ای":
        return "silver";
        break;
      case "زرشکی":
        return "barberry";
        break;
      case "مشکی":
        return "black";
        break;
      case "جین تیره سنگشور":
        return "dark blue";
        break;
      case "آبی روشن":
        return "sky";
        break;
      case "خاکستری":
        return "gray";
        break;
      case "سفید":
        return "white";
        break;
      case "زیتونی":
        return "olive";
        break;
      case "طوسی":
        return "gray";
        break;
      case "سبز":
        return "green";
        break;
      case "قهوه ای":
        return "gray";
        break;
      default:
        return "yellow";
    }
  };
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <ShowImage images={selectedProduct.images} />

          {/* right section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-600 mb-2">
              {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">رنگبندی :</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    style={{
                      backgroundColor: mapColor(color),
                      filter: "brightness(0.5)",
                    }}
                    key={index}
                    className="w-8 h-8 rounded-full border text-white"
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">سایز بندی :</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size, index) => (
                  <button className="px-4 py-2 rounded border" key={index}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">تعداد :</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  +
                </button>
              </div>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded w-full mb-4">
              اضافه به سبد خرید
            </button>
            <div className="mb-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4 ">مشخصات :</h3>
              <table className="w-full text-left text-sm text-gray-700 ">
                <tbody>
                  <tr>
                    <td className="py-1">برند</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">متریال :</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
