module.exports = (app, route) => {
    app.get('/', route.getCountries);
    app.get('/payment', route.payment);
    app.get('/summary', route.summary);
    app.get('/progress', route.getProgress);
}