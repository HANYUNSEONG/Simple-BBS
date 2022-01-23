import PostList from "@/components/Post/PostList";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Simple BBS | 메인</title>
      </Head>
      <PostList />
    </div>
  );
};

export default Home;
