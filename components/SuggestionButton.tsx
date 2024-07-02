"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SuggestionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenBtn() {
    setIsOpen(!isOpen);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-5 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
          Submit Suggestion
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-black text-white border-gray-800">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Suggestion</h4>
            <p className="text-sm text-muted-foreground">
              We will check your suggestion ASAP
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Notion"
                className="col-span-2 h-8 bg-gray-900 rounded-md px-2 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-6">
              <label htmlFor="url">URL</label>
              <input
                id="url"
                placeholder="https://notion.so"
                className="col-span-2 h-8 bg-gray-900 rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>
          <button className="bg-blue-600 py-3 rounded-xl">Submit</button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SuggestionButton;
