terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.7"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"

  endpoints {
    dynamodb = "http://localhost:8000"
  }
}

resource "aws_dynamodb_table" "basic-dynamodb-table" {
  name           = "Recipes"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "Id"

  attribute {
    name = "Id"
    type = "S"
  }
}

