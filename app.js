
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let items=["Eat", "Sleep"];
let workItems = [];
const date = require(__dirname+"/date.js");
// console.log(date());
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req,res){
    let day = date.getDate();
    res.render("list",{listTitle: day, items:items});
});

app.get('/work', function(req,res){
    res.render("list", {listTitle:"Work List",items:workItems});
})

app.get("/about", function(req,res){
    res.render("about");
})
app.post('/work', function(req,res){
    res.redirect('/work');
})
app.post("/", function(req, res){
    let item= req.body.newItem;
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        console.log(req.body);
        items.push(item);
        res.redirect("/");
    }
    res.redirect("/");
});
app.listen(3000, function(){
    console.log("server running on port 3000");
});