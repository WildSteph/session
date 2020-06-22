var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session-in', (req, res ) => {
  // Initialisation de la variable de sessions "maVariable" avec TRUE
  req.session.song = 'be bop a lula';
  res.send('teste');  
});

router.get('/session-out', (req, res ) => {
  // Initialisation de la variable de sessions "maVariable" avec TRUE
 
  res.send(`${req.session.song}`);   
});
 


module.exports = router;
