"use client";

import { useState } from "react";
import { Category, Tool } from "@/app/types";
import ComplexAppCard from "@/components/ComplexAppCard";
import LeftNavbar from "@/components/LeftNavbar";

// To be able to search for a specific tool
// In a separate file cause 'use client' deosn't work with dynamic routing
export default function CategoryPageClient({
  category,
  tools,
}: {
  category: Category;
  tools: Tool[];
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.usage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-24 lg:pl-80 bg-black text-white">
      <LeftNavbar />
      <div className=" flex flex-col md:flex-row w-full justify-between mb-6 px-1 sm:px-2 md:px-2 lg:px-20 xl:px-24">
        <h1 className="text-3xl font-bold text-center mb-6 md:mb-0 md:text-left">
          {/* Make sure the first letter is an uppercase */}
          {category[0].toUpperCase() + category.slice(1)}
        </h1>
        <div className="w-full max-w-xs mx-auto md:mx-0 md:max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a tool..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        {filteredTools.map((tool) => (
          <ComplexAppCard
            key={tool.name}
            name={tool.name}
            usage={tool.usage}
            description={tool.description}
            url={tool.url}
            format={tool.format}
            type={tool.type}
          />
        ))}
      </div>
    </main>
  );
}
