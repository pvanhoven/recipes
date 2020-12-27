const { v4: uuidv4 } = require('uuid');
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');

const createUserCommand = async function createUserCommand(user) {
  let userName = '';
  let email = '';
  ({ userName, email } = user);

  const config = { region: 'local', endpoint: 'http://localhost:8000' };
  this.dynamoDb = new DynamoDBClient(config);

  const item = {
    id: {
      S: uuidv4(),
    },
    userName: {
      S: userName,
    },
    email: {
      S: email,
    },
  };

  try {
    const putCommand = new PutItemCommand({
      TableName: 'Users',
      Item: item,
    });

    const temp = await this.dynamoDb.send(putCommand);
    if (temp.$metadata.httpStatusCode === 200) {
      console.log('Cool!');
    }

    console.log(temp);
    console.log("ret'd");
    return temp;
  } catch (err) {
    console.error(err);
    return [];
  }
};

exports.createUserCommand = createUserCommand;
