import path from "node:path";
import Tesseract from "tesseract.js";

import { Content } from "../types";
import { postsDirectory } from "./api";

export const recognizeText = async (
  slug = "",
  files: string[] = []
): Promise<Content[]> => {
  const result: Content[] = [];
  for (const file of files) {
    const {
      data: { text },
    } = await Tesseract.recognize(
      path.join(postsDirectory, slug, "content", file),
      "eng"
    );
    result.push({
      imgSrc: file,
      text,
    });
  }
  return result;
};
