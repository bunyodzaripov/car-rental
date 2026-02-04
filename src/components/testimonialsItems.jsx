import { Google, Stars } from "../assets/icons";

const TestimonialsItems = ({ item }) => {
  // gptdan oldim shu logikani
  const filterStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(<img key={i} src={Stars} alt="star" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-[#555555] text-sm">{item.email}</p>
          </div>
        </div>

        <img className="w-10.5" src={Google} alt="Google" />
      </div>

      <p className="text-sm leading-5 mb-4 flex-1">{item.review}</p>

      <div className="flex items-center gap-1">
        <span className=" text-sm font-medium mr-2">Star rating:</span>
        {filterStars(item.rating)}
      </div>
    </div>
  );
};

export default TestimonialsItems;
