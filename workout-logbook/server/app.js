require('dotenv').config;
let express = require('express');
let app = express();
const sequelize = require('./db');

let log = require('./controllers/logcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
// sequelize.sync({force: true})
app.use(require('./middleware/headers'));

app.use(express.json());


app.use('/user', user);

app.use(require('./middleware'));
app.use('/log', log);

app.listen(3000, function () {
    console.log("App is listening on port 3000");
})

