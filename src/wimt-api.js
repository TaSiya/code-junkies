const Api = require('./api-functions');
module.exports = () => {
  var request = require("request"); //replace with your access_token
  var TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA3MDQyMjYsImV4cCI6MTU0MDcwNzgyNiwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImZhN2I3ZWMxLTc4NDAtNDIwNi05MmNmLTc5Y2EyMTM5OWYzNiIsImNsaWVudF9jb3ZlcmFnZSI6Ikp1dW1maElKLUVDX3RyNDVDSmVqcnciLCJjbGllbnRfdGVuYW50IjoiMmJjYmJlYzItZmE5MC00M2QwLWFjMWMtN2E2ZmQ2NTZmNmY3IiwianRpIjoiYzI5MGUyNzlkNDlhYWZkMmMwOWQ5NmRkYzBiODcwYWYiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.mb-NLFWfTn6fDmT1f9yrI0GhO4yPwsXQ0-verkCLakos_vx6D1X3Y7Po1m1SZ3dYTy9ruRyXV49L90qM8FsgYDAgRolin2IlN4hp8wJYxYmPUaAiGg3fFpg4rohimo9n84FbAozfcD1aHvuztRz4dOGtvmGoDZdsd5joPGhIl35X4Rm9fu7xN1TnnuuUk1ZXznpQZ3FW0rRREOwHMyyEHL4sG1dmXX3Gpvvt-vZ5Jr297qhUXWE9lix5CJRTBeimyN7ncoPdA72_7WYTkomRpTZUYp1T_P-63GwSwDNULpPLRS_J0DJ02ZP72tjhD05Jq8DWz8Y5_yxl_OaKRzpSzQ';
  const useAPI = Api(request,TOKEN);
  useAPI.getAgencies();
}