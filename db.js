const mongoose = require('mongoose'); 
require('dotenv/config');

// conexão com o banco de dados remoto exemplomlab

    const uri = process.env.DB_CONNECTION;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    
    mongoose.Promise = global.Promise;
    
    module.exports = mongoose;
