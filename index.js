var dotenv = require('dotenv');
dotenv.config({ silent: true });
dotenv.load();

const App = require('./src/server');
const app = new App();
app.start();
