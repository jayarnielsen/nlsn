import Head from "next/head";
import * as React from "react";

import { TypewrittenPost } from "../../components/typewritten-post/typewritten-post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { recognizeText } from "../../lib/recognize-text";
import { AlbumPost } from "../../components/album-post/album-post";
import mdToHtml from "../../lib/md-to-html";
import { PostType } from "../../types";
import { Metadata } from "next";
import { Separator, Stack } from "@gaze-ui/react";
import { Comments } from "../../components/comments/comments";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} | NLSN`,
  };
}

async function renderPost(post: PostType) {
  switch (post.type) {
    case "typewritten": {
      post.contents = await recognizeText(post.slug, post.scans);
      return <TypewrittenPost post={post} />;
    }
    case "album":
      post.content = await mdToHtml(post.content ?? "");
      return <AlbumPost post={post} />;
    default:
      return null;
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return (
    <Stack space="var(--gaze-space-100)">
      {await renderPost(post)}
      <Separator
        variant="dotted"
        color="var(--gaze-color-slate-200)"
        thickness="var(--gaze-border-width-px)"
      />
      <Comments title={post.title} />
    </Stack>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}
