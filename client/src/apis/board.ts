import { IBoardDefault, IGetPostsParam } from "@/types/board";
import CustomAxios from "./customAxios";

// 게시글 작성
export const writeBoard = async (writeData: IBoardDefault) => {
  return await CustomAxios.post(`/boards`, writeData);
};

// 게시글 가져오기
export const getPost = async (id: string) => {
  return await CustomAxios.get(`/boards/${id}`);
};

// 게시글 다 가져오기
export const getPosts = async ({ take = 10, page }: IGetPostsParam) => {
  return await CustomAxios.get(`/boards?page=${page}&take=${take}`);
};
