import type { NextPage } from "next";

import Head from "next/head";
import * as React from "react";

import { Layout } from "../components/layout";
import { TypewrittenPost } from "../components/typewritten-post/post";
import { getAllPosts, getPostBySlug } from "../lib/api";
import { recognizeText } from "../lib/recognize-text";
import { PostType } from "../types";

interface PostProps {
  post: PostType;
}

const PostPage: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.title ?? ""} | NLSN`}</title>
      </Head>
      <Layout>
        {post.type === "typewritten" && <TypewrittenPost post={post} />}
      </Layout>
    </>
  );
};

export default PostPage;

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (post.type === "typewritten") {
    post.contents = await recognizeText(post.slug, post.scans);
  }

  return {
    props: {
      post,
    },
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();

  return {
    fallback: false,
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
  };
}
