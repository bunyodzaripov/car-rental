import { Desktop, Shield, UserClock, Wallet } from "../../assets/icons";
import { ServicesItems } from "../../components";

function Services() {
  const cards = [
    {
      title: "Book online, pay online",
      description:
        "Complete the booking process A-Z, with our easy online system",
      icon: Desktop,
    },
    {
      title: "Guaranteed car reservation",
      description:
        "When you book with Car rental, you can be confident your car will be waiting for you",
      icon: Shield,
    },
    {
      title: "Unparalleled customer service",
      description:
        "We're here to help. We pride ourselves in our customer service",
      icon: UserClock,
    },
    {
      title: "No reservation or booking fees",
      description:
        "No cancellation fees if cancelled 24 hours prior to booking time",
      icon: Wallet,
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <div>
        <h2 className="text-[36px] font-semibold text-center mb-2.5">
          Unparalleled service
        </h2>
        <p className="text-center mx-auto w-171 text-[#555555]">
          Whether you are looking for Newark Airport car rental, an insurance
          replacement vehicle or minivan to take on vacation Car rental has it
          all.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-10">
          {cards.map((item, index) => (
            <ServicesItems key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
