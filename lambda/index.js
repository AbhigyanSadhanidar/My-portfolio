// lambda/index.js

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const params = {
      TableName: "Portfolio_table",
      Item: {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        message: data.message,
      },
    };

    await dynamodb.put(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Message stored successfully" }),
    };
  } catch (error) {
    console.error("Error saving message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};

