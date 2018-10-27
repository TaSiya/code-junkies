module.exports = () => {
    var request = require("request"); //replace with your access_token
var TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2NTA1MzMsImV4cCI6MTU0MDY1NDEzMywiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImZhN2I3ZWMxLTc4NDAtNDIwNi05MmNmLTc5Y2EyMTM5OWYzNiIsImNsaWVudF9jb3ZlcmFnZSI6Ikp1dW1maElKLUVDX3RyNDVDSmVqcnciLCJjbGllbnRfdGVuYW50IjoiMmJjYmJlYzItZmE5MC00M2QwLWFjMWMtN2E2ZmQ2NTZmNmY3IiwianRpIjoiNDJkZDRlZDEwNzdmZThiYjQ0OWVjZGYxM2ZhMjlkNjYiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.KRn6_W8doaMitRGOz-AZmWetk1KoSsEtjZHtc5yn6dv0N1fSZ3ogeXM6heB9TL87pRLR0gG8cnGKwFacS-2Te-JxIu5OmzTZz938o6osIDBghlsXszOZzRum0JxDgEEiPFolddSGJ6MOe3pL9aD8NpQwgtS6QwYRTOKVrtSmxGJgEq4iTi54iT9Ka2lgMld1BOwJOYPVHU4-rwzWTHoXttvDYKTiLMsn4JnRweb1KRHeXqBf5pN3XXvOWD2xoXgUqZ201yVuY4jYDwdoFL92gq0dSGRE4mY16dIabiIUCJDeYLhGmvdyocLY-81p5GXzYn9VR7jQFGmyq3KA8MEhjg";
var options = {
  headers: {
    "Accept": "application/json",
    "Authorization": "Bearer " + TOKEN
  },
  url: "https://platform.whereismytransport.com/api/agencies"
};
request(options, function (error, response, body) {
  console.log({
    "Number of Agencies": JSON.parse(body).length
  });
});
}