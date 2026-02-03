import { Brands, Header, Hero, Safe, Services } from "./modules";

const App = () => {
  return (
    <>
      <Header />
      <div className="containers">
        <Hero />
        <Brands />
        <Services />
        <Safe />
      </div>
    </>
  );
};

export default App;
