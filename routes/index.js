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
router.get('/', (req, res) => {
  res.render('index', { title: 'Message Board', messages: messages });
});

/* Get new message form. */
router.get('/new', (req, res) => {
  res.render('form');
});

/* Submit a new message. */
router.post('/new', (req, res) => {
  const messageUser = req.body.user;
  const messageText = req.body.message;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
})



module.exports = router;
