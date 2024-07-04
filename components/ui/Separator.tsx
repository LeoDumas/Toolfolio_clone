type SeparatorProps = {
  title?: string;
};

const Separator = ({ title }: SeparatorProps) => {
  return (
    <div className="relative flex mt-5 items-center">
      {title && (
        <span className="flex-shrink mr-4 text-white text-xs">{title}</span>
      )}
      <div className="flex-grow border-t border-gray-400/20"></div>
    </div>
  );
};

export default Separator;
