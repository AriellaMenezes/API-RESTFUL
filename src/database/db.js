const mongoose = require('mongoose')

function connect() {
    //mongoose.set('useNewUrlParser', true) --Na nova atulização nao precisa usar
   // mongoose.set('useUnifiedTopology', true)

    mongoose.connect('mongodb://mongodb://localhost:27017/api-restful?readPreference=primary&ssl=false&directConnection=true')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to databas!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}