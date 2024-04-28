import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamo = new DynamoDBClient();

export const handler = async (event: any) => {
	const listTablesResult = await dynamo.send(new ListTablesCommand({}));
	return {
		listTablesResult,
	};
};
