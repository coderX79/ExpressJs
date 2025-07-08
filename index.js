const express = require('express');
const app = express();
let port =  8080;
//console.dir(app);
app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
});

app.use((req, res) =>{
    console.log(`request recieved`);
    //res.send(`this is basic response`);
    let code= `<h1>fruits</h1><br><p>apple</p><p>mango<p/>`;
    res.send(code);
});
