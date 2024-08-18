export interface Transcript {
  id: number;
  name: string;
  artist: string;
  duration: number;
  language: string;
  url: string;
  content: {
    timestamp: string;
    lyrics: string;
  }[];
}
