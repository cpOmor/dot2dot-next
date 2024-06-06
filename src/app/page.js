// import HomePageSlider from "../components/Silder/HomePageSlider";
import Banner from "../components/ui/banner/Banner";
import Container from "../components/Container/Container";
import { WeDo } from "../components/ui/Home/WeDo";
import Projects from "../components/ui/Home/Projects";
import AboutUs from "../components/ui/Home/AboutUs";
import Service from "../components/ui/Home/Service";
import Pricing from "../components/ui/Home/Pricing";
import { ContactUs } from "../components/ui/Home/ContactUs";

export default function Home() {
  return (
    <div className="!relative">
      <Banner />

      <Container>
        <WeDo />
        <Projects />
        <AboutUs />
        <Service />
        <Pricing />
      </Container>
      <ContactUs />
      <Container></Container>
    </div>
  );
}
