const { DynamoDBClient, QueryCommand } = require('@aws-sdk/client-dynamodb');

const getAllRecipesCommand = async function getAllRecipesCommand() {
  const config = { region: 'local', endpoint: 'http://localhost:8000' };
  const dynamoDb = new DynamoDBClient(config);
  try {
    console.log('ret');
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
    console.log('done!');
    if (temp.$metadata.httpStatusCode === 200) {
      console.log('Cool!');
    }

    console.log(temp);
    console.log(temp.Items);
    console.log(temp.Items.map((i) => `${i.id} ${i.userId}`).join(', '));
    console.log("ret'd");
    return temp.Items.map((i) => ({
      id: i.id.S,
      userId: i.userId.S,
      name: i.name.S,
    }));
  } catch (err) {
    console.error(err);
    console.error(JSON.stringify(err, null, 2));
    return [];
  }
};

exports.getAllRecipesCommand = getAllRecipesCommand;
