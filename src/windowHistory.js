export function windowHistory(args) {
  const historyDiv = document.getElementById("windowPath");
  if (args[0].previousPath) {
    historyDiv.innerHTML = `<h2>currentPath: ${args[0].currentPath}</h2><h2>previousPath: ${args[0].previousPath}</h2>`;
  } else {
    historyDiv.innerHTML = `<h2>currentPath: ${location.pathname}</h2>`;
  }
}
