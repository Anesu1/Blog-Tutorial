var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   const articles = [{
//     title:"test Article",
//     createdAt: new Date,
//     description:"My description"
// },
// {
//     title:"test Article 2",
//     createdAt: new Date,
//     description:"My description 2"
// }
// ]
// res.render('index', { articles: "articles"})
  res.render('index', { title: 'Expresss' });
});



module.exports = router;
