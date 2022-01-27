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
import { useSetRecoilState } from "recoil";
import { toastAtom } from "@/recoil/toast/atom/toast";

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
  const setToastMessage = useSetRecoilState(toastAtom);

  const handleRemovePost = useCallback(() => {
    deletePostMutation.mutate(id, {
      onSuccess: () => {
        setToastMessage({
          showing: true,
          type: "success",
          message: "게시글 삭제를 완료했습니다.",
        });
        router.push("/");
      },
      onError: () => {
        setToastMessage({
          showing: true,
          type: "error",
          message: "게시글 삭제 처리 중 오류가 발생했습니다.",
        });
      },
    });
  }, [deletePostMutation, id, router, setToastMessage]);

  const handleMoveModifyPage = useCallback(() => {}, []);

  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
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
              <div>
                <Button
                  buttonSize="small"
                  buttonTheme="transparent"
                  noStyle
                  onClick={handleMoveModifyPage}
                >
                  수정
                </Button>
                <Button
                  buttonSize="small"
                  buttonTheme="transparent"
                  noStyle
                  onClick={openModal}
                >
                  삭제
                </Button>
              </div>
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
