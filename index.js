const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
// Creating the express app
const app = express();

// Store the product list in memory:
const productList = [
  {
    id: "product_1",
    name: "Milk",
    price: 2,
  },
];

//middleware:parse the body to json
app.use(bodyParser.json());

// Choosing a port to run on
const port = 3000;

//creat a post endpoint and specfic the handler function

//push a product to a product list and give it back to us
//post
app.post("/products", (request, response) => {
  const products = request.body;
  productList.push(product);
  response.json(product);
});

//put
app.get("/products", (request, response) => {
  const productId = request.params.productId;

  const updatedProduct = request.body;

  let newProduct = null;

  //update
  productList.forEach((prod, index) => {
    if (prod.id === productId) {
      newProduct = {
        ...productList[index],
        ...updatedProduct,
      };
      productList[index] = newProduct;
    }
  });
  response.json(newProduct);
});

// Adding a simple endpoint
//get
app.get("/products/:productId", (request, response) => {
  // get the product Id from the request object
  const productId = request.params.productId;

  // filter the right product from the product list
  const product = productList.find((prod) => prod.id == productId);

  // return a 404 status if no product is found
  if (!product) {
    response.status(404).end();
  }

  // Send the product object as a JSON response to the client
  response.json(product);
});

app.get("/products/list", (request, response) => response.json(productList));
// this can be whatever you wat
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Then we need to add an endpoint that returns the product by id. The client will provide this id as the last part of the product URL:
