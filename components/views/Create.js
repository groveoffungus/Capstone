import html from "html-literal";

export default () => html`
  <section id="create">
    <form id="create" class="createfilter" method="POST" action="">
      <h2>Create a Data Point</h2>
      <div>
        <label for="project">Project:</label>
        <select id="project" name="project">
          <option value="">Select a Project</option>
          <option value="Project001">Project001</option>
          <option value="Project002">Project002</option>
          <option value="Project003">Project003</option>
          <option value="Project004">Project004</option>
        </select>
      </div>
      <div>
        <label for="point">Point:</label>
        <input
          type="text"
          name="point"
          id="point"
          placeholder="Enter Point Name (No Spaces)"
          required
        />
      </div>
      <div>
        <label for="type">Point Type:</label>
        <select id="type" name="type">
          <option value="">Select a Point Type</option>
          <option value="natural feature">Natural Feature</option>
          <option value="human made">Human Made</option>
          <option value="remains">Human Remains</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label for="lat">Latitude:</label>
        <input
          type="number"
          step="any"
          name="lat"
          id="lat"
          value=0.0000
          required
        />
      </div>
      <div>
        <label for="lon">Longitude:</label>
        <input
          type="number"
          step="any"
          name="lon"
          id="lon"
          value=0.0000
          required
        />
      </div>
      <div>
        <label for="notes">Notes:</label>
        <input type="text" name="notes" id="notes" placeholder="Enter Notes" maxlength="50" />
      </div>
      <input type="submit" name="submit" value="Submit Point" />
    </form>
  </section>
`;
