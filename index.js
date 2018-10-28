const Server = require('./src/server-config');
const DB = require('./src/db-config');
const Services = require('./src/services/service');
const Routes = require('./src/routes/server-routes');
// const API = require('./src/wimt-api');
const Server_Route = require('./src/app-routes');
let app = Server();
let pool = DB();
// let api = API();
const service = Services(pool);
const route = Routes(service);
let server_Route = Server_Route(app, route);

const PORT = process.env.PORT || 2018;
app.listen(PORT, () =>{console.log('Listening to port...'+ PORT);})

module.exports = server_Route;