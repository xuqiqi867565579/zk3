var  mysql=require("mysql");
var config={
    port:"3306",
    host:"localhost",
    user:"root",
    password:"root",
    database:"zk3",
    connectionLimit:100
}

var connection=mysql.createPool(config);
module.exports=function(sql,query,fn){
    query=query||[];
    fn=fn?fn:query;

    connection.getConnection((err,connect)=>{
        if(err){
            fn(err)
        }else{
            connect.query(sql,query,(err,result)=>{
                queryBack(err,result);
                connect.release();
            })
        }
    })

    function  queryBack(err,result){
        if(err){
            fn(er)
        }else{
            fn(null,result);
        }
    }

}