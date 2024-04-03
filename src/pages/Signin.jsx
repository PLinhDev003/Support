import Background from "../assets/images/background.png";
import BackgroundImage from "../components/BackgroundImage";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Button from "../components/Button";
import TextField from "../components/TextField";

const SignIn = () => {
   return (
      <div className="relative">
         <BackgroundImage imageUrl={Background} className={"flex items-center justify-center"}>
            <Form heading={"Welcome Back"} subHeading={"Please log in to continue"}>
               <div className="w-full">
                  <TextField
                     label="Email Address"
                     placeholder="Email Address"
                     name="email"
                     type="email"
                     required={true}
                  />
                  <TextField
                     label="Password"
                     placeholder="Password"
                     name="password"
                     type="password"
                     required={true}
                  />
                  <div className="flex text-[0.6rem] w-full justify-between mb-2 ">
                     <label htmlFor="save-login" className="flex justify-center items-center gap-1">
                        <input
                           className="accent-primary-color focus:accent-primary-color"
                           name="save-login"
                           id="save-login"
                           type="checkbox"
                        />
                        <span>Remember me</span>
                     </label>
                     <Link to={"/resetpassword"} className="hover:text-[#265902]">
                        Forgot password?
                     </Link>
                  </div>
                  <Button title="Log In" onClick={() => console.log("Hi")} />
                  <div className="w-full bg-[#DDE1E6] h-[0.8px] mt-3"></div>
                  <p className="flex gap-1 justify-center text-[0.6rem] mt-2">
                     No account yet?{" "}
                     <Link to={"/signup"} className="hover:text-[#265902]">
                        Sign Up
                     </Link>
                  </p>
               </div>
            </Form>
         </BackgroundImage>
      </div>
   );
};

export default SignIn;
