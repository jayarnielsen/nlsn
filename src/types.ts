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

export interface AlbumPost extends PostMeta {
  type: "album";
  tidalId?: string;
  content?: string;
}

export type PostType = TypewrittenPostType | AlbumPost;

export type TypewrittenField = keyof Omit<
  TypewrittenPostType,
  "type" | "date" | "contents"
>;
export type AlbumField = keyof Omit<AlbumPost, "type" | "date">;
export type PostField = TypewrittenField | AlbumField;
