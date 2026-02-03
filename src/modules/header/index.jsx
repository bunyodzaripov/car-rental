import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../assets/images";
import { NavItem, Button } from "../../components";

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
            <Button
              icon={faMoon}
              iconStyle={"text-[#555555] group-hover:text-black"}
              extraStyle={"w-14.5 h-14.5 group bg-[#F5F5F5]"}
            />
            <Button
              title={"Login"}
              icon={faArrowRightToBracket}
              extraStyle={"bg-[#299764] hover:bg-[#077743] px-7.5 py-4.5 gap-3"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
