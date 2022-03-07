import { Router } from "./router";

const sleep = (ms = 50) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

describe("router", () => {
    const el = document.createElement("div");
    document.body.appendChild(el);

    el.innerHTML = `
      <nav>
        <a id="home" href="/">Home</a>
        <a id="contacts" href="/contacts">Contacts</a>
        <a id="about" href="/about">About</a>
        <a id="about-us" href="/about/us">About / Us</a>
      </nav>
`;
    const homeEl = el.querySelector("#home");
    const contactsEl = el.querySelector("#contacts");

    const onLeave = jest.fn().mockImplementation(() => new Promise((resolve) => {
        setTimeout(() => {
            console.log("ok")
            resolve();
        }, 200)
    }));
    const onBeforeEnter = jest.fn().mockImplementation(() => new Promise((resolve) => {
        setTimeout(() => {
            console.log("ok")
            resolve();
        }, 200)
    }));
    const onEnter = jest.fn().mockImplementation(() => new Promise((resolve) => {
        setTimeout(() => {
            console.log("ok")
            resolve();
        }, 200)
    }));
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123);
    });

    afterEach(() => {
        onLeave.mockRestore();
        onBeforeEnter.mockRestore();
        onEnter.mockRestore();
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    it("should create Router with expected unsubscribe function", () => {
        const router = Router();
        const unsubscribe = router.on("/");
        expect(unsubscribe).toBeInstanceOf(Function);
    });

    it("should unsubscribe expected hook", async () => {
        const router = Router();

        router.on("/", onEnter);

        homeEl?.dispatchEvent(new Event("click", { bubbles: true }));

        await sleep();
        expect(onEnter).toHaveBeenCalledTimes(1);

        homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();
        expect(onEnter).toHaveBeenCalledTimes(1);
    });

    // it("should invoke expected hooks on home click with hashApi", async () => {
    //     const router = new Router({ hashApiEnabled: true });
    //     router.on({ match: "/", onBeforeEnter, onEnter, onLeave });

    //     homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
    //     await sleep();

    //     expect(onBeforeEnter).toHaveBeenCalled();
    //     expect(onEnter).toHaveBeenCalled();
    //     expect(onLeave).toHaveBeenCalled();
    // });

    it("should invoke expected hooks on contacts click", async () => {
        const router = Router();
        router.on("/", onEnter, onLeave, onBeforeEnter);
        router.on((path) => path === "/contacts",
            onEnter, onLeave, onBeforeEnter
        );

        homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
        contactsEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();

        expect(onBeforeEnter).toHaveBeenCalledTimes(2);
        expect(onEnter).toHaveBeenCalledTimes(2);
        expect(onLeave).toHaveBeenCalledTimes(2);

        expect(onBeforeEnter).lastCalledWith({
            currentPath: "/contacts",
            previousPath: "/",
            state: 0.123,
        });
        expect(onEnter).lastCalledWith({
            currentPath: "/contacts",
            previousPath: "/",
            state: 0.123
        });
        expect(onLeave).lastCalledWith({
            currentPath: "/",
            previousPath: "/",
            state: 0.123,
        });
    });
});