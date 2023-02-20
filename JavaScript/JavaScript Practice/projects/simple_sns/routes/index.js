var express = require('express');
var router = express.Router();

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleCredentials = require('../config/google.json');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb+srv://Leo:Pinemoon1!@cluster0.fp1mua3.mongodb.net/test', { useNewUrlParser: true });
var Schema = mongoose.Schema;

var Post = new Schema({
  author: String,
  picture: String,
  contents: String,
  date: Date,
  like: Number,
  comments: Array
});

var postModel = mongoose.model('Post', Post);

var check_user = function(req){ // 비로그인 유저인지 로그인 유저인지 확인
  var answer;

  if(req.session.passport === undefined || req.session.passport.user === undefined) { // 처음 접속하고 아무런 로그인을 하지 않았을 때와 로그인을 했다가 로그아웃 했을 때의 세션 형태가 다르기에 두 개 모두 if문에 넣은 것.
    // 비로그인 유저일 때
    console.log('로그인이 필요함');
    return false;
  } else { // 로그인이 되어 있을 때
    return true;
  }
};

router.use(passport.initialize());
router.use(passport.session());

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user) {
    var name = req.user.displayName;
    var picture = req.user.photos[0].value;
    res.render('index', { name: name, picture: picture });
  } else {
    res.render('index', { name: '비로그인 유저', picture: '/images/user.png' });
  }
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/load', function(req, res, next) {
  postModel.find({}, function(err, data) {
    res.json(data);
  });
});

router.post('/write', function(req, res, next) {
  var author = req.body.author;
  var picture = req.body.picture;
  var contents = req.body.contents;
  var date = Date.now();
  var post = new postModel();

  post.author = author;
  post.picture = picture;
  post.contents = contents;
  post.date = date;
  post.like = 0;
  post.comments = [];
  post.save(function(err) {
    if(err) {
      throw err;
    } else {
      res.json({status: "SUCCESS"});
    }
  });
});

// 좋아요 기능
router.post('/like', function(req, res, next) {
  var _id = req.body._id;
  var contents = req.body.contents;
  postModel.findOne({ _id: _id }, function(err, post) {
    if(err) {
      throw err;
    } else {
      post.like++;

      post.save(function(err) {
        if(err) {
          throw err;
        } else {
          res.json({ status: "SUCCESS" });
        }
      });
    }
  });
});

// 삭제 기능
router.post('/del', function(req, res, next) {
  var _id = req.body._id;
  
  if(check_user(req)) {
    postModel.deleteOne({ _id: _id }, function(err, result) {
      if(err) {
        throw err;
      } else {
        res.json({ status: "SUCCESS" });
      }
    });
  }
});

// 수정 기능
router.post('/modify', function(req, res, next) {
  var _id = req.body._id;
  var contents = req.body.contents;

  if(check_user(req)) {
    postModel.findOne({_id: _id}, function(err, post) {
      if(err) {
        throw err;
      } else {
        post.contents = contents;
        post.save(function(err) {
          if(err) {
            throw err;
          } else {
            res.json({ status: "SUCCESS" });
          }
        });
      }
    });
  }
});

// 댓글 기능
router.post('/comment', function(req, res, next) {
  var _id = req.body._id;
  var author = req.body.author;
  var comment = req.body.comment;
  var date = Date.now();

  postModel.findOne({ _id: _id }, function(err, post) {
    if(err) {
      throw err;
    } else {
      post.comments.pust({ author: author, comment: comment, date: date });
      post.save(function(err) {
        if(err) {
          throw err;
        } else {
          res.json({ status: "SUCCESS" });
        }
      });
    }
  });
});

passport.serializeUser(function(user, done) { // 로그인 성공 시 이 메소드를 이용해 세션에 사용자 정보 저장
  done(null, user);
});

passport.deserializeUser(function(obj, done) { // 페이지에 접근해서 서버로 요청이 올 때마다 이 메소드를 사용. 세션에 저장된 값을 꺼내와서 req.user 객체에 유저 정보를 저장하기 위함.
  done(null, obj);
});

passport.use(new GoogleStrategy({
  clientID: googleCredentials.web.client_id,
  clientSecret: googleCredentials.web.client_secret,
  callbackURL: "/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    return done(null, profile);
  });
}
));

router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// 로그아웃
router.get('/logout', function(req, res) { 
  req.logout();
  req.redirect('/');
});

module.exports = router;
