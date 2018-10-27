module.exports = () => {
  var request = require("request"); //replace with your access_token
  var TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwODQ2MkI2MDVEM0NCNEVDQzQ1RDYyMjQwNDMwOTZGODBENjQ2QzMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrSVJpdGdYVHkwN01SZFlpUUVNSmI0RFdSc00ifQ.eyJuYmYiOjE1NDA2NTA4MzMsImV4cCI6MTU0MDY1NDQzMywiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS53aGVyZWlzbXl0cmFuc3BvcnQuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6ImZhN2I3ZWMxLTc4NDAtNDIwNi05MmNmLTc5Y2EyMTM5OWYzNiIsImNsaWVudF9jb3ZlcmFnZSI6Ikp1dW1maElKLUVDX3RyNDVDSmVqcnciLCJjbGllbnRfdGVuYW50IjoiMmJjYmJlYzItZmE5MC00M2QwLWFjMWMtN2E2ZmQ2NTZmNmY3IiwianRpIjoiODQyYTc5OWJhYzhmMjhmNDAyYWY2M2E1NjE4OWUyNTAiLCJzY29wZSI6WyJ0cmFuc3BvcnRhcGk6YWxsIl19.Qkgt2666RV6XSJZkFfU5vp8MrdwmZG8rXrRXeEMtAeQB72Vdv7kYJy8zfezyyt6OzuHdtOF1_5iK7WeEn19dBbBsiQwgYdyPNpte2Sx9bM74-tkctc8tXk6pRYLjr-xShnxf2r4nNlo0UdtlZUSjMnsLotGIJICIxv5-cMYTOURLh3mmCcYHicQYSIkbTGpLYGFcm0NTX9SRDLO-eI7A7FExHSd-VEho2SxofaMxqdmia8dvwLVQ7Qp1B4Dv2zEpWDcmNmfrEZr-hgzEC_t0b_38ea8OZ2vCNf8s55KZkfRcA6CgjuDXcWBnliZuycomK-rzNOGPGA784DgX0f8lBw';
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