import LeftNavbar from "@/components/LeftNavbar";
import LibraryGrid from "@/components/LibraryCard";

const LibrariesPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-24 lg:pl-80 bg-black text-white">
      <LeftNavbar />
      <LibraryGrid />
    </main>
  );
};

export default LibrariesPage;
