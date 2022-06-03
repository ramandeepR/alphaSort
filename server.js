const express = require("express");
const bodyParser = require('body-parser');
var app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true
}));


app.get("/",function(request,response){
    response.send("Hello World!")
})

//here is the sorting logic
app.put("/api/endpoint", function(request, response){

    // take input
    const string = request.query.names;

    // converting to an array
    const words = string.split(',');

    // sort the array elements
    words.sort();

    //sending sorted names back as request response
    response.send(words.join(','));
});

app.listen(4201, function () {
    console.log("Started application on port %d", 4201)
});