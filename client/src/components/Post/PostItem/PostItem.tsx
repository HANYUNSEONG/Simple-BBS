import { IBoardDefault } from "@/types/board";
import { useRouter } from "next/router";
import { PostItemWrapper } from "./styles";

interface IPostItemProps {
  post: IBoardDefault;
}

function PostItem({ post }: IPostItemProps) {
  const router = useRouter();
  const { title, id } = post;

  const handleMoveDetail = () => {
    router.push(`/post/${id}`);
  };

  return <PostItemWrapper onClick={handleMoveDetail}>{title}</PostItemWrapper>;
}

export default PostItem;
