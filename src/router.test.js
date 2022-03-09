import { Router } from "./router";

const sleep = (ms = 100) =>
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
    const aboutEl = el.querySelector("#about");

    const onLeave = jest.fn().mockImplementation(
        () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 0);
            })
    );
    const onBeforeEnter = jest.fn().mockImplementation(
        () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 0);
            })
    );
    const onEnter = jest.fn().mockImplementation(
        () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 0);
            })
    );
    beforeEach(() => {
        location.hash = "/";
        jest.spyOn(global.Math, "random").mockReturnValue(0.123);
    });

    afterEach(() => {
        onLeave.mockClear();
        onBeforeEnter.mockClear();
        onEnter.mockClear();
        jest.spyOn(global.Math, "random").mockRestore();
    });

    // it("routerOn is a function", () => {
    //     const router = Router();
    //     const routerOn = router.on("/");
    //     expect(routerOn).toBeInstanceOf(Function);
    // });

    it("should invoke expected hooks on contacts click with onEnter", async () => {
        const router = Router();

        router.on((path) => path === "/contacts", onEnter);

        await sleep(100);

        contactsEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();
        expect(onEnter).lastCalledWith({
            currentPath: "/contacts",
            previousPath: "/",
            state: 0.123
        });
    });

    it("should invoke expected hooks on home click with hashApi", async () => {
        const router = Router({ apiHashOn: true });
        router.on((path) => path === "/contacts", onEnter, onLeave);
        router.on(/\/about/, undefined, undefined, onBeforeEnter);

        await sleep(100);
        contactsEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();

        aboutEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();

        expect(onEnter).toHaveBeenCalled();
        expect(onLeave).toHaveBeenCalled();
        expect(onBeforeEnter).toHaveBeenCalled();
    });

    it("expected hooks should be called at certain clicks", async () => {
        await sleep(100);
        const router = Router();
        router.on("/", onEnter);
        router.on((path) => path === "/contacts", onEnter, onLeave);
        router.on(/\/about/, onEnter, onLeave, onBeforeEnter);

        console.log(location.pathname);
        await sleep(100);

        contactsEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();

        // expect(onEnter).toHaveBeenCalledTimes(7);

        expect(onEnter).lastCalledWith({
            currentPath: "/contacts",
            previousPath: null,
            state: 0.123
        });

        homeEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();
        await sleep();
        // expect(onEnter).toHaveBeenCalledTimes(2);
        // expect(onLeave).toHaveBeenCalledTimes(1);

        expect(onEnter).lastCalledWith({
            currentPath: "/",
            previousPath: "/contacts",
            state: 0.123
        });

        expect(onLeave).lastCalledWith({
            currentPath: "/",
            previousPath: "/contacts",
            state: 0.123
        });
        aboutEl?.dispatchEvent(new Event("click", { bubbles: true }));
        await sleep();

        // expect(onBeforeEnter).toHaveBeenCalledTimes(1);

        expect(onBeforeEnter).lastCalledWith({
            currentPath: "/about",
            previousPath: "/",
            state: 0.123
        });
    });
});
