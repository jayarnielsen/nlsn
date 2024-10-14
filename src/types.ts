export interface Content {
  imgSrc: string;
  text: string;
}

export interface PostType {
  contents?: Content[];
  date: string;
  description?: string;
  model?: string;
  scans?: string[];
  slug?: string;
  title?: string;
}

export type PostMeta = Record<string, string>;
