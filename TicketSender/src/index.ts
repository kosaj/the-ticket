require("dotenv").config();
import { Options } from "amqplib";
import { App } from "./main";

const rabbitSettings: Options.Connect = {
  protocol: "amqp",
  hostname: "rabbitmq",
  port: 5672,
  username: "guest",
  password: "guest",
  vhost: "/",
};

const app = new App(rabbitSettings);

//NOTE: should this be async?
process.once("SIGINT", () => {
  app.dispose();
});
