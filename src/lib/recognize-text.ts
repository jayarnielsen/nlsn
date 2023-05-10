import { join } from "path";
import Tesseract from "tesseract.js";
import { postsDirectory } from "./api";
import { Content, PostType } from "@/types";

export const recognizeText = async (
  slug: string = "",
  files: string[] = []
): Promise<Content[]> => {
  const result: Array<Content> = [];
  for (const file of files) {
    const {
      data: { text },
    } = await Tesseract.recognize(
      join(postsDirectory, slug, "content", file),
      "eng"
    );
    result.push({
      imgSrc: file,
      text,
    });
  }
  return result;
};
