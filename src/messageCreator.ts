export function messageCreator(
  content: string,
  sec: number,
  isItonLeave: boolean
) {
  if (!isItonLeave) {
    const routeInfoWindow = document.createElement("div");
    routeInfoWindow.classList.add("routeMessage");
    const windowMessage = document.createElement("p");
    const hr = document.createElement("hr");

    windowMessage.innerHTML = `${content}`;
    routeInfoWindow.append(windowMessage, hr);
    document.body.append(routeInfoWindow);
    setTimeout(() => {
      document.body.removeChild(routeInfoWindow);
    }, sec);
  } else {
    const routeInfoWindow = document.createElement("div");
    routeInfoWindow.classList.add("onLeaveMessage");
    const windowMessage = document.createElement("p");
    const hr = document.createElement("hr");

    windowMessage.innerHTML = `${content}`;
    routeInfoWindow.append(windowMessage, hr);
    document.body.append(routeInfoWindow);
    setTimeout(() => {
      document.body.removeChild(routeInfoWindow);
    }, sec);
  }
}
