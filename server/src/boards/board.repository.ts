import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description, status } = createBoardDto;

    const board = this.create({
      title,
      description,
      status,
      user,
    });

    await this.save(board);

    delete board.user;
    return board;
  }

  async updateBoard(updateBoardDto: UpdateBoardDto, user: User) {
    const { id, title, description, status } = updateBoardDto;

    const board = await this.update(
      { id },
      {
        title,
        description,
        status,
        user: user,
      },
    );

    return board;
  }
}
