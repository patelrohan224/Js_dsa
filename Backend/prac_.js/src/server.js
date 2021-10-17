const app = require("./index")
const connect = require("./config/db")

app.listen(1000, async function () {
    await connect();
    console.log("listening on port 1000");
})