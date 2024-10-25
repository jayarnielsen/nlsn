import {
  Frame,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@gaze-ui/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { TypewrittenPostType } from "../../types";
import styles from "./typewritten-post-preview.module.css";

export interface PostsProps {
  post: TypewrittenPostType;
}

export const TypewrittenPostPreview = ({ post }: PostsProps) => {
  const thumb = post.scans?.shift();
  return (
    <LinkBox key={post.title}>
      <Stack className={styles.brick} space="var(--gaze-space-20)">
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
        {thumb && (
          <div className={styles["type-written"]}>
            <Frame aspectRatio={1} className={styles.frame}>
              <Image
                alt={`${post.title ?? ""}`}
                src={`/scans/${post.slug}/${thumb}`}
                fill
              />
            </Frame>
          </div>
        )}
      </Stack>
    </LinkBox>
  );
};
