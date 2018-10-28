module.exports = (request, TOKEN) => {
    function getAgencies(){
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
    function journey() {
      var options = {
        method: post,
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer " + TOKEN
        },
        url: "https://platform.whereismytransport.com/api/journeys"
      };
      request(options, function (error, response, body) {
        console.log({
          "Number of Agencies": JSON.parse(body).length
        });
      });
    }
    return{
        getAgencies,
        journey
    }
}