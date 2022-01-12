export type BoardType = "PUBLIC" | "PRIVATE";

export interface IBoardItem {
  id: number;
  title: string;
  description: string;
  status: BoardType;
}
