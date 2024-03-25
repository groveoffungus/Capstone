import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}


function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Create") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);


      // Create a request body object to send to the API and make sure dataPoint is defaulted to true
      const requestData = {
        project: inputList.project.value,
        dataPoint: true,
        point: inputList.point.value,
        type: inputList.type.value,
        lat: inputList.lat.value,
        lon: inputList.lon.value,
        notes: inputList.notes.value
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new data point
        .post(`${process.env.CULTURAL_ARCHIVE_API_URL}/projects`, requestData)
        .then(response => {
          //  Then push the new point onto the Create state projects attribute, so it can be displayed in the point list
          store.Create.points.push(response.data);
          router.navigate("/Point");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
  if (state.view == "Point") {
    document
      .getElementById("search-button")
      .addEventListener("click", event => {
        event.preventDefault();

        const filter = document.getElementById("filter").value;

        axios
          .get(`${process.env.CULTURAL_ARCHIVE_API_URL}/projects?project=${filter}`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            store.Point.points = response.data;
            router.navigate("/Point");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      });

    Array.from(document.getElementsByClassName("delete")).forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();

        const projectId = event.target.dataset.id;
        const projectIndex = event.target.dataset.index;

        if (confirm(`Are you sure you want to delete ${projectId}`)) {
          axios
            .delete(`${process.env.CULTURAL_ARCHIVE_API_URL}/projects/${projectId}`)
            .then(response => {
              // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
              store.Create.points.splice(projectIndex, 1);
              router.navigate("/Point");
            })
            .catch(error => {
              console.log("It puked", error);
            });
        }
      });
    });
  }
}



router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=anchorage`
          )
          .then(response => {
            console.log(response);
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          });
        break;
      case "Project":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.CULTURAL_ARCHIVE_API_URL}/projects`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            store.Create.points = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);

      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
