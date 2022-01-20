import { IBoardDefault } from "@/types/board";
import dynamic from "next/dynamic";
import { PostDetailWrapper, ViewerWrapper } from "./styles";

const Viewer = dynamic(() => import("@/components/Viewer"), { ssr: false });

interface IPostDetailProps {
  post: IBoardDefault;
}

function PostDetail({ post }: IPostDetailProps) {
  return (
    <PostDetailWrapper>
      <div className="title-wrapper">
        <h1>{post.title}</h1>
      </div>
      <ViewerWrapper>
        <Viewer initialValue={post.description} />
      </ViewerWrapper>
    </PostDetailWrapper>
  );
}

export default PostDetail;
