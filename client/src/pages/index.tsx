import PostList from "@/components/Post/PostList";
import useGetPosts from "@/query/useGetPosts";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { status, data, error, isFetching } = useGetPosts();

  return (
    <div>
      <Head>
        <title>Simple BBS | 메인</title>
      </Head>
      {status === "success" && <PostList posts={data?.data} />}
    </div>
  );
};

export default Home;
