import html from "html-literal";
import Logo from "../docs/images/icon.jpeg";

export default state => html`
  <header>
    <div>
      <img class="centerLogo" src=${Logo} alt="Culture" />
    </div>
    <h1>${state.header}</h1>
  </header>
`;
