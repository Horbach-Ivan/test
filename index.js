let express = require('express')
let app = express();
const routes = require('./routes/index')

app.listen( port, ()=> console.log("server stared"))
app.use('/api', routes);