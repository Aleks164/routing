export function messageCreator(content, sec) {
  const routeInfoWindow = document.createElement("div");
  routeInfoWindow.classList.add("route");
  const windowMessage = document.createElement("p");
  const hr = document.createElement("hr");
  windowMessage.innerHTML = `${content}`;
  routeInfoWindow.append(windowMessage, hr);
  document.body.append(routeInfoWindow);
  setTimeout(() => {
    document.body.removeChild(routeInfoWindow);
  }, sec);
}
