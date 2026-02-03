const SafeItems = ({ title, icon }) => {
  return (
    <div className="bg-[#F5F5F5] w-50 rounded-2xl p-4 flex flex-col justify-between gap-7.5 items-end">
      <img src={icon} alt={title} />
      <p className="font-medium leading-5.5">{title}</p>
    </div>
  );
};

export default SafeItems;
