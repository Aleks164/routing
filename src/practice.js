/* eslint-disable no-unused-expressions */
import { getLocaion } from "./geo";

function Router() {
  let listeners = [];
  let currentPath = location.pathname;
  let previousPath = null;
  let onBeforeEnterPath = null;

  const isMatch = (match, path) =>
    (match instanceof RegExp && match.test(path)) ||
    (typeof match === "function" && match(path)) ||
    (typeof match === "string" && match === path);

  const handleListener = ({ match, onEnter, onLeave, onBeforeEnter }) => {
    console.log("1");
    const args = { currentPath, previousPath, state: history.state };
    isMatch(match, currentPath) && onEnter(args);
    onLeave && isMatch(match, previousPath) && onLeave();
    onBeforeEnter && isMatch(match, onBeforeEnterPath) && onBeforeEnter();

    console.log("onLeave", "isMatch(match, previousPath)", isMatch(match, previousPath))
  };

  const handleAllListeners = () => listeners.forEach(handleListener);

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
      console.log("removed");
      console.log("before", listeners);
      listeners = listeners.filter((el) => el.id !== id);
      console.log("after", listeners);
      console.log("id", id);
      // console.log("id", id);
    };
  };

  const go = (url, state) => {
    onBeforeEnterPath = url;
    previousPath = currentPath;
    history.pushState(state, url, url);
    currentPath = location.pathname;
    handleAllListeners();
    console.log("url", url, "currentPath", currentPath);
  };

  window.addEventListener("popstate", handleAllListeners);

  return { on, go };
}

// USAGE
const createRender = (content) => async (...args) => {
  console.log("3", content);
  let result = await getLocaion();
  // console.info(`${content} args=${JSON.stringify(args)}`);
  document.getElementById("root").innerHTML = `<h2>${JSON.stringify(result)}</h2>`;
};

const createAsincRender = (content) => async (...args) => {
  // let result = async () => await getLocaion();
  // let result = await getLocaion();
  document.getElementById(
    "root"
  ).innerHTML = `<h2>on ${content} location is </h2>`;
  // console.log("2", content);
  // let mult = Math.random();
  // setTimeout(() => {
  //   document.getElementById(
  //     "root"
  //   ).innerHTML = `<h2>on ${content} random is ${args[0].state}</h2>`;
  // }, 2000 * mult);
};

const router = Router();

const unsubscribe = router.on(/.*/, createAsincRender("/.*"));

router.on(
  (path) => path === "/contacts",
  createRender("/contacts"), // onEnter
  createAsincRender("[leaving] /contacts") // onLeave
);
router.on("/about", createAsincRender("/about"), createAsincRender("/about"), createAsincRender("/about"));
router.on("/about/us", createAsincRender("/about/us"));

document.body.addEventListener("click", (event) => {
  if (!event.target.matches("a")) {
    return;
  }
  event.preventDefault();
  const url = event.target.getAttribute("href");
  const random = Math.random();
  router.go(url, random);
  unsubscribe();
});
