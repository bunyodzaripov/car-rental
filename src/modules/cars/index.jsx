import { useState } from "react";
import { Car1 } from "../../assets/images";
import { Button, CarsItem } from "../../components";

function Cars() {
  const [activeFilter, setActiveFilter] = useState("all");

  const cars = [
    {
      id: 1,
      name: "Ford Fiesta",
      category: "Compact",
      type: "Economy Car",
      image: Car1,
      seats: 5,
      transmission: "Automatic",
      age: "21+ Years",
      fuel: "1-lt / 2.5 km",
    },
    {
      id: 2,
      name: "Nissan Versa",
      category: "Compact",
      type: "Compact Car",
      image: Car1,
      seats: 5,
      transmission: "Automatic",
      age: "21+ Years",
      fuel: "1-lt / 2.5 km",
    },
    {
      id: 3,
      name: "Toyota Corolla",
      category: "Compact",
      type: "Mid-size Car",
      image: Car1,
      seats: 5,
      transmission: "Automatic",
      age: "21+ Years",
      fuel: "1-lt / 2.5 km",
    },
    {
      id: 4,
      name: "Nissan Rogue",
      category: "Sports cars",
      type: "Mid-size SUV",
      image: Car1,
      seats: 5,
      transmission: "Automatic",
      age: "21+ Years",
      fuel: "1-lt / 2.5 km",
    },
    {
      id: 5,
      name: "Chevy Traverse",
      category: "Vans",
      type: "Full-size SUV",
      image: Car1,
      seats: 5,
      transmission: "Automatic",
      age: "21+ Years",
      fuel: "1-lt / 2.5 km",
    },
    {
      id: 6,
      name: "Nissan Altima",
      category: "Sports cars",
      type: "Full-size Car",
      image: Car1,
      seats: 5,
      transmission: "Automatic",
      age: "21+ Years",
      fuel: "1-lt / 2.5 km",
    },
  ];

  const categories = ["Compact", "Sports cars", "Vans"];

  const filteredCars =
    activeFilter === "all"
      ? cars
      : cars.filter((car) => car.category === activeFilter);

  const handleViewAll = () => {
    setActiveFilter("all");
  };

  return (
    <section className="mb-40 mt-32.5">
      <div className="containers">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold mb-2.5">
            Choose the car of your dreams
          </h2>
          <p className="text-[#555555] mx-auto max-w-143.75">
            We provide our customers with the most positive driving emotions.
            That is why there are only world-class cars in our fleet.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`cursor-pointer px-10 py-5 rounded-full font-medium transition ${
                activeFilter === item
                  ? "bg-[#299764] text-white "
                  : "bg-white text-black border border-[#E5E7EA]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {filteredCars.map((item) => (
            <CarsItem key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center ">
          <Button
            title={"View all cars"}
            extraStyle={"py-[18px] px-[30px] bg-[#299764]"}
            onClick={handleViewAll}
          />
        </div>
      </div>
    </section>
  );
}

export default Cars;
