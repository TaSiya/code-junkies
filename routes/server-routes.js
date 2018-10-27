module.exports = function (service) {
    async function getCountries(req, res) {
        try{

            
        } catch(err) {
            res.send(err.stack)
        }
    }

    return {
        getCountries
    }
}