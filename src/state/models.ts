export interface BookItem {
  publishedDate: string;
  author: string;
  authors: string[];
  categories: string[];
  title: string;
  imageLinks: string;
}

export interface ClickedBookItem {
  authors: string[];
  categories: string[];
  title: string;
  imageLinks: any;
  authorsInfo: string;
  categoriesInfo: string;
  titleInfo: string;
  imageInfo: string;
}
