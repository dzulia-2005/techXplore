import {LoginSchema} from "./shcema";
import {Controller,useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
// import {signInSuccess} from "./utils/index";
import { LoginPayload } from "../../../../api/auth/index.types";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../../../react-query/mutation/auth";

type loginFormValues = LoginPayload["payload"];

const LoginFormDefaultValues:loginFormValues = {
  email:"",
  password:""
}



const LoginCard = () => {
  const navigate = useNavigate();

  const {control, handleSubmit ,formState:{errors}} =useForm<loginFormValues>({
    defaultValues:LoginFormDefaultValues,
    resolver:zodResolver(LoginSchema)
  })

  const {mutate:handleLogiIn} = useSignIn();

  const onSubmit = (LoginPayload: loginFormValues) => {
    handleLogiIn(
      { payload: LoginPayload },
      {
        onSuccess: () => {
          navigate("/home", { replace: true });
        },
        onError: () => {
          alert("Login Failed");
        },
      }
    );
  };
  

    return (
      <span className="bg-[#00adee]">
      <form
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mt-[5%]"
      >
        <h2 className="text-2xl font-bold mb-4">გამარჯობა</h2>
    
        {/* Email Field */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <input
              onChange={onChange}
              value={value}
              type="text"
              placeholder="მომხმარებელი"
              className="w-full p-3 mb-4 bg-gray-100 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        />
        {errors.email && (
          <p className="text-[#eb4949] mb-2">გთხოვთ შეიყვანოთ მომხმარებლის სახელი</p>
        )}
    
        {/* Password Field */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <input
              value={value}
              onChange={onChange}
              type="password"
              placeholder="პაროლი"
              className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
          )}
        />
        {errors.password && (
          <p className="text-[#eb4949] mb-2">გთხოვთ შეიყვანოთ პაროლი</p>
        )}
    
        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">დამახსოვრება</label>
          </div>
    
          <div className="text-center text-[#00adee] cursor-pointer">
            დაგავიწყდა პაროლი?
          </div>
        </div>
    
        {/* Submit Button */}
        <button
          className="w-full bg-[#00adee] text-white py-3 rounded-md"
          type="submit"
        >
          შესვლა
        </button>
    
        {/* Registration Link */}
        <div className="flex justify-center mt-4 text-[#00adee] cursor-pointer">
          რეგისტრაცია
        </div>
      </form>
    </span>
    
    );
  };
  
  export default LoginCard;
  