const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/api", test);

const port = 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
