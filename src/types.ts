export type PostMeta = {
  date: string;
  title?: string;
  description?: string;
  slug?: string;
};

export interface TypewrittenContent {
  imgSrc: string;
  text: string;
}

export interface TypewrittenPostType extends PostMeta {
  type: "typewritten";
  model?: string;
  contents?: TypewrittenContent[];
  scans?: string[];
}

export interface AlbumPostType extends PostMeta {
  type: "album";
  tidalId?: string;
  content?: string;
}

export type PostType = TypewrittenPostType | AlbumPostType;
