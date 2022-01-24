import { getPosts } from "@/apis/board";
import { useQuery } from "react-query";

const useGetPosts = () => {
  return useQuery("posts", getPosts);
};

export default useGetPosts;
