export interface IPageProps<T> {
  params: { [key: string]: string } | T;
  searchParams: { [key: string]: string } | T;
}

export interface INavbarItem {
  id: number;
  title: string;
  link: string;
}
