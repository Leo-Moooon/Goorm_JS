var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://LeoMoon:Pinemoon1!@cluster0.pbkyn4b.mongodb.net/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
  console.log("DB connected");
});

var Schema = mongoose.Schema;

var Memo = new Schema({
  author: String,
  contents: String,
  date: Date
});

var memoModel = mongoose.model('Memo', Memo);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

// load 메소드 처리
router.get('/load', function(req, res, next) {
  memoModel.find({}, function(err, data) {
    res.json(data); // 메모 데이터 목록 요청, 생성한 mongoDBdml memoModel을 이용해 아무 질의문 없이 find() 메소드를 요청해 전체 데이터를 전달받고 이를 res 객체를 통해 클라이언트에 json() 형태로 전달한다. 아래 다른 메소드도 같은 방식이다.
  });
});

// write 메소드 처리
router.post('/write', function(req, res, next) {
  var author = req.body.author;
  var contents = req.body.contents;
  var date = Date.now(); // 현재 날짜, 시간

  var memo = new memoModel();

  memo.author = author;
  memo.contents = contents;
  memo.date = date;
  memo.comments = [];

  memo.save(function (err) {
    if(err) {
      throw err;
    } else {
      res.json({status: "SUCCESS"});
    }
  });
});

// del 메소드 처리
router.post('/del', function(req, res, next) {
  var _id = req.body._id;
  
  memoModel.deleteOne({_id: _id}, function(err, result) {
    if(err) {
      throw err;
    } else {
      res.json({status: "SUCCESS"});
    }
  });
});

// modify 메소드 처리
router.post('/modify', function(req, res, next) {
  var _id = req.body._id;
  var contents = req.body.contents;

  memoModel.findOne({_id: _id}, function(err, memo) {
    if(err) {
      throw err;
    } else {
      memo.contents = contents;

      memo.save(function(err) {
        if(err) {
          throw err;
        } else {
          res.json({status: "SUCCESS"});
        }
      });
    }
  });
});

module.exports = router;
