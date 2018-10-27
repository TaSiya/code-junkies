module.exports = () => {
    var request = require("request"); //replace with your access_token
var TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2MjQzMzEsImV4cCI6MTU0MDYyNzkzMSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImZhN2I3ZWMxLTc4NDAtNDIwNi05MmNmLTc5Y2EyMTM5OWYzNiIsImNsaWVudF9jb3ZlcmFnZSI6Ikp1dW1maElKLUVDX3RyNDVDSmVqcnciLCJjbGllbnRfdGVuYW50IjoiMmJjYmJlYzItZmE5MC00M2QwLWFjMWMtN2E2ZmQ2NTZmNmY3IiwianRpIjoiYzRmYTMzYTdlOGRjMTljNmRhYTAyNDljNmE3ZmNlMzYiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.gHN5WoDfRvvAOsh5wWT9oyZNXm6Esz31C65caFojP_6sMim9KRLHIEJQMQvyMIcs9-F-yMOWP1WoJQQcx6vJVSW2eKnlcftj6yZhHygqTFeVuXySACH2-rj3vSU5jGUb4GShYcfXuW3TwpWolGos3YR6wXpcmPMasmuGwLlAqFaSkP27vVnvP0TJu0w4q3VVT26gNTeQyI71JvwITAvBeqQdsu7EiimJYyVV1d-tfNjQOQo3tbjD401cjUB2u7hSnVKAtP1osA_fJ1-03PK8wgCl7fWcNLCr2WJolbi3bMV3jC4o1HfY3oNwKCEf4u0TzVg5iQYuaCcjyiNESPS_yA';
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