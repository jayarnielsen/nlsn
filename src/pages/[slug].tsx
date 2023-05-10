import { Heading, Text } from "@gaze-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../lib/api";
import { PostType } from "../types";
import { recognizeText } from "../lib/recognize-text";

interface PostProps {
  post: PostType;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Jay Nielsen's Blog</title>
      </Head>
      {post.title && <Heading as="h2">{post.title}</Heading>}
      {/* <Text>{post.description}</Text> */}
      {post.contents?.map((content) => (
        <div>
          {content.split("\n\n").map((paragraph) => (
            <Text>{paragraph}</Text>
          ))}
        </div>
      ))}
    </>
  );
};

export default Post;

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
    "contents",
  ]);

  const contents = await recognizeText(post.slug, post.contents);

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
