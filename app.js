// 1) using express js create rest api for product 
// which contains product details 

// "prodid":1,"ProductName":"Laird","price":2000

// create product.json file which contains at least 5 product 

// then create multiple route

// GET  / ------------ display all products 
// GET /:id ---------- display prodcut with id 
// POST  /add ---------------  add product using param
// POST /insert ------------  add product using body data 
// DELETE /:id  -------------- Delete particular product 


const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const FILE_PATH = './product.json';

// Helper function to read file
const readProducts = () => {
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data);
};

// Helper function to write file
const writeProducts = (data) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};


// GET / ------------- display all products
app.get('/', (req, res) => {
    const products = readProducts();
    res.json(products);
});


// GET /:id ---------- display product with id
app.get('/:id', (req, res) => {
    const products = readProducts();
    const id = parseInt(req.params.id);

    const product = products.find(p => p.prodid === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});


// POST /add ---------- add product using params
// Example: /add?prodid=6&ProductName=Pen&price=20
app.post('/add', (req, res) => {
    const products = readProducts();

    const newProduct = {
        prodid: parseInt(req.query.prodid),
        ProductName: req.query.ProductName,
        price: parseInt(req.query.price)
    };

    products.push(newProduct);
    writeProducts(products);

    res.json({ message: "Product added (query params)", product: newProduct });
});


// POST /insert -------- add product using body
// JSON Body example:
// { "prodid": 7, "ProductName": "Book", "price": 300 }
app.post('/insert', (req, res) => {
    const products = readProducts();

    const newProduct = req.body;

    products.push(newProduct);
    writeProducts(products);

    res.json({ message: "Product added (body)", product: newProduct });
});


// DELETE /:id -------- delete particular product
app.delete('/:id', (req, res) => {
    let products = readProducts();
    const id = parseInt(req.params.id);

    const newProducts = products.filter(p => p.prodid !== id);

    if (products.length === newProducts.length) {
        return res.status(404).json({ message: "Product not found" });
    }

    writeProducts(newProducts);

    res.json({ message: "Product deleted successfully" });
});


// Server start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



