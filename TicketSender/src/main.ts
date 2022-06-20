require("dotenv").config();
import client, { Channel, Connection, ConsumeMessage } from "amqplib";
export class App {
  private _channel: Channel | null = null;
  private _connection: Connection | null = null;

  constructor() {
    this._initialize();
  }

  private async _initialize(): Promise<void> {
    this._connection = await client.connect(
      "amqp://guest:guest@localhost:5672"
    );
    this._channel = await this._connection.createChannel();
  }

  async dispose(): Promise<void> {
    await this._channel?.close();
    await this._connection?.close();
  }
}
