import type { NextPage } from "next";

import Head from "next/head";
import * as React from "react";

import { Layout } from "../components/layout";
import { Posts } from "../components/posts";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types";

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

export const getStaticProps = () => {
  const posts = getAllPosts(["slug", "title", "description", "scans"]);
  return {
    props: { posts },
  };
};
