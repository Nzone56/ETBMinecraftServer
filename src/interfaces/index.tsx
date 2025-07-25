export interface Member {
  uid: string,
  name: string,
  role: string,
  team: string,
  highlights: string[]
}

export interface Team {
  uid: string;
  name: string;
  members: Member[];
  logo: string;
  maincolor: string;
  secondcolor: string;
  foregroundcolor: string;
  detailcolor: string;

  baseCoords?: { x: number; y: number; z: number };
  endCoords?: { x: number; y: number; z: number };
  mapImage?: string;
}

export interface Event {
  title: string,
  date: string,
  time: string,
  description: string,
  end: boolean
}

export interface NewsFeatureSection {
  title: string;
  items: string[];
}

export interface NewsEntry {
  version: string;
  features: NewsFeatureSection[];
  video?: string;
}

export interface Guide {
  emoji: string;
  title: string;
  content: React.ReactNode;
};