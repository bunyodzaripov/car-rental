import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faChevronDown,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../assets/images";

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

          <nav className="flex items-center gap-3">
            {navList.map((item, index) => (
              <div key={index} className="relative group">
                <li className="flex items-center gap-2 cursor-pointer px-5 py-3 rounded-full transition-all duration-300 group-hover:bg-[#F5F5F5]">
                  <span>{item.label}</span>

                  {item.hasIcon && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </li>

                {item.dropdown && (
                  <div className="absolute left-0 mt-2.5 bg-white shadow-xl rounded-[20px] p-7 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <ul className="flex flex-col gap-3 whitespace-nowrap">
                      {item.dropdown.map((dItem, dIndex) => (
                        <li
                          key={dIndex}
                          className="cursor-pointer px-5 py-3  rounded-full transition-all duration-300 hover:bg-[#F5F5F5]"
                        >
                          {dItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
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
