export interface Book {
  Photo: Blob | string;
  Author: string;
  Department: string;
  Language: string;
  NumOfPages: string;
  Price: string | any;
  File: File | string;
  Size: string;
  Description: string;
  Name: string;
}

export interface AllBooks {
  id: number;
  Name: string;
  Author: string;
  Photo: Blob | string;
  Department: string;
  Price: string;
  Language: string;
  NumOfPages: number;
  NumOfDownloads: number;
  NumOfReads: number;
  Size: string;
  Description: string;
  created_at: string;
  updated_at: string;
}
