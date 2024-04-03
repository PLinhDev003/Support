import Background from "../assets/images/background.png";
import { Form, BackgroundImage } from "../components";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function ForgotPassword() {
   return (
      <BackgroundImage imageUrl={Background} className={"flex items-center justify-center"}>
         <Form
            heading={"Forgotten your password?"}
            subHeading={
               "There is nothing to worry about, we'll send you a message to help you reset your password."
            }
            style={{ textAlign: "center" }}
         >
            <TextField
               label="Email Address"
               placeholder="Email Address"
               name="email"
               type="email"
               required={true}
            />
            <Link to="/verifyOTP" className="w-full">
               <Button title="Send OTP" colorBg="bg-primary-90" />
            </Link>
         </Form>
      </BackgroundImage>
   );
}

export default ForgotPassword;
