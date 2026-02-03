import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      <div className="flex items-center gap-2 cursor-pointer px-5 py-3 rounded-full transition-all duration-300 group-hover:bg-[#F5F5F5]">
        <span>{item.label}</span>

        {item.hasIcon && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="transition-transform duration-300 group-hover:rotate-180"
          />
        )}
      </div>

      {item.dropdown && (
        <div className="absolute z-50 left-0 mt-2.5 bg-white shadow-xl rounded-[20px] p-7 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul className="flex flex-col gap-3 whitespace-nowrap">
            {item.dropdown.map((dItem, index) => (
              <li
                key={index}
                className="cursor-pointer px-5 py-3 rounded-full transition-all duration-300 hover:bg-[#F5F5F5]"
              >
                {dItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavItem;
