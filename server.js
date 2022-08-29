const express = require("express");
const app = express();

app.get("/greeting", function (req, res) {
    res.send("Hello, stranger")
});

app.get("/greeting/:name", function (req, res) {
    res.send("Hello, " + req.params.name)
});

app.listen(3000);