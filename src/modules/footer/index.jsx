import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "../../assets/images";
import {
  Instagram,
  Facebook,
  WhatsApp,
  Twitter,
  TopArrow,
} from "../../assets/icons";
import { Button, FooterItems } from "../../components";

function Footer() {
  const footerLinks = [
    {
      title: "Main",
      links: [
        { label: "My Bookings", href: "#" },
        { label: "Reservation", href: "#" },
      ],
    },
    {
      title: "Categories",
      links: [
        { label: "Compact", href: "#" },
        { label: "Sports cars", href: "#" },
        { label: "Vans", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "News", href: "#" },
        { label: "Contact us", href: "#" },
      ],
    },
  ];

  const locations = [
    "2118 Thornridge Cir. Syracuse",
    "4140 Parker Rd. Allentown",
    "4517 Washington Ave.",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: WhatsApp,
    },
  ];

  return (
    <footer className="border-t border-[#E5E7EA] py-10">
      <div className="containers">
        <div className="grid grid-cols-5 gap-16 mb-12">
          <div>
            <h2 className="w-37.5 mb-5">
              <img src={Logo} alt="Logo" />
            </h2>
            <p className="text-[#555555] text-xs leading-5 w-60">
              Car rental offers a wide range of cars available for rent in
              Newark EWR Airport NJ. We pride ourselves in our customer service,
              and hassle-free renting experience.
            </p>
          </div>

          {footerLinks.map((item, index) => (
            <FooterItems key={index} item={item} />
          ))}

          <div>
            <h3 className="font-medium mb-4">Our Locations</h3>
            <ul className="space-y-2 text-[#555555] text-sm">
              {locations.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-black cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E7EA] pt-10 flex items-center justify-between">
          <div className="flex flex-col font-medium">
            <span>© 2022 Car rental</span>
            <a href="#" className="text-[#555555] hover:text-black transition ">
              Terms & Conditions
            </a>
          </div>

          <div className="flex gap-12 text-sm font-medium">
            <div>
              <h4 className="mb-2">Contact</h4>
              <p className="text-[#555555]">+1 855 420 0000</p>
              <p className="text-[#555555]">carrental@gmail.com</p>
            </div>

            <div>
              <h4 className="mb-2">Hours of operation</h4>
              <p className="text-[#555555]">8:00 - 21:00 Mon-Sat</p>
              <p className="text-[#555555]">9:00 - 15:00 Sundays</p>
            </div>

            <div>
              <h4 className="mb-2">Social network</h4>
              <div className="flex gap-2">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center justify-center"
                  >
                    <img src={item.icon} alt={item.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Button
            extraStyle={"w-17.5 h-17.5 bg-[#299764] hover:bg-[#077743]"}
            icon={faArrowUp}
            iconStyle={"w-[32px] h-[32px]"}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
