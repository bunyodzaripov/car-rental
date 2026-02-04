import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
} from "../../assets/images";

const Brands = () => {
  const brands = [
    { id: 1, img: Brand1 },
    { id: 2, img: Brand2 },
    { id: 3, img: Brand3 },
    { id: 4, img: Brand4 },
    { id: 5, img: Brand5 },
    { id: 6, img: Brand6 },
  ];

  return (
    <section className="containers py-40">
      <h2 className="font-medium text-[24px]">More than 50 brands of cars</h2>
      <div className="mt-8.5 flex gap-16.5 justify-between">
        {brands.map((item) => (
          <img className="w-35" key={item.id} src={item.img} />
        ))}
      </div>
    </section>
  );
};

export default Brands;
