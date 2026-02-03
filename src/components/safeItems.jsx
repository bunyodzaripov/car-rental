const SafeItems = ({ title, icon }) => {
  return (
    <div className="bg-[#F5F5F5] group hover:bg-[#299764] w-50 rounded-2xl p-4 flex flex-col justify-between gap-7.5 items-end transition-all duration-300">
      <img src={icon} alt={title} />
      <p className="font-medium leading-5.5 group-hover:text-white transition-all duration-300">
        {title}
      </p>
    </div>
  );
};

export default SafeItems;
