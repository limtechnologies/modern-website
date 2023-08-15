import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] border-1 text-primary bg-blue-gradient rounded-[10px]  ${styles} hover:bg-none hover:text-white hover:outline `}
  >
    Get Started
  </button>
);

export default Button;
