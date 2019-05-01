var express = require("express");
var path = require("path");
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

// routes for frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// routes to display data for both arrays in form of json

app.get("/api/reservation", function(req, res) {
  res.json(reservation);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

// post route for adding data user enter

app.post("/api/reserve", function(req, res) {
  var reqbody = req.body();

  reqbody.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  if (reservation.length > 5) {
    waitlist.push(reqbody);
    res.json(true);
  } else {
    reservation.push(reqbody);
    res.json(false);
  }
});
