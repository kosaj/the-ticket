require("dotenv").config();
import client, { Channel, Connection, ConsumeMessage } from "amqplib";
export class App {
  connection: Connection | null;

  start(): void {
    this.connect();
  }

  async connect(): Promise<void> {
    this.connection = await client.connect("amqp://guest:guest@localhost:5672");
  }

  async consume(): Promise<any> {
    const consumer =
      (channel: Channel) =>
      (msg: ConsumeMessage | null): void => {
        if (msg) {
          // Display the received message
          console.log(msg.content.toString());
          // Acknowledge the message
          channel.ack(msg);
        }
      };

    const channel: Channel = await this.connection.createChannel();
    await channel.assertQueue("myQueue");
    await channel.consume("myQueue", consumer(channel));
  }
}
