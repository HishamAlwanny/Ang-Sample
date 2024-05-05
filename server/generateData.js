var { faker } = require('@faker-js/faker');

var database = { products: [] };
//faker.seed(123);
for (var i = 1; i <= 300; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?product",
        quantity: faker.number.int(999)
    });
}

console.log(JSON.stringify(database));