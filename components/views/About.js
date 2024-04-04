import html from "html-literal";

export default () => html`
  <section id="about">
    <h2>About and Contact Information</h2>
    <div id=directions>
      <p>
    <h3>How to use this application</h3>
    This application is designed to store data points contained within a specific project.
    </p>
    <p>
      <h3>Create a Point</h3>
      After selecting a project, you can fill in the point data to be saved.
    </p>
    <p>
      <h3>Search points</h3>
      By selecting a current project, all data points will be displayed. Click to "Select" button to edit and/or view other information.
    </p>
    <p>
      <h3>Admin Panel</h3>
      This is used to create projects, turn on/off data points, and full data point editing capabilities.
    </p>
  </div>
  <div id=directions2>
    <h3>Contact Information</h3>
    For questions or comments, send an email to <a href="mailto:test@test.com">Cultural Archiver</a>.
</div>
  </section>
`;
