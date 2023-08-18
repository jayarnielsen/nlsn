import * as React from "react";
import { PostType } from "@/types";
import { Anchor, Center, Heading, Stack, Text } from "@gaze-ui/react";
import Link from "next/link";

export interface PostsProps {
  posts: PostType[];
}

export const Posts = ({ posts }: PostsProps): JSX.Element => {
  return (
    <Center maxWidth="100rem">
      <Stack space="var(--size-space-50)">
        {posts.map((post) => (
          <Stack key={post.title} space="var(--size-space-10)">
            {post.title && <Heading as="h5">{post.title}</Heading>}
            {post.description && <Text>{post.description}</Text>}
            {post.slug && (
              <Text>
                <Link href={post.slug} passHref>
                  <Anchor>Read it &rarr;</Anchor>
                </Link>
              </Text>
            )}
          </Stack>
        ))}
      </Stack>
    </Center>
  );
};
