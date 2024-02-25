import { Body, Controller, Get, Post } from "@nestjs/common";
import { BooksService } from './books.service';
import { BookEntity } from "./entities/book.entity";
import { CreateBookDto } from "./dtos/create-book.dto";


@Controller('books')

export class BooksController{
    constructor(private BooksService: BooksService) {}

    @Get()
   async findAll(): Promise<BookEntity[]>{
    const book: BookEntity[] = await this.BooksService.findAllBooks()
    return book;  
      
    }

    @Post()
    async create(@Body() createBookDto: CreateBookDto): Promise<BookEntity>{
        const newBook: BookEntity = await this.BooksService.createBook(createBookDto)
        return newBook

    }
}