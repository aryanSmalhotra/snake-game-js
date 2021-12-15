const express = require('express')
const app = express();

app.get('/games', (req,res) => {
    res.send("Get /games response")
})
app.listen(3001, () => {
    console.log("on port 3001")
})