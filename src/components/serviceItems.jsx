import React from "react";

const ServiceItems = ({ item }) => {
  return (
    <div className="bg-[#F5F5F5] w-147.5 rounded-[20px] px-8 py-10 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <h3 className="text-[32px] w-[288px] font-medium leading-[100%] whitespace-pre-line">
          {item.title}
        </h3>
        <img className="w-15" src={item.icon} alt={item.title} />
      </div>

      <p className="text-[#555555] leading-6 w-88.5 mt-2.5">
        {item.description}
      </p>
    </div>
  );
};

export default ServiceItems;
