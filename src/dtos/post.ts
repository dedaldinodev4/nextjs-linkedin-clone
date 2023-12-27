

export interface IPost {
  id: string;
  avatar: string;
  user: string;
  since?: string;
  description: string;
  time: string;
  content: string[];
  image?: string;
  likes: number;
  tags?: string[];
}

export interface IPostRequest {
  content: string;
  image: string | null;
  tags: string | null;
}