import { Brands, Footer, Header, Hero, Safe, Services } from "./modules";

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
      <Footer />
    </>
  );
};

export default App;
