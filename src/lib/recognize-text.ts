import path from "node:path";
import Tesseract from "tesseract.js";
import sizeOf from "image-size";

import { TypewrittenContent } from "../types";
import { scansDirectory } from "./api";

export const recognizeText = async (
  slug = "",
  files: string[] = []
): Promise<TypewrittenContent[]> => {
  const result: TypewrittenContent[] = [];
  for (const file of files) {
    const filePath = path.join(scansDirectory, slug, file);

    const {
      data: { text },
    } = await Tesseract.recognize(filePath, "eng");

    const size = await sizeOf(filePath);

    if (!size.width || !size.height) {
      throw new Error("could not determine image size");
    }

    result.push({
      imgSrc: file,
      width: size.width,
      height: size.height,
      text,
    });
  }
  return result;
};
