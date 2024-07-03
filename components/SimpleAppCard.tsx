import Image from "next/image";

type SimpleAppCardProps = {
  name: string;
  description: string;
  url: string;
  format?: string;
  bgColor?: string;
};

const SimpleAppCard = ({
  name,
  description,
  url,
  format,
  bgColor,
}: SimpleAppCardProps) => {
  function NameToImageUrl(AppName: string) {
    if (!format) {
      return "/ToolsLogo/" + AppName.replace(" ", "").toLowerCase() + ".png";
    }
    return (
      "/ToolsLogo/" + AppName.replace(" ", "").toLowerCase() + "." + format
    );
  }

  return (
    <a href={url} className="flex">
      <div
        className={`relative w-16 h-16 overflow-hidden rounded-md ${bgColor}`}
      >
        <Image
          src={NameToImageUrl(name)}
          alt={`img_${name}.png`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center ml-4">
        <h2 className="text-lg">{name}</h2>
        <h3 className="text-base text-white/50">{description}</h3>
      </div>
    </a>
  );
};

export default SimpleAppCard;
