const express = require('express');
const app = express();
let port =  8080;
//console.dir(app);
app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
});

// app.use((req, res) =>{
//     console.log(`request recieved`);
//     //res.send(`this is basic response`);
//     let code= `<h1>fruits</h1><br><p>apple</p><p>mango<p/>`;
//     res.send(code);
// });

app.get(`/`,(req,res) => {
    res.send(`you contacted root`);
});
app.get(`/apple`,(req,res) => {
    res.send(`you contacted apple`);
});
app.get(`/mango`,(req,res) => {
    res.send(`you contacted mango`);
});
app.get(`/:username/:id`,(req,res)=>{
     console.log(req.params);
    let {username, id} = req.params;
    res.send(`Welcome to page of @${username}`);
});
app.get(`/search`,(req,res)=>{
    let {q} =req.query;
    if(!q){
        res.send(`nothing searched`);
    }
    // console.log(req.query);
    res.send(`<h1>search results for query: ${q}</h1>`);
});
//req link is
//http://localhost:8080/search?q="apple"&color=:green"