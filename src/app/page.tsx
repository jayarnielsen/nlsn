import Head from "next/head";
import * as React from "react";

import { SiteLayout } from "../components/layout";
import { Posts } from "../components/posts";
import { getAllPosts } from "../lib/api";

export default async function Page() {
  const posts = getAllPosts();
  return (
    <>
      <Head>
        <title>NLSN</title>
      </Head>
      <SiteLayout>
        <Posts posts={posts} />
      </SiteLayout>
    </>
  );
}
