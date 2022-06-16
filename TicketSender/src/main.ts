import client, { Connection } from "amqplib";

const connection: Connection = await client.connect(
  "amqp://username:password@localhost:5672"
);

console.log("HELLO WORLD!");
