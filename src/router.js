/* eslint-disable no-unused-expressions */
export function Router(config) {
    let listeners = [];
    let currentPath = location.pathname;
    let previousPath = null;

    const isMatch = (match, path) =>
        (match instanceof RegExp && match.test(path)) ||
        (typeof match === "function" && match(path)) ||
        (typeof match === "string" && match === path);

    const handleListener = async ({ match, onEnter, onLeave, onBeforeEnter }) => {
        const args = { currentPath, previousPath, state: history.state };
        if (currentPath !== previousPath || args.state === null) {
            if (isMatch(match, currentPath)) {
                await onBeforeEnter?.(args);
                await onEnter?.(args);
            }
            if (isMatch(match, previousPath)) {
                await onLeave?.(args);
            }
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
        if (config && config.apiHashOn) {
            location.hash = url;
        } else {
            history.pushState(state, url, url);
        }
        previousPath = currentPath;
        currentPath = location.pathname;
        handleAllListeners();
    };

    window.addEventListener("popstate", () => {
        previousPath = currentPath;
        currentPath = location.pathname;
        handleAllListeners();
    });

    document.body.addEventListener("click", (event) => {
        if (!event.target.matches("a")) {
            return;
        }
        event.preventDefault();

        const url = event.target.getAttribute("href");

        const random = Math.random();
        go(url, random);
    });

    return { on };
}
