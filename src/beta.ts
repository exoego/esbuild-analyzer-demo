import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

import { handle } from 'hono/aws-lambda'

export const handler = handle(app)
