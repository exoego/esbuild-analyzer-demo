import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Hono } from "hono";

const dynamo = new DynamoDBClient();
const app = new Hono();

app.get("/", async (c) => {
    const listTablesResult = await dynamo.send(new ListTablesCommand({}));
    return c.json({
        listTablesResult,
    })
});

import { handle } from 'hono/aws-lambda'

export const handler = handle(app)
