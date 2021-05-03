import * as sapper from "@sapper/server";
import compression from "compression";
import express from "express";
import sirv from "sirv";

const PORT = process.env.PORT;
const mode = process.env.NODE_ENV;
const dev = mode === "development";

const app = express();

app
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err?: any): void => {
    if (err) console.log("error", err);
  });
