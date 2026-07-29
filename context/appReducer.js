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
          localStorage.setItem("token", await data.token);
          localStorage.setItem("user", await JSON.stringify(data.data));
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
      break;

    case "LOGIN_USER" :{
      const {data} = await axios.post(backendApi.login.url, {
        email: action.payload.email ,
        password: action.payload.password
      })
      if (!data.error){
        localStorage.setItem("token" , await data.token);
        localStorage.setItem("userInfo" , await JSON.stringify(data.data));
        toast.success("با موفقیت وارد شدید")
        return {
          ...state ,
          user : data.data ,
          token : data.token ,
          isLoggedIn : true ,
        }
      } else {
        console.log(data.message);
        toast.error("ورود با خطا مواجه شد")
        return {
          ...state ,
          isLoggedIn : false ,
        }
      }
    }
    break;
    default:
      break;
  }
};

export default appReducer;
