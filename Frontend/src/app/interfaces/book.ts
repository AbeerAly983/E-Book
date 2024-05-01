export interface Book {
    id: number;
    Photo: string;
    Author: string;
    Department: string;
    Language: string;
    NumOfPages: number;
    NumOfDownloads: number;
    NumOfReads: number;
    Price: string;
    File: string;
    Size: string;
    Description: string;
    created_at: string;
    updated_at: string;
    Name: string;
}

export interface PaymentInfo {
    paymentMethod: string;
    user_id: number;
    book_id: number;
    book_name: string;
    price: number;
}