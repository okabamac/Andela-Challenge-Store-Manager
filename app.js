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

app.get("/api/v1/admin/sales", (request, response) => {
    response.send(sales);
});