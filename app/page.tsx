import LeftNavbar from "@/components/LeftNavbar";
import Hero from "@/components/Hero";
import SimpleAppCard from "@/components/SimpleAppCard";
import SuggestionButton from "@/components/SuggestionButton";

const appCards = [
  {
    name: "Notion",
    description: "Note taking",
    url: "https://www.notion.so",
    bgColor: "bg-white",
  },
  {
    name: "TextSniper",
    description: "Text extraction",
    url: "https://textsniper.app/fr",
    format: "svg",
    bgColor: "bg-white",
  },
  {
    name: "Endless Tools",
    description: "3d design",
    url: "https://endlesstools.io/",
    format: "jpg",
  },
  {
    name: "TypeFully",
    description: "Social media tools",
    url: "https://typefully.com/",
    format: "jpg",
  },
  {
    name: "ElevenLabs",
    description: "Voice ai",
    url: "https://elevenlabs.io/",
  },
  {
    name: "Relume",
    description: "UI/UX Tool",
    url: "https://www.relume.io/",
    format: "jpg",
  },
  { name: "Shots", description: "Design tool", url: "https://shots.so/" },
  {
    name: "CompressX",
    description: "Compression tool",
    url: "https://compressx.app/",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  lg:pl-80 bg-black text-white">
      <LeftNavbar />
      <Hero />
      <div className="flex items-center w-full justify-between pl-12 mb-8">
        <h1 className="text-left text-3xl font-semibold">Discover</h1>
        <SuggestionButton />
      </div>

      <h2 className="text-2xl mb-6 text-center">Recommendations</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-24 gap-y-16 p-8">
        {appCards.map((card, index) => (
          <SimpleAppCard key={index} {...card} />
        ))}
      </section>
    </main>
  );
}
