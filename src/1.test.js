import { test1 } from "./1";

describe.skip("createAsincRender", () => {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    beforeEach(() => {
        document.body.innerHTML = `
      <article id="root"></article>
      <div id="windowPath"></div>`;
    });
    afterEach(() => {
        document.body.innerHTML = ``;
    })

    it("createAsincRender is work", async () => {
        let qq = test1("123", 300);
        let q = { qq };
        let w = async ({ qq }) => {
            console.log(qq);
            await qq("qwe");
        }
        await w({ qq });
        await sleep(400);
        expect(document.getElementById("root").innerHTML).toBe(`<h2>state: 123</h2>`);
    });
});