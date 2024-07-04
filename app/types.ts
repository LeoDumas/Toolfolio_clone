export type Category = "youtube" | "startups" | "artificial-intelligence" | "design" | "social-media" | "websites";

export interface Tool {
  name: string;
  description: string;
  usage: string;
  url: string;
  bgColor?: string;
  format?: string;
  type: string;
  categorie: Category[];
}