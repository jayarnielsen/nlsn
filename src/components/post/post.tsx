import { PostType } from "@/types";
import { Box, Center, Frame, Stack, Switcher, Text } from "@gaze-ui/react";
import Image from "next/image";
import * as React from "react";

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
          threshold="40rem"
          limit={2}
        >
          <Box>
            <Frame aspectRatio={8 / 10} borderRadius="var(--size-radius-lg)">
              <Image
                src={require(`../../posts/${post.slug}/content/${content.imgSrc}`)}
                alt={`${post.title} page ${i + 1}`}
                placeholder="blur"
              />
            </Frame>
          </Box>
          <Stack space="var(--size-space-40)">
            {content.text.split("\n\n").map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </Stack>
        </Switcher>
      ))}
    </Center>
  );
};
