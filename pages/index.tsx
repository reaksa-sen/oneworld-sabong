import type { NextPage } from "next";
import { Contact } from "../components/Contact";
import { ProductService } from "../components/Product_services";
import { Banner } from "../components/Banner";
import { What_we_offer } from "../components/What_we_offer";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <What_we_offer />
      <ProductService />
      <Contact />
    </>
  );
};

export default Home;
