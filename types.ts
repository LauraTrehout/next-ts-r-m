import { InformationEvent } from "http";

export interface Character {
  id: number;
  name: string;
  type: string;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface GetCharacterResults {
    info: Info;
    results: Character[]
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: null;
}