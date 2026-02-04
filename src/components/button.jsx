import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ title, icon, iconStyle, extraStyle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[18px] text-white font-medium cursor-pointer rounded-full flex items-center justify-center transition duration-300 ${extraStyle} `}
    >
      {title && title}
      {icon && <FontAwesomeIcon icon={icon} className={iconStyle} />}
    </button>
  );
};

export default Button;
