import {
  Center,
  Grid,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@gaze-ui/react";
import Image from "next-export-optimize-images/image";
import Link from "next/link";
import * as React from "react";

import { PostType } from "../../types";
import styles from "./posts.module.css";

export interface PostsProps {
  posts: PostType[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <Center gutter="var(--gaze-space-50)" maxWidth="100rem">
      <Stack space="var(--gaze-space-50)">
        <Heading as="h1">NLSN &times; Soliloquy Stream</Heading>
        <Grid minimum="20rem" space="var(--gaze-space-50)">
          {posts.map((post) => (
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
                          src={require(
                            `../../posts/${post.slug}/content/${imgSrc}`
                          )}
                          width={250}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Stack>
            </LinkBox>
          ))}
        </Grid>
      </Stack>
    </Center>
  );
};
