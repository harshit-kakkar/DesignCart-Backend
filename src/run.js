const { app } = require('./server')
const { db } = require('./models/db')
const PORT = process.env.PORT || 5000

async function run() {
    await db.sync()
    
    app.listen(PORT, () => {
        console.log("Server started")
    })
    
}

run()
