import { PaginationResult } from './pagination.results';

export class Pagination<T> {
  public results: T[];
  public pageTotal: number;
  public total: number;
  public currentPage: number;

  constructor(paginationResult: PaginationResult<T>) {
    this.results = paginationResult.results;
    this.pageTotal = paginationResult.results.length;
    this.total = paginationResult.total;
    this.currentPage = paginationResult.currentPage;
  }
}
