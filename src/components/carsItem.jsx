import { Car1, Car2, Car3, Car4 } from "../assets/icons";

const CarsItem = ({ item }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl px-6 py-7.5 flex flex-col group hover:bg-[#299764] transition duration-300">
      <div className="mb-4 group-hover:text-white">
        <h3 className="text-[24px] font-semibold group-hover:text-white transition duration-300">
          {item.name}
        </h3>
        <p className="text-[#555555] group-hover:text-white transition duration-300">
          {item.type}
        </p>
      </div>

      <div className="mb-4 flex-1 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-55 object-contain"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 font-medium text-base text-black group-hover:text-white">
        <div className="flex items-center gap-3">
          <img src={Car1} alt="user" />
          <span>{item.seats} Seats</span>
        </div>

        <div className="flex items-center gap-3">
          <img src={Car3} alt="gear" />
          <span>{item.transmission}</span>
        </div>

        <div className="flex items-center gap-3">
          <img src={Car2} alt="folder user" />
          <span>{item.age}</span>
        </div>

        <div className="flex items-center gap-3">
          <img src={Car4} alt="oil" />
          <span>{item.fuel}</span>
        </div>
      </div>
    </div>
  );
};

export default CarsItem;
