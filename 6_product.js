import fs from 'fs';

fs.writeFileSync("product.txt", "Product: Laptop\nPrice: 50000\n");

console.log("Sync Write Done");

fs.writeFile("product_async.txt", "Product: Mobile\nPrice: 20000\n", (err) => {
    if (err) throw err;
    console.log("Async Write Done");
});