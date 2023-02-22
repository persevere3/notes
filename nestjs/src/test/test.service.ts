import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity'

let list: any = [
  {id: 0, name: 'a'},
  {id: 1, name: 'b'},
  {id: 2, name: 'c'},
]

@Injectable()
export class TestService {
  constructor(@InjectRepository(Test) private readonly test:Repository<Test>){}
 
  addTest() {
    let data = new Test()
    data.name = 'AAA'
    data.age = 18
    return this.test.save(data)
  }



  // getTest(): any {
  //   return {
  //     code: 200,
  //     data: list,
  //     msg: '請求列表成功'
  //   }
  // }
  // getTestByID(id: number): any {
  //   let obj: any = list.find(item => item.id === id)

  //   return {
  //     code: 200,
  //     data: obj,
  //     msg: '請求列表成功'
  //   }
  // }

  // addTest(name: string): any {
  //   let obj: any = {
  //     id: list.length,
  //     name
  //   }
  //   list.push(obj)

  //   return {
  //     code: 200,
  //     data: list,
  //     msg: '添加列表成功'
  //   }
  // }
}
