   module.exports = function () {
       function makeId() {
           const text = document.getElementById("couponCode").innerHTML;
        //    var text = name;
           var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
           for (var i = 0; i < 5; i++)
               text += possible.charAt(Math.floor(Math.random() * possible.length));
           return text
       }
       return{
           makeId
       }
   }