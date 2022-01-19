import { getPost } from "@/apis/board";
import NotFoundPost from "@/components/Post/NotFoundPost";
import PostDetail from "@/components/Post/PostDetail";
import { IBoardDefault } from "@/types/board";
import { GetServerSidePropsContext, NextPage } from "next";

const PostDetailPage: NextPage<{
  post: IBoardDefault;
}> = (props) => {
  const post = props?.post;

  return post ? <PostDetail post={props?.post} /> : <NotFoundPost />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query?.id;
  let resultPost = null;

  if (id) {
    try {
      const post = await getPost(id as string);
      resultPost = post.data;
    } catch (error: any) {}
  }

  return {
    props: {
      post: resultPost,
    },
  };
}

export default PostDetailPage;
