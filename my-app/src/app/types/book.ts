export interface Book {
    isbn: number;
    title: string;
    author: string;
    owned?: boolean;
}