export interface Member {
  name: string,
  role: string,
  team: string,
  highlights: string[]
}

export interface Event {
  title: string,
  date: string,
  time: string,
  description: string,
  end: boolean
}