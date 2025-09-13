import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BetaWidget from "@/components/BetaWidget";
import IAHelperWidget from "@/components/IAHelperWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BetaWidget />
      <IAHelperWidget />
    </main>
  );
};

export default Index;