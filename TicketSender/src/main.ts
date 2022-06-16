import client, { Connection } from "amqplib";

class App {
  constructor() {}

  async test() {
    const connection: Connection = await client.connect(
      "amqp://username:password@localhost:5672"
    );

    console.log("HELLO WORLD!");
  }
}
