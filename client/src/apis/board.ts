import { IBoardDefault } from "@/types/board";
import CustomAxios from "./customAxios";

// 게시글 작성
export const writeBoard = async (writeData: IBoardDefault) => {
  return await CustomAxios.post(`/boards`, writeData);
};

// 게시글 가져오기
export const getPost = async (id: string) => {
  return await CustomAxios.get(`/boards/${id}`);
};
