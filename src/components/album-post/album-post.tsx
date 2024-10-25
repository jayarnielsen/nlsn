import {
  Anchor,
  Box,
  Center,
  Heading,
  Separator,
  Stack,
  Switcher,
  Text,
} from "@gaze-ui/react";
import Giscus from "@giscus/react";
import Image from "next-export-optimize-images/image";
import * as React from "react";

import { AlbumPostType, TypewrittenPostType } from "../../types";
import styles from "./album-post.module.css";

export interface PostProps {
  post: AlbumPostType;
}

export const AlbumPost = ({ post }: PostProps) => {
  return (
    <Center gutter="var(--gaze-space-50)" maxWidth="100rem">
      <Stack space="var(--gaze-space-30)">
        {post.title && <Heading as="h1">{post.title}</Heading>}
        {post.description && (
          <Text fontSize="var(--gaze-font-size-2xl)">{post.description}</Text>
        )}
        <Switcher limit={2} space="var(--gaze-space-50)" threshold="90rem">
          <Box borderRadius="var(--gaze-radius-sm)">
            <iframe
              src={`https://embed.tidal.com/albums/${post.tidalId}?disableAnalytics=true`}
              allow="encrypted-media"
              allowFullScreen
              frameBorder="0"
              className={styles["tidal-iframe"]}
            ></iframe>
          </Box>
          <Box
            className={styles["md"]}
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </Switcher>
        <Separator
          variant="dotted"
          color="var(--gaze-color-slate-200)"
          thickness="var(--gaze-border-width-px)"
        />
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
            repo="jnlsn/nlsn"
            repoId="R_kgDOHr3AvQ"
            term={post.title}
            theme="light"
            reactionsEnabled="0"
          />
        </Box>
      </Stack>
    </Center>
  );
};
