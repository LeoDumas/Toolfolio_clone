"use client";

import { useState } from "react";
import SimpleAppCard from "@/components/SimpleAppCard";
import SearchBar from "./ui/SearchBar";
import { Tool } from "@/app/types";

interface ToolsListProps {
  initialTools: Tool[];
}

export default function ToolsList({ initialTools }: ToolsListProps) {
  const [tools, setTools] = useState(initialTools);

  const handleSearch = (query: string) => {
    const filteredTools = initialTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.usage.toLowerCase().includes(query.toLowerCase())
    );
    setTools(filteredTools);
  };

  return (
    <>
      <div className="w-full flex justify-center mb-8">
        <SearchBar onSearch={handleSearch} tools={initialTools} />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-8 sm:gap-x-16 md:gap-x-20">
        {tools.map((card, index) => (
          <SimpleAppCard key={index} {...card} />
        ))}
      </section>
    </>
  );
}
