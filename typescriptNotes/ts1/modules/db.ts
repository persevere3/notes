interface DBI<T>{
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}

class MysqlDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log('MysqlDb',info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list =[
      {
        title:'xxx',
        dsc:'xxx',
      }
    ];
    return list;
  }
}

class MssqlDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log('MssqlDb',info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list =[
      {
        title:'xxx',
        dsc:'xxx',
      },
      {
        title:'xxx',
        dsc:'xxx',
      }
    ];
    return list;
  }
}

export{ MysqlDb, MssqlDb};