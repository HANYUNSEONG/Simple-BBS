import { IBoardDefault } from "@/types/board";
import dynamic from "next/dynamic";
import { PostDetailWrapper, ViewerWrapper } from "./styles";
import dayjs from "dayjs";
import { useAuth } from "@/contexts/AuthProvider/AuthProvider";
import Button from "@/components/common/Button";
import Head from "next/head";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { deletePost } from "@/apis/board";
import Modal from "@/components/common/Modal";
import useModal from "@/hooks/useModal";
import Confirm from "@/components/common/Modal/Confirm";
import { useRouter } from "next/router";

const Viewer = dynamic(() => import("@/components/Viewer"), { ssr: false });

interface IPostDetailProps {
  post: IBoardDefault;
}

function PostDetail({ post }: IPostDetailProps) {
  const router = useRouter();
  const { status, openModal, closeModal } = useModal();
  const { userData } = useAuth();
  const { title, id, user, description, createdDate } = post;
  const deletePostMutation = useMutation((id: number) => deletePost(id));

  const handleRemovePost = useCallback(() => {
    deletePostMutation.mutate(id, {
      onSuccess: (result) => {
        router.push("/");
      },
    });
  }, [deletePostMutation, id, router]);

  return (
    <>
      <Head>
        <title>
          {title} | {user.username}
        </title>
      </Head>
      <Modal status={status} closeModal={closeModal}>
        <Confirm
          title="삭제하시겠습니까?"
          buttons={
            <>
              <Button buttonTheme="transparent" onClick={handleRemovePost}>
                삭제
              </Button>
              <Button buttonTheme="transparent" onClick={closeModal}>
                취소
              </Button>
            </>
          }
        />
      </Modal>
      <PostDetailWrapper>
        <div className="title-wrapper">
          <h1>{title}</h1>
          <div>
            <p>
              {user.username} | {dayjs(createdDate).format("YYYY.MM.DD")}
            </p>
            {userData?.id === user.id && (
              <Button
                buttonSize="small"
                buttonTheme="transparent"
                noStyle
                onClick={openModal}
              >
                삭제
              </Button>
            )}
          </div>
        </div>
        <ViewerWrapper>
          <Viewer initialValue={description} />
        </ViewerWrapper>
      </PostDetailWrapper>
    </>
  );
}

export default PostDetail;
