import { Connection } from "amqplib";
export class App {
  test: Connection | null = null;

  start(): void {
    console.log("Hello from the underworld!");
  }
}
