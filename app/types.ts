export type Category = "youtube" | "startups" | "artificial-intelligence" | "design" | "social-media" | "websites";

export interface Tool {
  name: string;
  description: string;
  url: string;
  bgColor?: string;
  format?: string;
  categorie: Category[];
}