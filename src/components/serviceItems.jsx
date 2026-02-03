const ServiceItems = ({ item }) => {
  return (
    <div className="bg-[#F5F5F5] group hover:bg-[#299764] w-147.5 rounded-[20px] px-8 py-10 flex flex-col justify-between transition-all duration-300">
      <div className="flex items-start justify-between">
        <h3 className="text-[32px] w-[288px] group-hover:text-white font-medium leading-[100%] whitespace-pre-line transition-all duration-300">
          {item.title}
        </h3>
        <img className="w-15" src={item.icon} alt={item.title} />
      </div>

      <p className="text-[#555555] leading-6 w-88.5 mt-2.5 group-hover:text-white transition-all duration-300">
        {item.description}
      </p>
    </div>
  );
};

export default ServiceItems;
