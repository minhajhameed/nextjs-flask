import Image from "next/image";
import Flask from "./Flask";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flask/>
    </main>
  );
}
