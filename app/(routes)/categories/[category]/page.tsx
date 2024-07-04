import { getToolsData } from "@/lib/getToolsData";
import { Category } from "@/app/types";
import SimpleAppCard from "@/components/SimpleAppCard";
import LeftNavbar from "@/components/LeftNavbar";

export async function generateStaticParams() {
  const categories: Category[] = [
    "youtube",
    "startups",
    "artificial-intelligence",
    "design",
    "social-media",
    "websites",
  ];
  return categories.map((category) => ({
    category: category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: Category };
}) {
  const tools = getToolsData();
  const filteredTools = tools.filter((tool) =>
    tool.categorie.includes(params.category)
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-24  lg:pl-80 bg-black text-white">
      <LeftNavbar />
      <h1 className="text-3xl font-bold mb-6">{params.category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <SimpleAppCard
            key={tool.name}
            name={tool.name}
            description={tool.description}
            url={tool.url}
            format={tool.format}
            bgColor={tool.bgColor}
          />
        ))}
      </div>
    </main>
  );
}
