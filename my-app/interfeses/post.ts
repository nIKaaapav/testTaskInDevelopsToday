export interface PostI {
  id: string | number;
  title: string;
  body: string;
  comments?: Comment[];
}

export interface CommentI {
  id: number | string;
  postId: number | string;
  body: string;
}
