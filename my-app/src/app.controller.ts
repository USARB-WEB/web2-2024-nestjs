import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Req() request: Request) {
    return this.appService.create(request.body);
  }

  @Get()
  get(){
    return this.appService.findAll();
  }

  @Put(":id")
  update(@Param('id', ParseIntPipe) id: number, @Req() request: Request) {
    return this.appService.update(id, request.body);
  }

  @Delete()
  delete() {
    return 'This action removes a cat';
  }
}
