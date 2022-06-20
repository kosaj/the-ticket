import { App } from "./main";

const app = new App();

//NOTE: should this be async?
process.once("SIGINT", () => {
  app.dispose();
});
