export async function getLocaion() {
  let cityCache;
  try {
    const response = await window.fetch(`https://get.geojs.io/v1/ip/geo.json`);
    cityCache = await response.json();
    return cityCache;
  } catch (e) {
    return "Failed to fetch of geo";
  }
}
