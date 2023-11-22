// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
var process = require('process');

try {
  process.chdir('/home');
}
catch (err) {
}

//Load credentials and set Region from JSON file
AWS.config.loadFromPath('lucy/.aws/credentials.json');

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

var myTable = 'stock';

const stocks = [
  {
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    count: 1,
  },
  {
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    count: 5,
  },
  {
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    count: 23,
  },
  {
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    count: 15,
  },
  {
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    count: 23,
  },
  {
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    count: 15,
  },
];

stocks.forEach(s => {
  const item = {
    TableName: myTable,
    Item: {
      'product_id': { S: s.id },
      'count': { N: s.count.toString() },
    }
  };

  ddb.putItem(item, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
});

