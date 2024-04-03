const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome!"
    });
});

// catch all route
app.get("*", (req, res) => {
    return res.status(200).json({
        message: "Sorry, wrong path!",
    });
});

// start server
app.listen(3000, () => {
    console.log(`server started on port: 3000`);
});