const backendUrl = "https://sami-rabbit-backend.vercel.app/api";

const backendApi = {
  // auth
  register: {
    url: `${backendUrl}/users/register`,
    method: "post",
    access: "Public",
  },
  login: {
    url: `${backendUrl}/users/login`,
    method: "post",
    access: "Public",
  },
  profile: {
    url: `${backendUrl}/users/profile`,
    method: "get",
    access: "Private",
  },
  //  products
  createNewProduct: {
    url: `${backendUrl}/products`,
    method: "post",
    access: "Private/Admin",
  },
  updateProduct: {
    url: `${backendUrl}/products/:id`,
    method: "put",
    access: "Private/Admin",
  },
  deleteProduct: {
    url: `${backendUrl}/products/:id`,
    method: "delete",
    access: "Private/Admin",
  },
  getAllProducts: {
    url: `${backendUrl}/products`,
    method: "get",
    access: "Public",
  },
  getProductDetails: {
    url: `${backendUrl}/products`,
    method: "get",
    access: "Public",
  },
  getBestSeller: {
    url: `${backendUrl}/products/best-seller`,
    method: "get",
  },
  getNewArrivals: {
    url: `${backendUrl}/products/new-arrivals`,
    method: "get",
  },
  getSimilars: {
    url: `${backendUrl}/products/similar`,
    method: "get",
  },
  // Cart
  addToCart : {
    url : `${backendUrl}/cart` ,
    method : "post" ,
  },
  updateQuantity : {
    url : `${backendUrl}/cart` ,
    method : "put"
  },
  deleteFromCart : {
    url : `${backendUrl}/cart` ,
    method : "delete"
  },
  getCart : {
    url: `${backendUrl}/cart` ,
    method : "get"
  },
  mergeCart : {
    url : `${backendUrl}/cart/merge` ,
    method : "post"
  }
};

export default backendApi;