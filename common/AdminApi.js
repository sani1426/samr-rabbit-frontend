
import { backendUrl } from "./BackendApi"

const adminApi = {
//  Admin Users Routes
    getAllUsers : {
        url : `${backendUrl}/admin/users` ,
        method : "get"
    },
    createNewUsers : {
        url : `${backendUrl}/admin/users` ,
        method : "post"
    },
    updateUserInfo : {
        url : `${backendUrl}/admin/users` ,
        method : "put"
    },
    deleteUser : {
        url : `${backendUrl}/admin/users` ,
        method : "delete"
    },
    // Admin Product routes
    getAllProducts : {
        url : `${backendUrl}/admin/products` ,
        method : "get"
    } ,
    //  Admin Orders Routes
    getAllOrders : {
        url : `${backendUrl}/admin/orders` ,
        method : "get"
    },
    updateOrderStatus : {
        url : `${backendUrl}/admin/orders` ,
        method : "put"
    },
    deleteOrder : {
        url: `${backendUrl}/admin/orders` ,
        method : "delete"
    }
}

export default adminApi