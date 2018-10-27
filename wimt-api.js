module.exports = () => {
    var request = require("request"); //replace with your access_token
var TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2NTU0MTksImV4cCI6MTU0MDY1OTAxOSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImZhN2I3ZWMxLTc4NDAtNDIwNi05MmNmLTc5Y2EyMTM5OWYzNiIsImNsaWVudF9jb3ZlcmFnZSI6Ikp1dW1maElKLUVDX3RyNDVDSmVqcnciLCJjbGllbnRfdGVuYW50IjoiMmJjYmJlYzItZmE5MC00M2QwLWFjMWMtN2E2ZmQ2NTZmNmY3IiwianRpIjoiNDk5NjJkYjNjOTVjZTRlZjAyZWY4NjA4MDVhZThmYTUiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.fpjhQEa-yaoGZzfpv7hT7-XlyGuc6T81N13e_arnGeFC8xwT7VDFYEkqYfKK6lkjcNhdkXPdVVPtMtMd5_RsqymsZS067hrSAqWQ3L2h2fb0nsqBTedgvlqZ6djwFfYEu5bw9Gc6Q035Io5oGElCCGaWN8bV80cPdD0ba_Qx6jxBzIo4JOfECcD2p3kWCcC5SsCjfF3MwNAQudOPRElKYILHQbpa6EeoZta10adTZdByYAB_zKHfwYWlT6Ga8jFCYWxkx0bW0oofhV30ivBQ9udYR4DvPLwgr8LkF2VrP8E-fTnfTDKYEuFt3uXIYBuu2p1u5VGdpckpXz8fbrCqVQ";
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