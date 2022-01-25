import { getPosts } from "@/apis/board";
import { useInfiniteQuery } from "react-query";

const useGetInfiniteQuery = () => {
  return useInfiniteQuery(
    ["posts"],
    ({ pageParam = 1 }) => getPosts({ page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        // 게시글 개수가 10개 미만일 때 isLast = true
        const isLast = lastPage.data.results.length < 10;
        return isLast ? undefined : lastPage.data.currentPage + 1;
      },
      refetchOnWindowFocus: false,
    }
  );
};

export default useGetInfiniteQuery;
