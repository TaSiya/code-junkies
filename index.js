const Server = require('./server-config');
const DB = require('./db-config');
const Services = require('./services/service');
const Routes = require('./routes/server-routes');
const API = require('./wimt-api');

let app = Server();
let pool = DB();
let api = API();



const service = Services(pool);
const route = Routes(service);

const PORT = process.env.PORT || 2018;
app.listen(PORT, () =>{
    console.log('Listening to port...'+ PORT);
    console.log(api);
})