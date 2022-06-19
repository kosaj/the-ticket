import { Connection } from "amqplib";

// const connection: Connection = await client.connect(
//   "amqp://username:password@localhost:5672"
// );

class App {
  test!: Connection;

  async init(): Promise<void> {
    let result = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    await result;
  }
}

const current = Date.now();
console.log("BEGIN");
await new App().init();
console.log("END", (Date.now() - current) / 1000);
