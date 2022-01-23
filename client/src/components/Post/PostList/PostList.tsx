import PostItem from "../PostItem";
import { PostListWrapper } from "./styles";

function PostList() {
  return (
    <PostListWrapper>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostListWrapper>
  );
}

export default PostList;
