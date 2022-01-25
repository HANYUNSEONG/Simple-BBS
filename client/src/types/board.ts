import { IUser } from "./auth";

export type BoardType = "PUBLIC" | "PRIVATE";
export const BoardStatus: { [key in BoardType]: BoardType } = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
};
export const BoardStatusKo: { [key in BoardType]: string } = {
  PUBLIC: "공개",
  PRIVATE: "비공개",
};

export interface IBoardItem extends IBoardDefault {
  id: number;
}

export interface IBoardDefault {
  id: number;
  title: string;
  description: string;
  status: BoardType;
  user: IUser;
  createdDate: Date;
}

export interface IGetPostsParam {
  take?: number;
  page: number;
}
