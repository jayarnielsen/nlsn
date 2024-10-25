import { Center, Grid, Heading, Stack } from "@gaze-ui/react";

import * as React from "react";

import { PostType } from "../../types";
import { TypewrittenPostPreview } from "../typewritten-post/typewritten-post-preview";
import { AlbumPostPreview } from "../album-post/album-post-preview";

export interface PostsProps {
  posts: PostType[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <Stack space="var(--gaze-space-50)">
      <Heading as="h1">NLSN &times; Soliloquy Stream</Heading>
      <Grid minimum="20rem" space="var(--gaze-space-50)">
        {posts.map((post) => {
          switch (post.type) {
            case "typewritten": {
              return <TypewrittenPostPreview key={post.title} post={post} />;
            }
            case "album": {
              return <AlbumPostPreview key={post.title} post={post} />;
            }
          }
        })}
      </Grid>
    </Stack>
  );
};
