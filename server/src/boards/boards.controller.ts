import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
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

@Controller('boards')
@UseGuards(AuthGuard())
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
  getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @ApiOperation({
    summary: '게시글 작성하는 API',
    description: '게시글을 작성한다.',
  })
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
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
  @ApiOperation({
    summary: '게시글 삭제 API',
    description: '게시글을 삭제한다.',
  })
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
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
