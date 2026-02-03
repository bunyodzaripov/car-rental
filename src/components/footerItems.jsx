const FooterItems = ({ item }) => {
  return (
    <div>
      <h3 className="font-medium mb-4">{item.title}</h3>
      <ul className="space-y-2 text-[#555555] text-sm">
        {item.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-black inline cursor-pointer transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItems;
