/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function Button({ title, onClick, colorBg }) {
   return (
      <button
         className={`w-full text-white text-[0.7rem] p-[6px] font-medium rounded-sm ${colorBg}`}
         onClick={onClick}
      >
         {title}
      </button>
   );
}

Button.propTypes = {
   title: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
};

export default Button;
