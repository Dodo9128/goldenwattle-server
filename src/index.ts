import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { send_ok } from "./libs/utils/functionReturn";

const node_env: string | undefined = process.env.NODE_ENV || "development";
let envPath = "";
switch (node_env) {
  case "development":
    envPath = ".env.development";
    break;
  case "local":
    envPath = ".env.local";
    break;
  case "production":
    envPath = ".env.production";
    break;

  default:
    envPath = ".env.development";
}

console.log("Environment Path is: ", envPath);
dotenv.config({
  path: envPath
});

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(send_ok("Express + Typescript Server", null));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
