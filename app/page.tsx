import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Golio from "@/components/Golio";
import SelectedProjects from "@/components/SelectedProjects";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <h1>
      <Nav />
      <Hero />
      <Banner />
      <Golio />
      <SelectedProjects />
      <Work />
      <Footer />
    </h1>
  );
}
