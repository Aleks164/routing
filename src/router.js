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
        // console.log("____________handleListener", typeof onEnter)
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

        // if (currentPath !== previousPath && Boolean(onBeforeEnter)) {
        //     isMatch(match, currentPath) &&
        //         (await onBeforeEnter(args).then(async () => {
        //             isMatch(match, currentPath) && (await onEnter(args));
        //             onLeave && isMatch(match, previousPath) && (await onLeave(args));
        //         }));
        // } else if (currentPath !== previousPath || args.state === null) {
        //     isMatch(match, currentPath) && (await onEnter(args));
        //     onLeave && isMatch(match, previousPath) && (await onLeave(args));
        // }
    };

    const handleAllListeners = () => {
        const promList = listeners.map((el) => el);
        const chain = () => {
            const currentToDo = promList.shift();
            if (currentToDo) {
                // console.log("____________chain", typeof currentToDo)
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
        // console.log("____________on", typeof onEnter)
        return () => {
            listeners = listeners.filter((el) => el.id !== id);
        };
    };

    const go = (url, state) => {
        if (config && config.apiHashOn) {
            // console.log("config", config);
            location.hash = url;
        } else {
            history.pushState(state, url, url);
        }
        previousPath = currentPath;
        currentPath = location.pathname;
        handleAllListeners();
    };

    window.addEventListener("popstate", handleAllListeners);

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
