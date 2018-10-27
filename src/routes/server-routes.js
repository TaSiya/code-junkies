module.exports = function (service) {
    async function getCountries(req, res) {
        try{
            // if (navigator.geolocation) {
            //     navigator.geolocation.getCurrentPosition(showPosition);
            // }
            res.render('home')
        } catch(err) {
            res.send(err.stack)
        }
    }
    async function payment(req, res){
        try{

            res.render('payment')
        } catch(err){  
            res.send(err.stack);
        }
    } 
    return {
        getCountries,
        payment
    }
}