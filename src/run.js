const { app } = require('./server')
const PORT = process.env.PORT || 5000

async function run() {
    app.listen(PORT, () => {
        console.log("Server started")
    })
    
}

run()
