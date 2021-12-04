export interface BookItem {
  publishedDate: string;
  author: string;
  authors: string[];
  categories: string[];
  title: string;
  imageLinks: string;
  description: string;
  canonicalVolumeLink: string
  pageCount: number;
  language: string;
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
  description: string;
  canonicalVolumeLink: string
  pageCount: number;
  language: string;
  publishedDate: string;
}
