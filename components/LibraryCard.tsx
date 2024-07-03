import Image from "next/image";

type LibraryCardProps = {
  name: string;
  format?: string;
};

const LibraryCard = ({ name, format }: LibraryCardProps) => {
  function NameToImageUrl(AppName: string) {
    if (!format) {
      return `/LibrariesLogo/${AppName.replaceAll(" ", "").toLowerCase()}.png`;
    }
    return `/LibrariesLogo/${AppName.replaceAll(
      " ",
      ""
    ).toLowerCase()}.${format}`;
  }

  return (
    <article className="bg-[#121212] w-full h-32 p-4 flex items-center justify-between border-gray-500/40 border rounded-lg">
      <div className="flex items-center justify-center w-full">
        <div className="relative w-20 h-20 overflow-hidden mr-4 flex-shrink-0">
          <Image
            alt={`img_${name}`}
            src={NameToImageUrl(name)}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </article>
  );
};

const LibraryGrid = () => {
  const libraries = [
    "Framer",
    "Apple",
    "chrome web store",
    "Figma",
    "Webflow",
    "Wordpress",
    "Notion",
  ];

  return (
    <div className=" w-full px-24">
      <div className="grid grid-cols-2 gap-4 ">
        {libraries.map((name) => (
          <LibraryCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default LibraryGrid;
