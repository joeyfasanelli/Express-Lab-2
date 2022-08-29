const express = require("express");
const app = express();

// Greeting

app.get("/greeting", function (req, res) {
    res.send("Hello, stranger")
});

app.get("/greeting/:name", function (req, res) {
    res.send("Hello, " + req.params.name)
});

// Tip Calculator

app.get("/tip/:total/:tipPercentage", function (req, res) {
    res.send("Your tip is: $" + req.params.total * (req.params.tipPercentage / 100))
});



// Magic 8-Ball


const eightBall = [
"It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes definitely",
"You may rely on it", 
"As I see it yes", 
"Most likely", 
"Outlook good",
"Yes", 
"Signs point to yes", 
"Reply hazy try again", 
"Ask again later",
"Better not tell you now", 
"Cannot predict now", 
"Concentrate and ask again",
"Don't count on it", 
"My reply is no", 
"My sources say no",
"Outlook not so good", 
"Very doubtful",
]

const randomResponse = eightBall[Math.floor(Math.random() * eightBall.length)];


app.get("/magic/:question", function (req, res) {
    res.send(`${req.params.question} <h1>${randomResponse}</h1>`)
});



app.listen(3000);