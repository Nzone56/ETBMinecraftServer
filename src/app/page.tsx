import { Banner } from "@/components/Banner";
import { Events } from "@/components/Events";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <Banner />
      <Events />
    </div>
  );
}
