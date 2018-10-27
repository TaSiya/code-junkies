module.exports = () => {
    var request = require("request"); //replace with your access_token


var TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2MTYwMTksImV4cCI6MTU0MDYxOTYxOSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImE5NWNmMTgwLWIyNDYtNDFmYy1iYTU2LTM4MDgwZDM4MTA0YiIsImNsaWVudF9jb3ZlcmFnZSI6IkF0MC1uZXJwaGsyVi1qMG9teDlZVlEiLCJjbGllbnRfdGVuYW50IjoiMDMxY2FjNDgtNmZjYi00ZTYzLTllMTgtNTI2MmVmOTFiNjBjIiwianRpIjoiNGNmYTMyOTM1YzhlMDg4ZDI0ZDc2YmRhYTQ4NDVhYTIiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.YDp5n3iN-LQh6-NfR4U7SWXeSslAG7TRonKqBX70WUhoywkxvOl90PYwTNZKMBeQW1qL5lsP3kTPqdkrRnSSZQRpQrvRQAsvvLmfj9RLCwlG49Am3z-POc9CB7MBwXGHRmVIv5rn-HUnmq1dAssxGZcGGvYdPzFSkn8a0yFowbBpoJetqe2qeDRrVb9PBJE_F90nYlAdlK-IOt8qlqM0GCLiKzKRsAwNb3WWlp954DngPrVCl2K4gyfyUMJ-Ep6m-XtroMzcJ32trVahKhSpHLMrOZelTdHva4UgDIWa2j8L5-nT_jnVqAvVVpCzI-dC_jRJImjO1MY4rmZl12ol0A';
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