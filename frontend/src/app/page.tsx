import Hero from "../components/Hero";
import Marquee from "../components/Marquee";

export default function Home() {
  return (
    <main className="container mt-40 md:mt-72 lg:mt-0 mx-5 lg:mx-auto w-full h-screen bg-night text-white overflow-x-hidden lg:flex lg:items-center">
      <Hero />
      <Marquee />
    </main>
  );
}
