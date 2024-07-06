// page.tsx
import { getToolsData } from "@/lib/getToolsData";
import { Category } from "@/app/types";
import CategoryPageClient from "./CategoryPageClient";

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
    <CategoryPageClient category={params.category} tools={filteredTools} />
  );
}
