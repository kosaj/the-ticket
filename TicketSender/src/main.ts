import client, { Channel, Connection, Options } from "amqplib";
export class App {
  private _channel: Channel | null = null;
  private _connection: Connection | null = null;

  constructor(settings: Options.Connect) {
    this._initialize(settings);
  }

  private async _initialize(settings: Options.Connect): Promise<void> {
    try {
      this._connection = await client.connect(settings);
      this._channel = await this._connection.createChannel();

      console.log("Connected!");
    } catch (error) {
      console.error(error);
    } finally {
      this.dispose();
    }
  }

  async dispose(): Promise<void> {
    await this._channel?.close();
    await this._connection?.close();
    console.log("Disposed!");
  }
}
