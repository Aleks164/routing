/* eslint-disable no-unused-expressions */
import { createAsincRender } from "./createAsincRender";
import "./main.css";

function Router() {
  let listeners = [];
  let currentPath = location.pathname;
  let previousPath = null;

  const isMatch = (match, path) =>
    (match instanceof RegExp && match.test(path)) ||
    (typeof match === "function" && match(path)) ||
    (typeof match === "string" && match === path);

  const handleListener = async ({ match, onEnter, onLeave, onBeforeEnter }) => {
    const args = { currentPath, previousPath, state: history.state };
    if (currentPath !== previousPath && Boolean(onBeforeEnter)) {
      isMatch(match, currentPath) &&
        (await onBeforeEnter(args).then(async () => {
          isMatch(match, currentPath) && (await onEnter(args));
          onLeave && isMatch(match, previousPath) && (await onLeave(args));
        }));
    } else if (currentPath !== previousPath || args.state === null) {
      isMatch(match, currentPath) && (await onEnter(args));
      onLeave && isMatch(match, previousPath) && (await onLeave(args));
    }
  };

  const handleAllListeners = () => {
    const promList = listeners.map((el) => el);
    const chain = () => {
      const currentToDo = promList.shift();
      if (currentToDo) {
        handleListener(currentToDo).catch((e) => console.error(e));
      }
    };

    for (let i = 0; i < listeners.length; i++) {
      chain();
    }
  };

  const generateId = () => {
    const getRandomNumber = () =>
      Math.floor(Math.random() * listeners.length * 1000);
    const doesExist = (id) => listeners.find((listener) => listener.id === id);

    let id = getRandomNumber();
    while (doesExist(id)) {
      id = getRandomNumber();
    }
    return id;
  };

  const on = (match, onEnter, onLeave, onBeforeEnter) => {
    const id = generateId();
    const listener = { id, match, onEnter, onLeave, onBeforeEnter };
    listeners.push(listener);
    handleListener(listener);

    return () => {
      listeners = listeners.filter((el) => el.id !== id);
    };
  };

  const go = (url, state) => {
    previousPath = currentPath;
    history.pushState(state, url, url);
    currentPath = location.pathname;
    handleAllListeners();
  };

  window.addEventListener("popstate", handleAllListeners);

  return { on, go };
}

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

document.body.addEventListener("click", (event) => {
  if (!event.target.matches("a")) {
    return;
  }
  event.preventDefault();
  const url = event.target.getAttribute("href");
  const random = Math.random();
  router.go(url, random);
});
