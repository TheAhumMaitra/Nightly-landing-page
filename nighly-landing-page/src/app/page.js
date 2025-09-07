import Footer from "./components/Footer";
import Header from "./components/Header";
import WelcomeCarousel from "./components/welcome-carousel";
import LicenseAlert from "./components/licensealert";
import Welcome from "./components/welcome";
import TechUsed from "./components/techuused";

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeCarousel />
      <Welcome />
      <TechUsed />
      <LicenseAlert />
      <Footer />
    </>
  );
}
