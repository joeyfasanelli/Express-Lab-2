const express = require("express");
const app = express();

app.get("/greeting", function (req, res) {
    res.send("Hello, stranger")
});

app.get("/greeting/:name", function (req, res) {
    res.send("Hello, " + req.params.name)
});


app.get("/tip/:total/:tipPercentage", function (req, res) {
    res.send("Your tip is: $" + req.params.total * (req.params.tipPercentage / 100))
});



app.listen(3000);