module.exports = () => {
    var request = require("request"); //replace with your access_token


var TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2MjAwMTksImV4cCI6MTU0MDYyMzYxOSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImE5NWNmMTgwLWIyNDYtNDFmYy1iYTU2LTM4MDgwZDM4MTA0YiIsImNsaWVudF9jb3ZlcmFnZSI6IkF0MC1uZXJwaGsyVi1qMG9teDlZVlEiLCJjbGllbnRfdGVuYW50IjoiMDMxY2FjNDgtNmZjYi00ZTYzLTllMTgtNTI2MmVmOTFiNjBjIiwianRpIjoiNjdhMzhjYTMwZGJmZDczNjk0N2NlNTEyYzhjYTQ4YzQiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.Cbkyev-fCnZdBCCmsWsHaqJaxMyW3r6j8wzHzY7Dsf89Cku97RtkBjou7a3ysRKy7zDMkgAJ1I2YulkGKqmlMels6fZ84gQCQN3M9xDlZXOe1v_xgoaSjhU0GtVSQF92drreNqvZyNNraHqQ8FEEELDBh4xR5NIZFIjaqYC9YIc83USruq15j3t2fkYq1NKNyFRseUH_Pn8rzldPnsKULkWk83Bc6M99GixcrOqXPRo3vY8wtuuSl0llXcrLq0_ytfLGgvypSGhrPvxjT2lvQ3JlJD6pzNZtNJHQd7SE9NnEnNw5J8UvIhpWKXC41e0ceot14Mn016WBGVeaCi8V0w';
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