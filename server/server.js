const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Hello Body")

});

app.listen(8000,() =>{
    console.log("Server started")
})
