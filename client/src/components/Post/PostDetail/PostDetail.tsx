import { IBoardDefault } from "@/types/board";
import dynamic from "next/dynamic";
import { PostDetailWrapper, ViewerWrapper } from "./styles";
import moment from "moment";

const Viewer = dynamic(() => import("@/components/Viewer"), { ssr: false });

interface IPostDetailProps {
  post: IBoardDefault;
}

function PostDetail({ post }: IPostDetailProps) {
  const { title, id, user, description, createdDate } = post;

  return (
    <PostDetailWrapper>
      <div className="title-wrapper">
        <h1>{title}</h1>
        <p>
          {user.username} | {moment(createdDate).format("YYYY.MM.DD")}
        </p>
      </div>
      <ViewerWrapper>
        <Viewer initialValue={description} />
      </ViewerWrapper>
    </PostDetailWrapper>
  );
}

export default PostDetail;
