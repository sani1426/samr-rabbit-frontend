import backendApi from "@/common/BackendApi";
import axios from "axios";

const appReducer = (state, action) => {
  switch ((action.type)) {
    case REGISTER_USER:
      async () => {
        const response = await axios.post(backendApi.register.url, {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        });
        if (response.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(user, token);
          return {
            ...state,
            user: response.data,
            token: response.data.token,
            isAuthenticated: true,
          };
        } else {
          console.log(response.message);
          return {
            ...state,
            isAuthenticated: false,
          };
        }
      };
      // const create = async (name , email , password) => {
      //       const response = await axios.post(backendApi.register.url, {
      //         name,
      //         email,
      //         password,
      //       });
      //       if (response.success) {
      //         localStorage.setItem("token", response.data.token);
      //         localStorage.setItem("user", JSON.stringify(response.data));
      //         console.log(user, token);
      //         return {
      //             ...state ,
      //             user : response.data ,
      //             token : response.data.token ,
      //             isAuthenticated : true ,
      //         };
      //       } else {
      //         console.log(response.message);
      //         return false;
      //       }
      // }
      break;

    default:
      break;
  }
};

export default appReducer;
