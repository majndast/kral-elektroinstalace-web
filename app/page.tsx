import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SmartHome } from "@/components/sections/SmartHome";
import { WhyUs } from "@/components/sections/WhyUs";
import { Realizations } from "@/components/sections/Realizations";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <SmartHome />
        <WhyUs />
        <Realizations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
