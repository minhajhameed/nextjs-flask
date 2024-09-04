import Image from "next/image";
import Flask from "./Flask";
import Sum from "./Sum";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Flask />
      <div className="w-full h-1 bg-gradient-to-tr from-slate-100 via-gray-300 to-gray-500 mt-10 rounded-full"></div>
      <Sum />
    </main>
  );
}
