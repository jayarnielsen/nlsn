"use client";
import { Box } from "@gaze-ui/react";
import Giscus from "@giscus/react";
import * as React from "react";

export interface PostProps {
  title: string;
}

export const Comments = ({ title }: PostProps) => {
  return (
    <Box>
      <Giscus
        category="General"
        categoryId="DIC_kwDOHr3Avc4CXiSz"
        emitMetadata="0"
        id="comments"
        inputPosition="top"
        lang="en"
        loading="lazy"
        mapping="specific"
        reactionsEnabled="0"
        repo="jnlsn/nlsn"
        repoId="R_kgDOHr3AvQ"
        term={title}
        theme="light"
      />
    </Box>
  );
};
