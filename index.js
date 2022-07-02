// import express from "express"
// import dotenv from "dotenv"
// import {send_ok, send_fail} from "../libs/utils/functionReturn.js"
// const send_ok = require("./libs/utils/functionReturn")

const express = require("express")
const dotenv = require("dotenv")
const {send_ok, send_fail} =require("./libs/utils/functionReturn")
const path = require("path")

// dotenv.config();

const node_env = process.env.NODE_ENV || "development";
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
  path: path.join(__dirname, envPath),
});

const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
    res.status(200).json(send_ok("Express + Typescript Server", null))
})

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`)
})