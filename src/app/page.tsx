import { Banner } from "@/components/Banner";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Galley";
import { Members } from "@/components/Members";
import { Rules } from "@/components/Rules";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <Banner />
      <Members />
      <Rules />
      <Gallery />
      <Events />
    </div>
  );
}
