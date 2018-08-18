var http = require("https");

var options = {
  "method": "GET",
  "hostname": "maps.googleapis.com",
  "port": null,
  "path": "/maps/api/geocode/json?address=Mongolia%20&key=AIzaSyDkpd-IZNVhThj9DLJ6TVItm6BUXWUSzUs",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "6cb177c2-f98b-96bb-44fb-0b0f990ab405"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();