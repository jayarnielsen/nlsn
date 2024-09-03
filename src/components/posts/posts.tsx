import * as React from "react";
import { PostType } from "@/types";
import {
  Anchor,
  Center,
  Cluster,
  Grid,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@gaze-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./posts.module.css";

export interface PostsProps {
  posts: PostType[];
}

export const Posts = ({ posts }: PostsProps): JSX.Element => {
  return (
    <Center maxWidth="100rem" gutter="var(--size-space-50)">
      <Stack space="var(--size-space-50)">
        <Heading as="h1">NLSN &times; Soliloquy Stream</Heading>
        <Grid minimum="20rem" space="var(--size-space-50)">
          {posts.map((post) => (
            <LinkBox key={post.title}>
              <Stack className={styles.brick} space="var(--size-space-20)">
                <Stack space="var(--size-space-5)">
                  {!!post.title && !!post.slug && (
                    <Heading as="h5">
                      <Link href={post.slug} passHref legacyBehavior>
                        <LinkOverlay>{post.title}</LinkOverlay>
                      </Link>
                    </Heading>
                  )}
                  {post.description && <Text>{post.description}</Text>}
                </Stack>
                {post.scans && (
                  <div className={styles["type-written"]}>
                    {post.scans.map((imgSrc, i) => (
                      <div>
                        <Image
                          key={`${imgSrc}-img`}
                          src={require(
                            `../../posts/${post.slug}/content/${imgSrc}`
                          )}
                          alt={`${post.title} page ${i + 1}`}
                          placeholder="blur"
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
