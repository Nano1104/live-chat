const express = require("express")
const displayRoutes = require('express-routemap'); 
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express()
const PORT = 3001

//middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.post("/api/login", (req, res) => {
    try {
        const { name, email } = req.body
        res.status(200).json({ message: "Login successful"});
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err });
    }
})

app.listen(PORT, () => {
    displayRoutes(app)
    console.log(`App listening on PORT: ${PORT}`)
})