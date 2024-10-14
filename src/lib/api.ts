import { compareDesc, parse } from "date-fns";
import fs from "node:fs";
import path from "node:path";

import { PostField, PostType } from "../types";

export const postsDirectory = path.join(process.cwd(), "src/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(
  slug: string,
  fields: PostField[] = []
): PostType {
  const jsonPath = path.join(postsDirectory, slug, "meta.json");
  const fileContents = fs.readFileSync(jsonPath, "utf8");
  const data = JSON.parse(fileContents) as Record<string, string>;

  const items: PostType = {
    type: data.type as PostType["type"],
    date: data.date,
  };

  // Ensure only the minimal needed data is exposed
  for (const field of fields) {
    if (field === "slug") {
      items[field] = slug;
    }

    if (field === "title" || field === "description") {
      items[field] = data[field];
    }

    if (items.type === "typewritten" && field === "scans") {
      items[field] = fs.readdirSync(path.join(postsDirectory, slug, "content"));
    }

    if (items.type === "typewritten" && field === "model") {
      items[field] = data[field];
    }

    if (items.type === "album" && field === "tidalId") {
      items[field] = data[field];
    }
  }

  return items;
}

export function getAllPosts(fields: PostField[] = []): PostType[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      compareDesc(
        parse(post1.date, "MMMM yyyy", new Date()),
        parse(post2.date, "MMMM yyyy", new Date())
      )
    );
  return posts;
}
