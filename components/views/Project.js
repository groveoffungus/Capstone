import html from "html-literal";

export default () => html`
  <section id="projectSelect">
    <div>
      <h2>Project Selection</h2>
      <p>
        All cultural data points are connected with the project. Please select
        from the drop down menu a project to work on. If this is a new project,
        proceed to the Admin Panel for project creation.
      </p>
    </div>
    <div>
      <form id="projectForm" method="POST" action="">
        <h3>Select a project</h3>
        <div>
          <label for="project">Project:</label>
          <select id="project" name="project">
            <option value="">Select a Project</option>
            <option value="tempData1">TempData1</option>
            <option value="tempData2">TempData2</option>
            <option value="tempData3">TempData3</option>
            <option value="tempData4">TempData4</option>
          </select>
        </div>
        <input type="submit" name="submit" value="Submit Project" />
      </form>
    </div>
  </section>
`;
