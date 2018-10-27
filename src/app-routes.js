module.exports = (app, route) => {
    app.get('/', route.getCountries);
    app.get('/payment', route.payment);
}