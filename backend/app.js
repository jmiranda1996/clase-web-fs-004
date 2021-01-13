
const express = require('express')
const cors = require('cors') 
const app = express()

app.use(cors());
app.use(express.json());
app.use('/lista-todo', require('./routes/tarea.routes'));

app.listen(3000);