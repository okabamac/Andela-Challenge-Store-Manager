'use strict';

let products = [{
    id: 2222222,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },

  {
    id: 2222223,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },

  {
    id: 2222224,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },
  {
    id: 2222225,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },
  {
    id: 2222226,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },
  {
    id: 2222227,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },
  {
    id: 2222228,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },
  {
    id: 2222229,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  },
  {
    id: 2222210,
    product: {
      Name: "St Martin, Adidas",
      Category: "Category-1",
      Size: "22",
      Quantity: 312
    }
  }
];




let sales = [{
    id: 1,
    sales: {
      attendant: "Attendant 1",
      name: "Ada Mark",
      Product: "I-5923",
      Quantity: 2,
      Price: "$270",
      Date: "12-04-2018"
    }
  },

  {
    id: 2,
    sales: {
      attendant: "Attendant 1",
      name: "Ada Mark",
      Product: "I-5923",
      Quantity: 2,
      Price: "$270",
      Date: "12-04-2018"
    }
  },
  {
    id: 3,
    sales: {
      attendant: "Attendant 1",
      name: "Ada Mark",
      Product: "I-5923",
      Quantity: 2,
      Price: "$270",
      Date: "12-04-2018"
    }
  },
  {
    id: 3,
    sales: {
      attendant: "Attendant 1",
      name: "Ada Mark",
      Product: "I-5923",
      Quantity: 2,
      Price: "$270",
      Date: "12-04-2018"
    }
  },
  {
    id: 4,
    sales: {
      attendant: "Attendant 1",
      name: "Ada Mark",
      Product: "I-5923",
      Quantity: 2,
      Price: "$270",
      Date: "12-04-2018"
    }
  },
  {
    id: 5,
    sales: {
      attendant: "Attendant 1",
      name: "Ada Mark",
      Product: "I-5923",
      Quantity: 2,
      Price: "$270",
      Date: "12-04-2018"
    }
  },
  {

    id: 6,
    sales: {
      attendant: "Attendant 1",
      name: "Ada Mark",
      Product: "I-5923",
      Quantity: 2,
      Price: "$270",
      Date: "12-04-2018"
    },

  }
];


const express = require('express');
const app = express();
app.use(express.json());

app.get("/api/v1/products", (request, response) => {
  response.send(products);
});


app.get("/api/v1/products/:id", (request, response) => {
  const searchId = parseInt(request.params.id);
  let reply;
  for (let i = 0; i < products.length; i++) {
    if (isNaN(searchId)) {
      reply = {
        message: "ID must be a number"
      }
    } else if (products[i].id === searchId) {
      reply = products[i];
    } else if (typeof searchId === "number" && products[i].id !== searchId) {
      reply = {
        message: "Product with that ID does not exist"
      }
    }
  }
  response.send(reply);
});


app.get("/api/v1/admin/sales", (request, response) => {
  response.send(sales);
});

app.get("/api/v1/sales/:id/:password", (request, response) => {
  const searchId = parseInt(request.params.id);
  const password = parseInt(request.params.password);
  let reply;
  for (let i = 0; i < sales.length; i++) {
    if (isNaN(searchId)) {
      reply = {
        message: "ID must be a number"
      }
    } else if (sales[i].id === searchId && password === 1000) {
      reply = sales[i];
    } else if (typeof searchId === "number" && sales[i].id !== searchId && password !== 1000) {
      reply = {
        message: "This sale record does not exist"
      }
    }
  }
  response.send(reply);
});

app.post('/api/v1/product/:admin-password', (request, response) => {
  products.unshift(request.body);
  response.send(request.body);
});

app.post('/api/v1/record/:attendant-password', (request, response) => {
  sales.unshift(request.body);
  response.send(request.body);
});

app.listen(3000, () => console.info('Application running on port 3000'));