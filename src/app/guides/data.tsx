import { Installation } from "@/components/Guides/Installation";
import Librarians from "@/components/Guides/Librarians";
import { Guide } from "@/interfaces";

export const allGuides: Guide[] = [
  {
    emoji: "🛠️",
    title: "Instalaciones",
    content: <Installation />
  },
  {
    emoji: "📚",
    title: "Aldeanos",
    content: <Librarians />
  },
]