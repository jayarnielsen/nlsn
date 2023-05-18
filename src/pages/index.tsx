import { Layout } from "@/components/layout/layout";
import { Posts } from "@/components/posts";
import { getAllPosts } from "@/lib/api";
import { PostType } from "@/types";
import { Box, Center, Text } from "@gaze-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

interface HomeProps {
  posts: PostType[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>NLSN</title>
      </Head>
      <Layout>
        <Posts posts={posts} />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getAllPosts(["slug", "title", "description"]);
  return {
    props: { posts },
  };
};
