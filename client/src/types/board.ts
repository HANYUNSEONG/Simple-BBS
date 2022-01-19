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
  title: string;
  description: string;
  status: BoardType;
}
