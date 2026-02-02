import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../assets/images";

const Header = () => {
  const navList = [
    {
      label: "Categories",
      dropdown: null,
    },
    {
      label: "About Us",
      dropdown: ["News", "Careers", "Locations"],
    },
    {
      label: "Help center",
      dropdown: ["FAQ", "Contact us"],
    },
  ];

  return (
    <header className="w-full shadow-sm">
      <div className="containers py-6.75 flex items-center justify-between">
        <div className="flex gap-9 ">
          <h1>
            <a href="#">
              <img src={Logo} alt="Car Rental Logo" className="w-37.5" />
            </a>
          </h1>
          <nav className="flex items-center gap-8 text-black text-[18px] font-medium">
            {navList.map((item, index) => (
              <div key={index} className="relative group">
                <li className="flex cursor-pointer gap-1 text">{item.label}</li>

                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-4 bg-white shadow-xl rounded-2xl p-6 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="space-y-3 ">
                      {item.dropdown.map((subItem, i) => (
                        <li key={i} className="cursor-pointer">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="items-center gap-1 text-gray-700 font-medium">
            +1 855 420 0000
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            $
          </button>

          <button className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-full flex items-center gap-2">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
