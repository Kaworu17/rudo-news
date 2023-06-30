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

export interface AuthToken {
  [key: string]: any;
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}

export interface GetAuthToken {
  [key: string]: any;
  access_token: string | null;
  expires_in: number | null;
  token_type: string | null;
  scope: string | null;
  refresh_token: string | null;
}

export interface Departments {
  count: number;
  next?: null;
  previous?: null;
  pages: number;
  page: number;
  results?: ResultsDepartments[] | null;
}
export interface ResultsDepartments {
  id: number;
  name: string;
  subcategories?: null[] | null;
}

export interface Comments {
  count: number;
  next: string;
  previous?: null;
  pages: number;
  page: number;
  results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
  id: number;
  user?: User | null;
  text: string;
}
export interface User {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  departments?: DepartmentsEntity[] | null;
  platform: string;
  device_id?: null;
}
export interface DepartmentsEntity {
  id: number;
  name: string;
}

export interface Profile {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  departments?: DepartmentsEntity[] | null;
  platform: string;
  device_id?: null;
}
