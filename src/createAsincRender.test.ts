/* eslint-disable no-promise-executor-return */
import { createAsincRender } from "./createAsincRender";

describe("createAsincRender", () => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  beforeEach(() => {
    document.body.innerHTML = `
    <article id="root"></article>
    <div id="windowPath"></div>`;
  });
  afterEach(() => {
    document.body.innerHTML = ``;
  });

  it("createAsincRender is work", async () => {
    const firstCall = createAsincRender("test", 50);
    firstCall({
      state: "123",
      currentPath: "currentPath",
      previousPath: "previousPath",
    });

    expect(document.getElementById("root")?.innerHTML).toBe(
      `<h2>Loading state...</h2>`
    );
    expect(document.querySelector(".routeMessage")?.innerHTML).toBe(
      "<p>test</p><hr>"
    );

    await sleep(100);

    expect(document.querySelector(".routeMessage")).toBeNull();
    expect(document.getElementById("root")?.innerHTML).toBe(
      `<h2>state: 123</h2>`
    );
    expect(document.getElementById("windowPath")?.innerHTML).toBe(
      "<h2>currentPath: currentPath</h2><h2>previousPath: previousPath</h2>"
    );
  });
});
