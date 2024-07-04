import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

type ComplexAppCardProps = {
  name: string;
  url: string;
  usage: string;
  description: string;
  format?: string;
  type: string; //free, paid, free&paid
};

const ComplexAppCard = ({
  name,
  url,
  usage,
  description,
  type,
  format,
}: ComplexAppCardProps) => {
  function NameToImageUrl(AppName: string) {
    return "/ToolsImage/" + AppName.replace(" ", "").toLowerCase() + ".png";
  }
  return (
    <div className="rounded-lg overflow-hidden w-full">
      <a href={url} className="group">
        <div className="relative h-48">
          <Image
            src={NameToImageUrl(name)}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 w-full h-full backdrop-filter backdrop-blur-md bg-black/50 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center">
            <p className="text-white text-center bg-gray-900 px-3 rounded-xl py-1">
              {type}
            </p>
            <p className="text-white text-center">{usage}</p>
          </div>
        </div>
        <div className="pt-2 flex items-center justify-between relative">
          <div className="flex-grow">
            <h3 className="text-white text-lg font-semibold">{name}</h3>
            <p className="text-gray-400 text-xs mb-4">{description}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white opacity-0 transition-all duration-300 absolute right-0 top-1/2 transform -translate-y-1/2 group-hover:opacity-100"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ComplexAppCard;
