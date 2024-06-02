import { ListTablesCommand, ListBackupsCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamo = new DynamoDBClient();

export const handler = async (event: any) => {
	const listTablesResult = await dynamo.send(new ListTablesCommand({}));
	const listBackupResult = await dynamo.send(new ListBackupsCommand({}));
	return {
		listTablesResult,
		listBackupResult,
	};
};
