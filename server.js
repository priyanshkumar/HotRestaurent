var express = require("express");
var port = process.env.port || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});

// array for holding data

var reservation = [
  {
    name: "xyz",
    number: "000-000-0000",
    id: "12344",
    email: "email@email"
  }
];

var waitlist = [
  {
    name: "xyz",
    number: "000-000-0000",
    id: "12344",
    email: "email@email"
  }
];

// routes to display data for both arrays in form of json

app.get("/api/reservation", function(req, res) {
  res.json(reservation);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});
