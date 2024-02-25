import { Injectable } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';
import { CreateBookDto } from './dtos/create-book.dto';


@Injectable()
export class BooksService {
  stock: BookEntity[];
  constructor() {
    this.stock = [
      {
        id: 1,
        title: 'Book Title',
        author: 'Author Name',
      },
      {
        id: 2,
        title: 'Another Book Title',
        author: 'Other Author Name',
      },
      {
        id: 3,
        title: 'One More Book',
        author: 'The Author',
      },
    ];
  }

  async findAllBooks(): Promise<BookEntity[]> {
    return this.stock;
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const newBook: BookEntity = {
      id: this.stock.length + 1,
      title: createBookDto.title,
      author: createBookDto.author,
    };
    this.stock.push(newBook);
    return newBook;
  }
}
