import { compareDesc, parse } from "date-fns";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { PostType } from "../types";

export const postsDirectory = path.join(process.cwd(), "src/posts");
export const scansDirectory = path.join(process.cwd(), "src/scans");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).map((file) => file.replace(".md", ""));
}

export function getPostBySlug(slug: string): PostType {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(mdPath, "utf8");
  const md = matter(fileContents);

  let data: PostType = {
    slug,
    type: md.data.type,
    date: md.data.date,
    title: md.data.title,
    description: md.data.description,
  };

  switch (data.type) {
    case "typewritten":
      data = {
        ...data,
        model: md.data.model,
        scans: fs.readdirSync(path.join(scansDirectory, slug)),
      };
      break;
    case "album":
      data = {
        ...data,
        content: md.content,
        tidalId: md.data.tidalId,
      };
      break;
    default:
      throw new Error(`Invalid content type`);
  }

  return data;
}

export function getAllPosts(): PostType[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      compareDesc(
        parse(post1.date, "MMMM yyyy", new Date()),
        parse(post2.date, "MMMM yyyy", new Date())
      )
    );
  return posts;
}
