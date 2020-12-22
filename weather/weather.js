class Weather extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.renderWeather();
  }

  renderWeather() {
    navigator.geolocation.getCurrentPosition((success) => {
      const lat = success.coords.latitude;
      const long = success.coords.longitude;
      const API_KEY = '5f810b36eb70f7b539257c9ce3a3ca10';
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const image = `${data.weather[0].description.replace(/\s/g, '')}.png`;
          console.log(image);
          this.root.innerHTML = `
        <style>
          .weatherWrap{
            position: absolute;
            color: white;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 0.25rem 1rem 0.25rem 1rem;
            width: fit-content;
            height: fit-content;
            text-align: center;
            border-radius: 1rem;
            line-height: 0.5;
          }
        </style>
        <div class='weatherWrap'>
          <h1 class='city'>${data.name}, ${data.sys.country}</h1>
          <h2 class='temp'>${data.main.temp} ℉</h2>
          <img src='./img/${image ?? null}'>
          <h2 class='desc'>${data.weather[0].description.toUpperCase()}</h2>
          <h2 class='temp_range'>${data.main.temp_min}℉ ~ ${
            data.main.temp_max
          }℉</h2>
        </div>
        `;
        });
    });
  }
}

customElements.define('gc-weather', Weather);

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 5f810b36eb70f7b539257c9ce3a3ca10
