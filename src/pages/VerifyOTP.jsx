/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Background from "../assets/images/background.png";
import { Form, BackgroundImage } from "../components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import TextField from "../components/TextField";

function verifyOTP() {
   const [remainingTime, setRemainingTime] = useState(20);
   const [isTimerRunning, setIsTimerRunning] = useState(false);

   useEffect(() => {
      const timer = setInterval(() => {
         setRemainingTime((prevTime) => {
            if (prevTime === 0) {
               clearInterval(timer);
               setIsTimerRunning(false);
               return 0;
            } else {
               return prevTime - 1;
            }
         });
      }, 1000);
      return () => clearInterval(timer);
   }, []);

   const handleResendOTP = () => {
      setRemainingTime(20);
      setIsTimerRunning(true);
   };

   function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
      return `${formattedMinutes}:${formattedSeconds}`;
   }
   return (
      <BackgroundImage imageUrl={Background} className={"flex items-center justify-center"}>
         <Form
            heading={"OTP Verification"}
            subHeading={"Enter the code we sent to your email"}
            style={{ textAlign: "center" }}
            verifyOTP={true}
         >
            <div>hello</div>
            <div>{formatTime(remainingTime)}</div>
            <div className="flex justify-center space-x-4 mt-4">
               {[...Array(6)].map((_, index) => (
                  <TextField
                     key={index}
                     placeholder=""
                     maxLength={1}
                     style={{ width: "25px", height: "25px", textAlign: "center" }}
                  />
               ))}
            </div>
            <Link to="/" className="w-full">
               <Button title="Submit" colorBg="bg-primary-90" />
            </Link>
            <div className="mt-4 w-full">
               <Button title="Resend OTP" colorBg="bg-primary-90" onClick={handleResendOTP} />
            </div>
         </Form>
      </BackgroundImage>
   );
}

export default verifyOTP;
