import LeftNavbar from "@/components/LeftNavbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pl-80 bg-black text-white">
      <LeftNavbar></LeftNavbar>
      <h1>Toolfolio</h1>
    </main>
  );
}
