import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const s3 = new S3Client();
const dynamo = new DynamoDBClient();

export const handler = async (event: any) => {
	const putObjectResult = await s3.send(
		new PutObjectCommand({
			Bucket: "my-bucket",
			Key: "my-key",
		}),
	);
	const listTablesResult = await dynamo.send(new ListTablesCommand({}));
	return {
		putObjectResult,
		listTablesResult,
	};
};
