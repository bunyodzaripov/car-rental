import Brands from "./modules/brands";
import Header from "./modules/header";
import Hero from "./modules/hero";
import Services from "./modules/services";

const App = () => {
  return (
    <>
      <Header />
      <div className="containers">
        <Hero />
        <Brands />
        <Services />
      </div>
    </>
  );
};

export default App;
