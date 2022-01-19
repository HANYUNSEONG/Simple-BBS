import { IBoardDefault } from "@/types/board";
import { PostDetailWrapper } from "./styles";

interface IPostDetailProps {
  post: IBoardDefault;
}

function PostDetail({ post }: IPostDetailProps) {
  return (
    <PostDetailWrapper>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {post.status}
    </PostDetailWrapper>
  );
}

export default PostDetail;
