const connect = require("./configs/db");
const app = require("./index");
app.listen(3945, async() =>{
    await connect();
    console.log("listening on port 3945");
})






