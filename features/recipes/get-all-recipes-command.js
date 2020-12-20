const { DynamoDBClient, ListTablesCommand } = require('@aws-sdk/client-dynamodb');

class Recipes {
  constructor() {
    const config = { region: 'local', endpoint: 'http://localhost:8000' };
    this.dynamoDb = new DynamoDBClient(config);
  }

  async getAllRecipes() {
    try {
      console.log('asdf');
      const temp = await this.dynamoDb.send(new ListTablesCommand({}));
      console.log('asdfasdf');
      return temp;
    } catch (err) {
      console.error(err);
    }

    return [];
  }
}

module.exports = Recipes;
