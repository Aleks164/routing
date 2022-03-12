import { windowHistory } from "./windowHistory";
import { messageCreator } from "./messageCreator";

export type Args = {
  state: unknown;
  currentPath: string;
  previousPath: string;
};

export const createAsincRender =
  (content: string, sec: number, isItonLeave?: boolean) =>
  (...args: Args[]) => {
    windowHistory(args as unknown as Args);
    messageCreator(content, sec, isItonLeave);
    return new Promise((resolve) => {
      if (args[0].state) {
        document.getElementById("root").innerHTML = `<h2>Loading state...</h2>`;
      }
      setTimeout(() => {
        document.getElementById("root").innerHTML = ``;
        document.getElementById(
          "root"
        ).innerHTML += `<h2>state: ${args[0].state}</h2>`;
        resolve("ok");
      }, sec);
    });
  };
