import { join } from "path";
import Tesseract from "tesseract.js";
import { postsDirectory } from "./api";

export const recognizeText = async (
  slug: string = "",
  files: string[] = []
): Promise<string[]> => {
  const result: string[] = [];
  for (const file of files) {
    const {
      data: { text },
    } = await Tesseract.recognize(
      join(postsDirectory, slug, "content", file),
      "eng"
    );
    result.push(text);
  }
  return result;
};
