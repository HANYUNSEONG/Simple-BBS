import { IBoardDefault } from "@/types/board";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { PostItemWrapper } from "./styles";

interface IPostItemProps {
  post: IBoardDefault;
}

function PostItem({ post }: IPostItemProps) {
  const router = useRouter();
  const { title, id, createdDate, user } = post;

  const handleMoveDetail = useCallback(() => {
    router.push(`/post/${id}`);
  }, [id, router]);

  return (
    <PostItemWrapper onClick={handleMoveDetail}>
      <h1>{title}</h1>
      <p onClick={(e) => e.stopPropagation()}>
        <Link href="">{user.username}</Link> |{" "}
        {dayjs(createdDate).format("YYYY.MM.DD")}
      </p>
    </PostItemWrapper>
  );
}

export default PostItem;
