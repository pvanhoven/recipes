# recipes

## Creating DynamoDb Tables

Assumes local dynamodb container

```
aws dynamodb create-table --cli-input-json file://db/create-recipes-table.json --endpoint-url http://localhost:8000
```

```
aws dynamodb create-table --cli-input-json file://db/create-users-table.json --endpoint-url http://localhost:8000
```

Updating an index, first had to delete index

```
aws dynamodb update-table --table-name Recipes --attribute-definitions AttributeName=userId,AttributeType=S AttributeName=name,AttributeType=S --global-secondary-index-updates file://api/db/update-recipes-table.json --endpoint-url http://localhost:8000
```

## API Calls

```
GET: http://localhost:3000/recipes
```

```
POST: http://localhost:3000/users

Content-Type: application/json

{"userName": "phill", "email": "email@domain.com"}
```

```
POST: http://localhost:3000/recipes

Content-Type: application/json

{
  "name": "recipe name",
  "userId": "{from above POST to users}",
  "ingredients": [
    "item 1",
    "item 2"
  ],
  "instructions": [
    "do this",
    "do that"
  ]
}
```
