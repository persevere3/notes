import {MysqlDb, MssqlDb} from '../modules/db';

// 定義數據庫的映射
class UserClass{
  username:string | undefined;
  password:string | undefined;
}

var UserMysql = new MysqlDb<UserClass>();
var UserMssql = new MssqlDb<UserClass>();

export{UserClass, UserMysql, UserMssql}