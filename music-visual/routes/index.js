let express = require('express');
let router = express.Router();
let path = require('path');
let fs = require('fs');
let catalog = path.join(__dirname,"../public/musics");

/* GET home page. */
router.get('/', function (req, res, next) {

    fs.readdir(catalog,(err,dirName)=>{
        if (err){
            console.log(err);
        } else {
            res.render('index', {title: 'MusicVisual',musics:dirName},);
        }
    });
});

module.exports = router;
