import { Heading, Stack, Text } from "@gaze-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../lib/api";
import { PostType } from "../types";
import { recognizeText } from "../lib/recognize-text";
import { Post } from "@/components/post";
import { Layout } from "@/components/layout/layout";

interface PostProps {
  post: PostType;
}

const PostPage: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.title} | NLSN`}</title>
      </Head>
      <Layout>
        <Post post={post} />
      </Layout>
    </>
  );
};

export default PostPage;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "slug",
    "description",
    "scans",
    "model",
    "supplements",
  ]);

  const contents = await recognizeText(post.slug, post.scans);

  return {
    props: {
      post: {
        ...post,
        contents,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
