import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
   return (
      <main className="">
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ForgotPassword />} />
            <Route path="/verifyOTP" element={<VerifyOTP />} />
            {/* <Route path="/" element={<Signin />} /> */}
         </Routes>
      </main>
   );
}

export default App;
