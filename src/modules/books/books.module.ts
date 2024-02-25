import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [],
})
export class BooksModule {}
