import { ListTablesCommand, DescribeTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamo = new DynamoDBClient();

export const handler = async (event: any) => {
	const listTablesResult = await dynamo.send(new ListTablesCommand({}));
	const createTableResult = await dynamo.send(new DescribeTableCommand({
		TableName: "test-table"
	}));
	return {
		listTablesResult,
		createTableResult,
	};
};
