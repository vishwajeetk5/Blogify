import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extendedd: true }));

const db = [];
app.get('', (req, res) => {

    res.render('index.ejs');
})

app.get('/write', (req, res) => {
    res.render('index.ejs',{flag:1});
})

app.post('/save', (req, res) => {
    let tempObj = { tit: req.body.title, cont: req.body.content }
    db.push(tempObj)
    res.redirect('/showall');
})

app.get('/showall', (req, res) => {
    if(db.length==0){
        res.render('index.ejs',{mydb:db,flag:0});
    }
    else
    res.render('index.ejs',{mydb:db});
})

app.listen(3000, () => {
    console.log("listening on 3000 port");
})

