export interface IBlogCategory {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
export interface IBlogWriter {
  _id: string;
  mobile: string;
  username: string;
  username_lc: string;
  password: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface IBlog {
  category: IBlogCategory;
  writer: IBlogWriter;
  _id: string;
  content: string;
  heroImage: string;
  status: number;
  nextBlogs: IBlog[];
  previousBlogs: IBlog[];
  tag: string[];
  title: string;
  createdAt: string;
  updatedAt: string;
  likes?: number;
  readTime?: number;
}
export interface IBlogs {
  count: number;
  data: IBlog[];
}
export interface IBlogsQuery {
  page: number | string;
  limit: number | string;
}
export interface IBlogQuery {
  blogID: string;
}
