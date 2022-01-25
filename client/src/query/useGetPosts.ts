import { getPosts } from "@/apis/board";
import { IGetPostsParam } from "@/types/board";
import { useQuery } from "react-query";

const useGetPosts = ({ take, page }: IGetPostsParam) => {
  return useQuery("posts", () => getPosts({ take, page }));
};

export default useGetPosts;
