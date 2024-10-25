import * as React from "react";

import { getAllPosts } from "../lib/api";
import { Metadata } from "next";
import { Stack, Heading, Grid } from "@gaze-ui/react";
import { AlbumPostPreview } from "./components/album-post-preview";
import { TypewrittenPostPreview } from "./components/typewritten-post-preview";

export const metadata: Metadata = {
  title: "Jay Nielsen's Blog",
};

export default async function Page() {
  const posts = getAllPosts();
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
}
