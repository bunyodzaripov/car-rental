import { Desktop, Shield, UserClock, Wallet } from "../../assets/icons";

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
    <div className="flex items-center justify-center">
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
            <div
              key={index}
              className="bg-[#F5F5F5] w-147.5 rounded-[20px] px-8 py-10 flex flex-col justify-between"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
