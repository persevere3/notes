import { Controller, Get, Post, Request, Query, Body, Param, Headers} from '@nestjs/common';
import { TestService } from './test.service'

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get('/add')
  addTest() {
    return this.testService.addTest();
  }

  // @Get('/getTestByID')
  // getTestByID(@Query() query): any {
  //   let id: number = parseInt(query.id);
  //   return this.testService.getTestByID(id);
  // }
  // @Get('/getTestByID/:id/:name')
  // getTestByParamsID(@Param() Param): any {
  //   let id: number = parseInt(Param.id);
  //   let name: string = Param.name;
  //   console.log(name)
  //   return this.testService.getTestByID(id);
  // }
  // @Post('/add')
  // addTest(@Body() body): any {
  //   let name = body.name
  //   return this.testService.addTest(name);
  // }
}
