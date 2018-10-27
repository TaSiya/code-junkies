const Server = require('./server-config');
const DB = require('./db-config');
const Services = require('./services/service');
const Routes = require('./routes/server-routes');
const API = require('./wimt-api');
const Server_Route = require('./app-routes');
let app = Server();
let pool = DB();
let api = API();
const service = Services(pool);
const route = Routes(service);
let server_Route = Server_Route(app, route);

const PORT = process.env.PORT || 2018;
app.listen(PORT, () =>{console.log('Listening to port...'+ PORT);})

module.exports = server_Route;