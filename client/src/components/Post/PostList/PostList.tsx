import { IBoardDefault } from "@/types/board";
import PostItem from "../PostItem";
import { PostListWrapper } from "./styles";

interface IPostListProps {
  posts: IBoardDefault[];
}

function PostList({ posts }: IPostListProps) {
  return (
    <PostListWrapper>
      {posts.map((post, i) => (
        <PostItem key={post.title + i} post={post} />
      ))}
    </PostListWrapper>
  );
}

export default PostList;
