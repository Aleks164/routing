import { windowHistory } from "./windowHistory";
import { messageCreator } from "./messageCreator";

export type Args = {
  state: unknown;
  currentPath: string;
  previousPath: string;
};

type IsItonLeave = undefined | boolean;

export const createAsincRender =
  (content: string, sec: number, isItonLeave: IsItonLeave = undefined) =>
  (...args: Args[]) => {
    windowHistory(args as unknown as Args);
    messageCreator(content, sec, isItonLeave);
    const rootEl = document.getElementById("root");
    return new Promise((resolve) => {
      if (rootEl) {
        if (args[0].state) {
          rootEl.innerHTML = `<h2>Loading state...</h2>`;
        }
        setTimeout(() => {
          if (rootEl) {
            rootEl.innerHTML = ``;
            rootEl.innerHTML += `<h2>state: ${args[0].state}</h2>`;
            resolve("ok");
          }
        }, sec);
      }
    });
  };
