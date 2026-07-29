import backendApi from "@/common/BackendApi";
import axios from "axios";
import { toast } from "sonner";


const appReducer = async (state, action) => {
  switch ((action.type)) {
    case "REGISTER_USER":{
        const {data} = await axios.post(backendApi.register.url, {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        });
  
        if (!data.error) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.data));
          toast.success("ثبت نام با موفقیت انجام شد")
          return {
            ...state,
            user: data.data,
            token: data.token,
            isAuthenticated: true,
          };
        } else {
          console.log(data.message);
          toast.error("ثبت نام با خطا مواجه شد")
          return {
            ...state,
            isAuthenticated: false,
          };
        
      };}
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
