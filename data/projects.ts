
export type ProjectStatus = "client" | "self-initiated" | "concept";

export const projectStatusLabels: Record<ProjectStatus, string> = {
  client: "Client project",
  "self-initiated": "Self-initiated redesign",
  concept: "Concept project",
};

export type ProjectTheme = "light" | "dark";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  theme: ProjectTheme;
  status?: ProjectStatus;
  liveUrl?: string;
  image?: ProjectImage;
};

export const projects: Project[] = [
  {
    slug: "gt-hair",
    name: "GT HAIR",
    category: "Website Redesign",
    description:
      "A website redesign concept for a modern hair studio, focused on presenting the brand with a clear and contemporary digital experience.",
    theme: "light",
    status: "concept",
  },
  {
    slug: "crypto-millions",
    name: "Crypto Millions",
    category: "Website Design & Build",
    description:
      "A digital experience concept for a finance-focused brand, combining bold typography and a distinctive visual direction.",
    theme: "dark",
    status: "concept",
  },
];
