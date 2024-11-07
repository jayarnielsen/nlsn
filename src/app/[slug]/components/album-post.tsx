import { Box, Heading, Stack, Switcher, Text } from "@gaze-ui/react";
import * as React from "react";

import { AlbumPostType } from "../../../types";
import styles from "./album-post.module.css";

export interface PostProps {
  post: AlbumPostType;
}

export const AlbumPost = ({ post }: PostProps) => {
  return (
    <Stack space="var(--gaze-space-30)">
      {post.title && <Heading as="h1">{post.title}</Heading>}
      {post.description && (
        <Text fontSize="var(--gaze-font-size-2xl)">{post.description}</Text>
      )}
      <Switcher
        limit={2}
        space="var(--gaze-space-50)"
        threshold="90rem"
        align="stretch"
        reverse
      >
        <Box
          className={styles["md"]}
          dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
        />
        <iframe
          src={`https://embed.tidal.com/albums/${post.tidalId}?disableAnalytics=true`}
          allow="encrypted-media"
          allowFullScreen
          frameBorder="0"
          className={styles["tidal-iframe"]}
        ></iframe>
      </Switcher>
    </Stack>
  );
};
