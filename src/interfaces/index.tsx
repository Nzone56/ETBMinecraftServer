export interface Member {
  uid: string,
  name: string,
  role: string,
  team: string,
  highlights: string[]
}

export interface Team {
  uid: string,
  name: string,
  members: Member[],
  logo: string,
  maincolor: string,
  secondcolor: string,
  foregroundcolor: string,
  detailcolor: string,
}

export interface Event {
  title: string,
  date: string,
  time: string,
  description: string,
  end: boolean
}
