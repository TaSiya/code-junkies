module.exports = () => {
    var request = require("request"); //replace with your access_token
var TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2MzAwMTUsImV4cCI6MTU0MDYzMzYxNSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImZhN2I3ZWMxLTc4NDAtNDIwNi05MmNmLTc5Y2EyMTM5OWYzNiIsImNsaWVudF9jb3ZlcmFnZSI6Ikp1dW1maElKLUVDX3RyNDVDSmVqcnciLCJjbGllbnRfdGVuYW50IjoiMmJjYmJlYzItZmE5MC00M2QwLWFjMWMtN2E2ZmQ2NTZmNmY3IiwianRpIjoiOWQyODgyOTQ0MmE0MjczZTg0YzdjODI4ZWUzNTM1YjMiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.CyOD-KCQ8Ti5YKysc7Wr-0e_rboKH8_J3VhLrcdzQXVVkQA_OsoMx00WGO6TyDEcQEiqmw7wphbO5HJpfJbw-oj9jLVYE538T82fEdvuhCbLBs9wbTBbR7pqVVaditViKiQmCcq6v768dS_V9F7PaxAP4KcpA_a7jFKUsfs3eO6DSxvbQW5TqzqaQOanIvrcHPB4z4g-_Oo7npc4PYvKCLOu9Sy_Jym5_6CmgCO_R8QDyyB2OpkbE7g1LDpBhAt23Ic7_plBj9t30zGZ6ck97gEWHULs0NJwi_NO33m_r5qONSgjHK9ECo8gC-RGuncRa3tVhZ1afo03y74x3mihXA';
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