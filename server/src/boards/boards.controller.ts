import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetBoardsDto } from './dto/get-boards.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('boards')
@ApiTags('Boards API')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  @ApiOperation({
    summary: '게시글 모두 가져오는 API',
    description: '게시글을 모두 가져온다.',
  })
  @ApiResponse({
    description: '게시글을 모두 가져온다',
    type: GetBoardsDto,
  })
  getAllBoards(@Query('take') take: number, @Query('page') page: number) {
    return this.boardsService.getAllBoards({
      take,
      page,
    });
  }

  @Get('/my')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '내 게시글만 모두 가져오는 API',
    description: '내 게시글만 모두 가져온다.',
  })
  @ApiResponse({
    description: '내 게시글만 모두 가져온다.',
    type: GetBoardsDto,
  })
  getMyBoards(@GetUser() user: User): Promise<Board[]> {
    return this.boardsService.getMyBoards(user);
  }

  @Post()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '게시글 작성하는 API',
    description: '게시글을 작성한다.',
  })
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto, user);
  }

  @Get('/:id')
  @ApiOperation({
    summary: '게시글 1개 가져오는 API',
    description: '게시글 ID에 맞는 게시글을 가져온다.',
  })
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    console.log(id);
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '게시글 삭제 API',
    description: '게시글을 삭제한다.',
  })
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '게시글 상태 업데이트 API',
    description: '게시글의 상태를 업데이트한다.',
  })
  updateBoardStatus(
    @Param('id') id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
