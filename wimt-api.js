module.exports = () => {
    var request = require("request"); //replace with your access_token
var TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2MzAxMzcsImV4cCI6MTU0MDYzMzczNywiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImZhN2I3ZWMxLTc4NDAtNDIwNi05MmNmLTc5Y2EyMTM5OWYzNiIsImNsaWVudF9jb3ZlcmFnZSI6Ikp1dW1maElKLUVDX3RyNDVDSmVqcnciLCJjbGllbnRfdGVuYW50IjoiMmJjYmJlYzItZmE5MC00M2QwLWFjMWMtN2E2ZmQ2NTZmNmY3IiwianRpIjoiNjI2YzE2ZTZlNTNkZDMxOThkMmNjN2MzMGQyNzY5ODMiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.T7ESkxi-Aic3m8Dr6BmT7bVMQreJwvt7P6qMGfspoCMWsRFWTSLemGuqUapuO5OWHToqsKR1WckQ7JLgzzsex009vyjqvCiioCiVqfVS9add73_9hUndt6llh6oR999pE0GfUYqDR50cYVNEi4j6gl0do4CyVh5PYbFM86TKhZLbzjf768mq2GZcgrOe23A-sCMF8T29B6IkvGD4wtxs2V5Uio0fLCjPv_vQ04Dst6i4Mewy34gbmCmi_vjdOajgF6EyjqJ2ucI5DP_Oh0DmUYRpRHLeMeay9o9hD2wRkuvZfaTPYU3SuU8o3TLXrxwJ2OCZgMwOQQGHPJarcCNPCg';
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