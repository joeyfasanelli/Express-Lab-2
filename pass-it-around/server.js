const express = require("express");
const app = express();
app.listen(3001);

app.get("/", function (req, res) {
    res.send(`<h1>99 Bottles of beer on the wall</h1>` + '<a href="/98">Take one down, pass it around</a>')
});


app.get("/:number_of_bottles", function (req, res) {
    let bottleNumber = req.params.number_of_bottles;
    if (bottleNumber > 0) {
    res.send(`<h1>${bottleNumber} Bottles of beer on the wall</h1> <a href="/${bottleNumber - 1}">Take one down, pass it around</a>`)
    } else {
    res.send('<a href="/">All gone! Click here to restart</a>')
    }
});


