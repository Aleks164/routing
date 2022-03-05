import { windowHistory } from "./windowHistory";
import { messageCreator } from "./messageCreator";

export const createAsincRender = (content, sec) => (...args) => {
  console.log(args);
  if (args[0].state) {
    document.getElementById("root").innerHTML = `<h2>Loading state...</h2>`;
  }
  windowHistory(args);
  messageCreator(content, sec);
  return new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById(
        "root"
      ).innerHTML = `<h2>state: ${args[0].state}</h2>`;
      resolve();
    }, sec);
  });
};
