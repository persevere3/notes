import {MysqlDb, MssqlDb} from '../modules/db';

// 定義數據庫的映射
class ArticleClass{
  title:string | undefined;
  desc:string | undefined;
}

var ArticleMysql = new MysqlDb<ArticleClass>();
var ArticleMssql = new MssqlDb<ArticleClass>();

export{ArticleClass, ArticleMysql, ArticleMssql}