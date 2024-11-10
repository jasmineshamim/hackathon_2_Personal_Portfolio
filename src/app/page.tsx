
import HeaderSection from "./_components/Header";
import HeroSection from "./_components/Hero";
import LatestSection from "./_components/Latest";

export default function Home() {
  return (
   <main className="min-h-screen bg-[#111]">
      <HeaderSection />
      <HeroSection />
      <LatestSection />
    </main>
  
  );
}
