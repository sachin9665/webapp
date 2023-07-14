let express = require("express")

let app = express()

app.get("/", (res, req) => {
    req.sendFile(`${__dirname}/index.html`)
})

app.listen(3000, () => { console.log("server started on port 3000") })