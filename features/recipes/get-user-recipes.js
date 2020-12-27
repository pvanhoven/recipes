const { DynamoDBClient, ScanCommand, QueryCommand } = require('@aws-sdk/client-dynamodb');

const scanUserRecipes = async function scanUserRecipes(userId) {
  const config = { region: 'local', endpoint: 'http://localhost:8000' };
  const dynamoDb = new DynamoDBClient(config);

  try {
    const scanCommand = new ScanCommand({
      TableName: 'Recipes',
      FilterExpression: 'UserId = :u',
      ExpressionAttributeValues: {
        ':u': { S: userId },
      },
    });

    const result = await dynamoDb.send(scanCommand);
    return result.Items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const queryUserRecipes = async function queryUserRecipes(userId) {
  const config = { region: 'local', endpoint: 'http://localhost:8000' };
  const dynamoDb = new DynamoDBClient(config);

  try {
    const queryCommand = new QueryCommand({
      TableName: 'Recipes',
      FilterExpression: 'UserId = :u',
      ExpressionAttributeValues: {
        ':u': { S: userId },
      },
    });

    const result = await dynamoDb.send(queryCommand);
    return result.Items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

exports.scanUserRecipes = scanUserRecipes;
exports.queryUserRecipes = queryUserRecipes;
