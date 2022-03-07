/* eslint-disable no-unused-expressions */
import { createAsincRender } from "./createAsincRender";
import { Router } from "./router";
import "./index.css";

const router = Router();

router.on(
  "/",
  createAsincRender("you switched to Home ('/')", 1500) // onEnter
);

router.on(
  (path) => path === "/contacts",
  createAsincRender("you switched to /contacts", 1500), // onEnter
  createAsincRender("you have left /contacts", 1500) // onLeave
);
router.on(
  "/about",
  createAsincRender("you switched to /about", 1500), // onEnter
  createAsincRender("you have left /about", 1500), // onLeave
  createAsincRender("you going to /about", 1500) // onBeforeEnter
);
router.on(/\/about\/us/, createAsincRender("you switched to /about/us", 1500)); // onEnter


