require("dotenv").config();
import { Options } from "amqplib";
import { App } from "./main";

const rabbitSettings: Options.Connect = {
  protocol: "amqp",
  hostname: "0.0.0.0",
  port: 5672,
  username: "guest",
  password: "guest",
};

const app = new App(rabbitSettings);

//NOTE: should this be async?
process.once("SIGINT", () => {
  app.dispose();
});
