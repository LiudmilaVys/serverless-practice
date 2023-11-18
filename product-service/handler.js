'use strict';

const products = [
  {
    description: "Short Product Description1",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 24,
    title: "ProductOne",
  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductTitle",
  },
  {
    description: "Short Product Description2",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    title: "Product",
  },
  {
    description: "Short Product Description4",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    title: "ProductTest",
  },
  {
    description: "Short Product Description1",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 23,
    title: "Product2",
  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductName",
  },
];

const responseOptions = {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

module.exports.getProductsList = async (event) => {
  return {
    ...responseOptions,
    body: JSON.stringify(products, null, 2),
  };
}

module.exports.getProductsById = async (event) => {
  const productId = event.pathParameters.productId;

  return {
    ...responseOptions,
    body: JSON.stringify(products.find(p => p.id === productId), null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
