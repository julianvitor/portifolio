export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
}

export interface Tool {
  name: string;
  value: string;
}
