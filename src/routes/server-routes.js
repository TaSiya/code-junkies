module.exports = function (service) {
    async function getCountries(req, res) {
        try{
            let lat = req.body.lat;
            console.log(lat+" please");
            
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
    async function summary(req, res) {
        try{

            res.render('summary')
        } catch(err) {
            res.send(err.stack);
        }
    } 
    async function getProgress(req, res) {
        try{

            res.render('progress')
        } catch(err) {
            res.send(err.stack);
        }
    }
    async function voucher(req, res) {
        try{
            res.render('voucher');
        } catch(err) {
            res.send(err.stack);
        }
    }
    return {
        getCountries,
        payment,
        summary,
        getProgress,
        voucher
    }
}