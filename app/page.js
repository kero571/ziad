import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Care from "@/components/Care";
import Commercial from "@/components/Commercial";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Intro /> */}
        <Work />
        <Commercial />
        <Services />
        <Packages />
        <Care />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
