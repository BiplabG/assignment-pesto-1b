const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Backend assignment project");
});

app.get("/getProducts", (req, res) => {
    
})

app.post("addProduct", (req, res) => {
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
