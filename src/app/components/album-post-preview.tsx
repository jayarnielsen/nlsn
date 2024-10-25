import { Heading, LinkBox, LinkOverlay, Stack, Text } from "@gaze-ui/react";
import Link from "next/link";
import * as React from "react";

import { AlbumPostType } from "../../types";
import styles from "./album-post-preview.module.css";

export interface PostsProps {
  post: AlbumPostType;
}

export const AlbumPostPreview = ({ post }: PostsProps) => {
  return (
    <Stack space="var(--gaze-space-20)">
      <LinkBox key={post.title}>
        <Stack space="var(--gaze-space-5)">
          {!!post.title && !!post.slug && (
            <Heading as="h5">
              <Link href={post.slug} legacyBehavior passHref>
                <LinkOverlay>{post.title}</LinkOverlay>
              </Link>
            </Heading>
          )}
          {post.description && <Text>{post.description}</Text>}
        </Stack>
      </LinkBox>
      <div className={styles["tidal-embed"]}>
        <iframe
          className={styles["tidal-iframe"]}
          src={`https://embed.tidal.com/albums/${post.tidalId}?layout=gridify&disableAnalytics=true`}
          allow="encrypted-media"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </Stack>
  );
};
