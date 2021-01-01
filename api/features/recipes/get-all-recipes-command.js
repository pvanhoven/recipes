const { DynamoDBClient, QueryCommand } = require('@aws-sdk/client-dynamodb');

const getAllRecipesCommand = async function getAllRecipesCommand() {
  const config = { region: 'local', endpoint: 'http://localhost:8000' };
  const dynamoDb = new DynamoDBClient(config);
  try {
    const queryCommand = new QueryCommand({
      TableName: 'Recipes',
      IndexName: 'Seach_by_user',
      KeyConditionExpression: 'userId = :uid',
      ProjectionExpression: 'userId, id, #nm',
      ExpressionAttributeNames: {
        '#nm': 'name',
      },
      ExpressionAttributeValues: {
        ':uid': { S: '0cfc9213-4974-4cf1-b0f2-4869d54bedd0' },
      },
    });

    const temp = await dynamoDb.send(queryCommand);
    return temp.Items.map((i) => ({
      id: i.id.S,
      userId: i.userId.S,
      name: i.name.S,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};

exports.getAllRecipesCommand = getAllRecipesCommand;
