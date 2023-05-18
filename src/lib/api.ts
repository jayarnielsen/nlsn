import fs from "fs";
import { join } from "path";
import { compareAsc, compareDesc } from "date-fns";
import { PostType } from "../types";

export const postsDirectory = join(process.cwd(), "src/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  const jsonPath = join(postsDirectory, slug, "meta.json");
  const fileContents = fs.readFileSync(jsonPath, "utf8");
  const data = JSON.parse(fileContents);

  type Items = {
    date: string;
    [key: string]: unknown;
  };

  const items: Items = {
    date: data.date ? data.date.toString() : new Date().toString(),
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }

    if (field === "scans") {
      items[field] = fs.readdirSync(join(postsDirectory, slug, "content"));
    }

    if (field === "supplements") {
      const supplementsPath = join(postsDirectory, slug, "supplements");
      items[field] = fs.existsSync(supplementsPath)
        ? fs.readdirSync(supplementsPath)
        : null;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

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
