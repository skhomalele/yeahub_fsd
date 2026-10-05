export interface ApiResponse<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
}
