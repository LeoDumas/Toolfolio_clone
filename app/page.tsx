import LeftNavbar from "@/components/LeftNavbar";
import Hero from "@/components/Hero";
import SimpleAppCard from "@/components/SimpleAppCard";
import SuggestionButton from "@/components/SuggestionButton";
import { getToolsData } from "@/lib/getToolsData";

export default function Home() {
  const tools = getToolsData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-24  lg:pl-80 bg-black text-white">
      <LeftNavbar />
      <Hero />
      <div className="flex items-center w-full justify-between mb-8 px-32">
        <h1 className="text-left text-3xl font-semibold">Discover</h1>
        <SuggestionButton />
      </div>

      <h2 className="text-2xl text-center">Recommendations</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-8 sm:gap-x-16 md:gap-x-20">
        {tools.map((card, index) => (
          <SimpleAppCard key={index} {...card} />
        ))}
      </section>
    </main>
  );
}
