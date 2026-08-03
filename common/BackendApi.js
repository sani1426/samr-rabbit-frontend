const backendUrl = "https://sami-rabbit-backend.vercel.app/api";

const backendApi = {
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
};

export default backendApi;