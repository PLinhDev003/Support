/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Logo from "../assets/logo/logo.svg";
import styles from "../styles/Form.module.css";

function SigninForm({ heading, subHeading, children }) {
   // Add propType validation for 'heading'
   SigninForm.propTypes = {
      heading: PropTypes.string.isRequired,
      subHeading: PropTypes.string,
   };
   return (
      <div className={styles.background_form}>
         <form className="flex flex-col justify-center items-center text-primary-color w-[80%]">
            <img src={Logo} alt="logo" className="h-[60px]" />

            <h2 className="text-[1.3rem] font-bold mt-1 flex justify-center">{heading}</h2>
            <p className="text-xs mb-6 text-center">{subHeading}</p>

            {children}
         </form>
      </div>
   );
}

export default SigninForm;
