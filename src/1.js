export const test1 = (q, sec) => (abc) => new Promise((resolve) => {
    console.log(abc);
    setTimeout(() => {
        document.getElementById(
            "root"
        ).innerHTML = `<h2>state: ${q}</h2>`;
        resolve();
    }, sec);
})