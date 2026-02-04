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
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>{item.seats} Seats</span>
        </div>

        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          </svg>
          <span>{item.transmission}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{item.age}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{item.fuel}</span>
        </div>
      </div>
    </div>
  );
};

export default CarsItem;
