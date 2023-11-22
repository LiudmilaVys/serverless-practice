'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'product';

const scan = async () => {
  const response = await dynamo.scan({
    TableName: TABLE_NAME
  }).promise();

  return response.Items;
};

const query = async (id) => {
  const response = await dynamo.scan({
    TableName: TABLE_NAME,
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

  return {
    ...responseOptions,
    body: await query(productId),
  };
};
