export interface TestData {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  content: string;
  body: string;
  tags: string[];
  date: string;
}

export interface NewsDataObject {
  count: number;
  next: string;
  previous?: null;
  pages: number;
  page: number;
  results: NewsData[];
}

export interface NewsData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  short_description: string;
  category: Category;
  creation_date: string;
  is_favorite: boolean;
}

export interface Category {
  id: number;
  name: string;
  subcategories?: null[] | null;
}

export interface CategoryObject {
  count: number;
  next?: null;
  previous?: null;
  pages: number;
  page: number;
  results?: Category[] | null;
}
