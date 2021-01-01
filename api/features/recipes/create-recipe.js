const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { v4: uuidv4 } = require('uuid');

const createRecipe = async function createRecipe(recipe) {
  const config = { region: 'local', endpoint: 'http://localhost:8000' };
  const dynamoDb = new DynamoDBClient(config);

  const {
    name, userId, ingredients, instructions,
  } = recipe;

  const item = {
    id: { S: uuidv4() },
    userId: {
      S: userId,
    },
    name: {
      S: name,
    },
    ingredients: {
      SS: ingredients,
    },
    instructions: {
      SS: instructions,
    },
  };

  console.log(item);

  try {
    const createCommand = new PutItemCommand({
      TableName: 'Recipes',
      Item: item,
    });

    const result = await dynamoDb.send(createCommand);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = createRecipe;
