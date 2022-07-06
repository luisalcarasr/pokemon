export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>
}
