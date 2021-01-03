#! /bin/bash
# cloudformation doesn't support local instance of dynamo db, so here we are
# could maybe use eval here instead of duplicating the commands

if [ "$1" == "prod" ]
then
    aws dynamodb create-table --cli-input-json file://create-recipes-table.json
    aws dynamodb create-table --cli-input-json file://create-users-table.json
fi

aws dynamodb create-table --cli-input-json file://create-recipes-table.json --endpoint-url $endpoint
aws dynamodb create-table --cli-input-json file://create-users-table.json --endpoint-url $endpoint

