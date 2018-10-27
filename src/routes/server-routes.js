module.exports = function (service) {
    async function getCountries(req, res) {
        try{
            
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