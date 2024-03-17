import html from "html-literal";
import appLogo from "../assets/img/GeezerIcon.png";

export default state => html`
  <header>
    <img
      style="border:5px solid black;"
      src="${appLogo}"
      alt="Logo"
      width="50"
      height="50"

    />
    <h1>${state.header}</h1>
  </header>
`;
