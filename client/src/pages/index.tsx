import PostList from "@/components/Post/PostList";
import { IBoardDefault } from "@/types/board";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useRef } from "react";
import useGetInfinitePosts from "@/query/useGetInfinitePosts";
import PostItem from "@/components/Post/PostItem";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Loading from "@/components/common/Loading";
import { FlexCenterBox } from "@/theme/util";

const Home: NextPage = () => {
  const { data, fetchNextPage, status, hasNextPage, isFetchingNextPage } =
    useGetInfinitePosts();

  const handleScroll: IntersectionObserverCallback = useCallback(
    (
      [entries]: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (entries.isIntersecting && hasNextPage) {
        observer.unobserve(entries.target);
        fetchNextPage();
        observer.observe(entries.target);
      }
    },
    [fetchNextPage, hasNextPage]
  );

  const { setTarget } = useIntersectionObserver({
    callback: handleScroll,
    options: {
      threshold: 1,
    },
  });

  return (
    <>
      <Head>
        <title>Simple BBS | 메인</title>
      </Head>
      <PostList>
        {status === "success" &&
          data?.pages.map((page) =>
            page.data.results?.map((post: IBoardDefault, index: number) => (
              <PostItem key={index} post={post} />
            ))
          )}
        {isFetchingNextPage && (
          <FlexCenterBox>
            <Loading size="default" />
          </FlexCenterBox>
        )}
        <div ref={setTarget}></div>
      </PostList>
    </>
  );
};

export default Home;
