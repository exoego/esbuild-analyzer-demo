import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

const dynamo = new DynamoDBClient();
const s3 = new DynamoDBClient();

export const handler = async (event: any) => {
	const listTablesResult = await dynamo.send(new ListTablesCommand({}));
	const listBucketsResult = await s3.send(new ListBucketsCommand({}));
	return {
		listTablesResult,
		listBucketsResult,
	};
};
