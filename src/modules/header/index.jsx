import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../assets/images";
import { NavItem } from "../../components";

const Header = () => {
  const navList = [
    {
      label: "Categories",
      dropdown: null,
      hasIcon: false,
    },
    {
      label: "About Us",
      dropdown: ["News", "Careers", "Locations"],
      hasIcon: true,
    },
    {
      label: "Help center",
      dropdown: ["FAQ", "Contact us"],
      hasIcon: true,
    },
  ];

  return (
    <header className="w-full shadow-sm">
      <div className="containers py-6.75 flex items-center justify-between font-medium text-black text-[18px]">
        <div className="flex gap-9 ">
          <h1>
            <a href="#">
              <img src={Logo} alt="Car Rental Logo" className="w-37.5" />
            </a>
          </h1>

          <nav>
            <ul className="flex items-center gap-3">
              {navList.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="font-semibold">+1 855 420 0000</div>

          <div className="flex gap-4">
            <button className="cursor-pointer w-14.5 h-14.5 group rounded-full bg-[#F5F5F5]">
              <FontAwesomeIcon
                icon={faMoon}
                className="text-[#555555] group-hover:text-black transition duration-300"
              />
            </button>

            <button className="cursor-pointer bg-[#299764] hover:bg-[#077743] transition duration-300 text-white px-7.5 py-4.5 rounded-full flex items-center gap-3">
              Login <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
