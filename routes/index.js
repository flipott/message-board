var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Jerry",
    added: new Date()
  },
  {
    text: "This is a cool site.",
    user: "Antonio",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = router;
