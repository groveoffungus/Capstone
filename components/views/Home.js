import html from "html-literal";

export default state => html`
  <section id="home">
    <h2>Place Holder</h2>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
