import { compareDesc } from "date-fns";
import fs from "node:fs";
import path from "node:path";

import { PostMeta, PostType } from "../types";

export const postsDirectory = path.join(process.cwd(), "src/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  const jsonPath = path.join(postsDirectory, slug, "meta.json");
  const fileContents = fs.readFileSync(jsonPath, "utf8");
  const data = JSON.parse(fileContents) as PostMeta;

  interface Items {
    [key: string]: unknown;
    date: string;
  }

  const items: Items = {
    date: data.date ? data.date.toString() : new Date().toString(),
  };

  // Ensure only the minimal needed data is exposed
  for (const field of fields) {
    if (field === "slug") {
      items[field] = slug;
    }

    if (field === "scans") {
      items[field] = fs.readdirSync(path.join(postsDirectory, slug, "content"));
    }

    if (data[field]) {
      items[field] = data[field];
    }
  }

  return items;
}

export function getAllPosts(fields: string[] = []): PostType[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      compareDesc(new Date(post1.date), new Date(post2.date))
    );
  return posts;
}
