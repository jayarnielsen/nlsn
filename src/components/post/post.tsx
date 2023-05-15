import { PostType } from "@/types";
import {
  Box,
  Center,
  Frame,
  Heading,
  Stack,
  Switcher,
  Text,
} from "@gaze-ui/react";
import Image from "next/image";
import * as React from "react";
import styles from "./post.module.css";

export interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <Center maxWidth="100rem">
      {post.contents?.map((content, i) => (
        <Switcher
          key={content.imgSrc}
          space="var(--size-space-40)"
          threshold="90rem"
          limit={2}
        >
          <Box>
            <Heading as="h3">Man</Heading>
            <Frame aspectRatio={8 / 10} borderRadius="0" className={styles.man}>
              <Image
                src={require(`../../posts/${post.slug}/content/${content.imgSrc}`)}
                alt={`${post.title} page ${i + 1}`}
                placeholder="blur"
              />
            </Frame>
          </Box>
          <Box>
            <Heading as="h3">Machine</Heading>
            <Box
              background="var(--color-slate-900)"
              invert
              padding="var(--size-space-60)"
              borderRadius="var(--size-radius-md)"
            >
              <Stack space="var(--size-space-30)" className={styles.machine}>
                {content.text.split("\n\n").map((paragraph) => (
                  <Text fontSize="var(--size-font-xl)" key={paragraph}>
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            </Box>
          </Box>
        </Switcher>
      ))}
    </Center>
  );
};
