import { Heading, LinkBox, LinkOverlay, Stack, Text } from "@gaze-ui/react";
import Image from "next-export-optimize-images/image";
import Link from "next/link";
import * as React from "react";

import { TypewrittenPostType } from "../../types";
import styles from "./posts.module.css";

export interface PostsProps {
  post: TypewrittenPostType;
}

export const TypewrittenPostPreview = ({ post }: PostsProps) => {
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
        {post.scans && (
          <div className={styles["type-written"]}>
            {post.scans.map((imgSrc, i) => (
              <div key={imgSrc}>
                <Image
                  alt={`${post.title ?? ""} page ${(i + 1).toString()}`}
                  key={`${imgSrc}-img`}
                  placeholder="blur"
                  src={require(`../../scans/${post.slug}/${imgSrc}`)}
                  width={250}
                />
              </div>
            ))}
          </div>
        )}
      </Stack>
    </LinkBox>
  );
};
