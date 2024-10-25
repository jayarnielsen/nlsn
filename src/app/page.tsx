import Head from "next/head";
import * as React from "react";

import { Posts } from "../components/posts";
import { getAllPosts } from "../lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jay Nielsen's Blog",
};

export default async function Page() {
  const posts = getAllPosts();
  return <Posts posts={posts} />;
}
