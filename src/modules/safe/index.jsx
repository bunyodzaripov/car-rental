import { Flask, Folder, Heart } from "../../assets/icons";
import { Man } from "../../assets/images";
import { SafeItems } from "../../components";

function Safe() {
  const cards = [
    {
      title: "Every car is thoroughly sanitized and cleaned",
      icon: Flask,
    },
    {
      title: "All of our employees wear masks",
      icon: Heart,
    },
    {
      title: "We stay up to date with all protocol from the CDC",
      icon: Folder,
    },
  ];

  return (
    <section className="containers">
      <div className="my-40 py-10 px-8 rounded-[20px] border-[1.5px] border-[#E5E7EA] flex gap-23 relative">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[36px] font-semibold mb-2.5">
              Car rental keeps you safe
            </h2>
            <p className="text-[#555555] leading-6 max-w-147.5">
              The safety of our employees and renters is our number one
              priority. In addition to being confident your vehicle is cleaned
              and sanitized every time you rent, you can also feel confident
              that we will take every opportunity to enhance the health and
              safety measures currently practiced in our operations.
            </p>
          </div>

          <div className="flex gap-2.5">
            {cards.map((item, index) => (
              <SafeItems key={index} title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>

        <div className="w-96.5">
          <div className="absolute right-28 top-7.5 rounded-full w-75 h-75 bg-[#299764]" />

          <img src={Man} alt="Men " className="relative -bottom-10 z-10" />
        </div>
      </div>
    </section>
  );
}

export default Safe;
