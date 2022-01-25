import React from "react";
import { PostListWrapper } from "./styles";

interface IPostListProps {
  children: React.ReactNode;
}

function PostList({ children }: IPostListProps) {
  return <PostListWrapper>{children}</PostListWrapper>;
}

export default PostList;
