const backendUrl = "https://sami-rabbit-backend.vercel.app/api";

const backendApi = {
    register : {
        url : `${backendUrl}/users/register` ,
        methode : "post" ,
        access : "Public" , 
    },
    login : {
        url : `${backendUrl}/users/login` ,
        methode : "post" ,
        access : "Public" , 
    },
    profile : {
        url : `${backendUrl}/users/profile` ,
        methode : "get" ,
        access : "Private" , 
    },
    createProduct : {
        url : `${backendUrl}/products` ,
        methode : "post" ,
        access : "Private/Admin" , 
    },
    updateProduct : {
        url : `${backendUrl}/products/:id` ,
        methode : "put" ,
        access : "Private/Admin" , 
    },
    deleteProduct : {
        url : `${backendUrl}/products/:id` ,
        methode : "delete" ,
        access : "Private/Admin" , 
    },
    getAllProducts : {
        url : `${backendUrl}/products` ,
        methode : "get" ,
        access : "Public" , 
    },
    getProductDetails : {
        url : `${backendUrl}/products/:id` ,
        methode : "get" ,
        access : "Public" , 
    },
    
}

export default backendApi;