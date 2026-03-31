import Hero from "./sections/Hero";
import TabsContent from "./components/TabsContent";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TabsContent />
    </div>
  );
}
