import { createAsincRender } from "./createAsincRender";

describe.skip("createAsincRender", () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const listeners = [];
  beforeEach(() => {
    document.body.innerHTML = `
    <article id="root"></article>
    <div id="windowPath"></div>`;
  });
  afterEach(() => {
    document.body.innerHTML = ``;
  })

  it("createAsincRender is work", async () => {
    // function on(match, onEnter) {
    //   const listener = { match, onEnter };
    //   listeners.push(listener);
    // }
    // const args = { currentPath: "/Contacts", previousPath: "/About", state: 123 };

    // async function handleListener({ onEnter }) {
    //   try {
    //     await onEnter(args);
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // }

    // const historyDiv = document.getElementById("windowPath");

    // const path = `<h2>currentPath: /Contacts</h2><h2>previousPath: /About</h2>`;
    const load = `<h2>Loading state...</h2>`;

    // on(
    //   "/",
    //   createAsincRender("you switched to Home ('/')", 150) // onEnter
    // );
    // console.log(listeners)
    // handleListener();
    await createAsincRender("you switched to Home ('/')", 150)

    expect(document.getElementById("root").innerHTML).toBe(load);
    await sleep(300);

    console.log(document.body.innerHTML);
    // expect(historyDiv.innerHTML).toBe(path);
    setTimeout(() => {

      expect(document.getElementById("root").innerHTML).toBe(`<h2>state: 123</h2>`);
    }, 2000);
    console.log(document.getElementById("root").innerHTML);
  });
});
