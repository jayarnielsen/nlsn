export type Content = {
  imgSrc: string;
  text: string;
};

export type PostType = {
  slug?: string;
  title?: string;
  date: string;
  description?: string;
  scans?: string[];
  contents?: Content[];
  model?: string;
};
