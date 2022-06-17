import { Connection } from "amqplib";

// const connection: Connection = await client.connect(
//   "amqp://username:password@localhost:5672"
// );

export class Test {
  test!: Connection;
}

console.log("HELLO WORLD!");
