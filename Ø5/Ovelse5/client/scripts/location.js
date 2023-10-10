let storeItems = document.getElementById("store");
let storeHeader = document.getElementById("store-header");
let gingerShot = document.getElementById("ginger_shot");
let greenTonic = document.getElementById("green_tonic");

async function getWeather() {
  // Show loading message
  document.getElementById("loading").style.display = "block";

  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const result = await axios.get(
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
          );
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, 1000); // 1 seconds
    });
    return response.data.current_weather; //result
  } catch (error) {
    console.log(error);
  } finally {
    // Hide loading message
    document.getElementById("loading").style.display = "none";
  }
}

getWeather().then((weather) => {
  console.log(weather);
  if (weather.temperature >= 10) {
    // change color on ginger shot
    gingerShot.style.backgroundColor = "yellow";
  }
  if (weather.temperature <= 10) {
    // remove greenTonic
    greenTonic.remove();
  }
  if (weather.temperature >= 5) {
    // change color on store
    storeItems.style.backgroundColor = "green";
    storeHeader.style.color = "white";
  }
});
