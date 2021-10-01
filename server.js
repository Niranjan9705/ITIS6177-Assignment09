const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say', function(req,res) {
        resp = "Hello World" + req.query.keyword ;
        axios.get('https://wylbujzyo1.execute-api.us-east-2.amazonaws.com/default/myFunction?keyword='+req.query.keyword)
        .then(response =>{
                res.statusCode = response.data.statusCode;
                res.send(response.data.body);
        })
        .catch(err=>{
                res.statusCode = 400;
                res.send(err);
        });
});

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});