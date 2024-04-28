import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";

const dynamo = new DynamoDBClient();
const s3 = new S3();

export const handler = async (event: any) => {
	const listTablesResult = await dynamo.send(new ListTablesCommand({}));
	const listBucketsResult = await s3.listBuckets();
	return {
		listTablesResult,
		listBucketsResult,
	};
};
