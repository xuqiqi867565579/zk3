var express = require('express');
var router = express.Router();

var  query=require("../mysql/index.js");
/* GET home page. */
router.get('/api/get/train_tickets', function(req, res, next) {
  var sql='select * from root';
  query(sql,(err,result)=>{
      if(err){
        res.json({code:0,msg:error})
      }else{
        res.json({code:1,data:result});
      }
  })
});

module.exports = router;
