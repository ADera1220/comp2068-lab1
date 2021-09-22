// Create variable to hold Connect
let connect = require('connect');

// Initialize the app variable using connect
let app = connect();

// Functions for each required route
let me = (req, res) => {
    res.writeHead(200);
    res.write('I am  a 30 (turning 31 this year) year old Part-Time student in the COPR program. I work for my friend at his escape room businnes. I enjoy gaming in my free time, mostly.');
    res.end();
}

let mom = (req, res) => {
    res.writeHead(200);
    res.write('My mother was born in Montreal, Quebec. She is the oldest of 3 kids. This year is her 40th wedding anniversary.');
    res.end();
}

let dad = (req, res) => {
    res.writeHead(200);
    res.write('My father was born in Montreal Quebec. His parents were post-war Polish immigrants. He has a degree in Mechanical Engineering from McGill University.');
    res.end();
}

// Create routes
app.use('/me', me);
app.use('/mom', mom);
app.use('/dad', dad);

// App will listen on port 3000
app.listen(3000);
console.log('Listening on Port 3000...');