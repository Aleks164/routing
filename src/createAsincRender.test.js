import { createAsincRender } from "./createAsincRender";

describe("createAsincRender", () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  document.body.innerHTML = `
<article id="root"></article>
<div id="windowPath"></div>`;

  it("createAsincRender is work", async () => {
    createAsincRender("you switched to Home ('/')", 1500);
    let q = [];
    q.push({ state: 123, currentPath: "/Contacts", previousPath: "/About" });
    q.forEach((el) => {
      createAsincRender(el);
    })

    const historyDiv = document.getElementById("windowPath");

    const path = `<h2>currentPath: /Contacts</h2><h2>previousPath: /About</h2>`;

    await sleep(1000);

    console.log(document.body.innerHTML);
    // expect(historyDiv.innerHTML).toBe(path);
    setTimeout(() => {

      expect(document.getElementById("root").innerHTML).toBe(`<h2>state: 123</h2>`);
    }, 2000);
    console.log(document.getElementById("root").innerHTML);
  });
});
