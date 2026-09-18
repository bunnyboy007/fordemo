
import Banner from "./banner";
import AboutUs from "../reusedcomponent/AboutUs"
import AboutSection from "../reusedcomponent/AboutSection"
import ProdcutSection from "../reusedcomponent/productsection"
import Facts from "../reusedcomponent/Facts"
import Portfolio from "../reusedcomponent/Portfolio"

export default function Home() {
  return (
    <>
  
      <Banner />

      {/* Other sections */}
      <section className="about">
        <AboutUs />
        <AboutSection/>
      </section>

      <section className="product">
        <ProdcutSection/>
      </section>

      <section className="vision">
        <Facts/>
      </section>

      <section className="portfolio" >
       <Portfolio/>
      </section>
    </>
  );
}