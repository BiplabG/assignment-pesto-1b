const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const { v4: uuidv4 } = require("uuid");

// const data = require("./products.json");
let data = {
  products: [
    {
      name: "iphone 13",
      description: "This is the latest iphone device in the market.",
      price: 1000,
      product_id: "iph-wx",
      image_url: "https://images.unsplash.com/photo-1632514732416-bf5b8de19f33",
    },
    {
      name: "Airpod Max",
      description:
        "The airpod max is the highest sound quality headphones in the market.",
      price: 1000,
      product_id: "apd-mx",
      image_url: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f",
    },
  ],
};

app.get("/getProducts", (req, res) => {
  res.json(data);
});

app.post("/addProduct", (req, res) => {
  const { name, description, price, image_url } = req.body;
  if (name && description && price && image_url) {
    let productInfo = {
      name,
      description,
      price,
      image_url,
    };
    productInfo["product_id"] = uuidv4();
    data.products.push(productInfo);
    res.json(productInfo);
  } else {
    res.json({ error: "Required data missing !!!" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend assignment project");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
