module.exports = function (service) {
    async function getCountries(req, res) {
        try{

            res.render('home')
        } catch(err) {
            res.send(err.stack)
        }
    }

    return {
        getCountries
    }
}