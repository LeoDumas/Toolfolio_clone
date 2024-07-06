import { Suspense } from "react";
import LeftNavbar from "@/components/LeftNavbar";
import Hero from "@/components/Hero";
import SuggestionButton from "@/components/SuggestionButton";
import { getToolsData } from "@/lib/getToolsData";
import ToolsList from "@/components/ToolsList";

export default function Home() {
  const tools = getToolsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-24 lg:pl-80 bg-black text-white">
      <LeftNavbar />
      <Hero />
      <div className="flex items-center w-full justify-between mb-8 px-32">
        <h1 className="text-left text-3xl font-semibold">Découvrir</h1>
        <SuggestionButton />
      </div>

      <h2 className="text-2xl text-center">Recommandations</h2>
      <Suspense fallback={<div>Chargement...</div>}>
        <ToolsList initialTools={tools} />
      </Suspense>
    </main>
  );
}
