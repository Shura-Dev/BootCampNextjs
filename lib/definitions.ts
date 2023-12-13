import { Post } from "@prisma/client";

export type Theme = "light" | "dark";

export type PaginatedPostsResponse = {
  posts: Post[];
  pagination: {
    totalPages: number;
    currentPage: number;
    offset: number;
    limit: number;
    hasPrev: boolean;
    hasNext: boolean;
  };
};
