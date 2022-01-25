import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Pagination, PaginationOptions } from 'src/util/pagination';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getAllBoards({
    take,
    page,
  }: PaginationOptions): Promise<Pagination<Board>> {
    const postsQuery = this.boardRepository
      .createQueryBuilder('board')
      .innerJoinAndSelect('board.user', 'user')
      .where('board.status <> :status ', { status: BoardStatus.PRIVATE })
      .select(['board', 'user.username', 'user.id']);

    const posts = await postsQuery
      .take(take)
      .skip(take * (page - 1))
      .orderBy('board.createdDate', 'DESC')
      .getMany();

    const totalCount = await postsQuery.getCount();

    return new Pagination<Board>({
      results: posts,
      total: totalCount,
      currentPage: Number(page),
    });
  }

  async getMyBoards(user: User): Promise<Board[]> {
    return await this.boardRepository.find({ user: user });
  }

  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  updateBoard(updateBoardDto: UpdateBoardDto, user: User) {
    return this.boardRepository.updateBoard(updateBoardDto, user);
  }

  async getBoardById(id: string): Promise<Board> {
    const found = await this.boardRepository
      .createQueryBuilder('board')
      .where({ id })
      .innerJoinAndSelect('board.user', 'user')
      .select(['board', 'user.username', 'user.id'])
      .getOne();

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async deleteBoard(id: string): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  async updateBoardStatus(id: string, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
