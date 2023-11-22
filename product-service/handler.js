'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME_PRODUCT = 'product';
const TABLE_NAME_STOCK = 'stock';

const scan = async () => {
  const response = await dynamo.scan({
    TableName: TABLE_NAME
  }).promise();

  return response.Items;
};

const query = async (id, tableName) => {
  const response = await dynamo.scan({
    TableName: tableName,
    KeyConditionExpression: 'id=:id',
    ExpressionAttributeValues: {':id': id}
  }).promise();

  return response;
};

const responseOptions = {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

module.exports.getProductsList = async (event) => {
  return {
    ...responseOptions,
    body: await scan(),
  };
}

module.exports.getProductsById = async (event) => {
  const productId = event.pathParameters.productId;
  const product = await query(productId, TABLE_NAME_PRODUCT);
  const stock = await query(productId, TABLE_NAME_STOCK);

  return {
    ...responseOptions,
    body: {
      ...product,
      ...stock,
    },
  };
};
