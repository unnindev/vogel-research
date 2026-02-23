import {
  Header,
  Hero,
  Stats,
  About,
  Services,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
