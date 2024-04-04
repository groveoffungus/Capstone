import html from "html-literal";

export default state => html`
  <section id="point">
  <h2>Data Point Console</h2>
    <p>
      <h3>Search for data points based on a project</h3>
    </p>
    <div class="filter">
      <h3>Enter a known project</h3>
      <label name="selectedProj">Project:</label>

      <input type="search" name="search" id="filter" />
      <button id="search-button">Search</button>
    </div>
    <div class="pointOutput">
    <table>
      <tr>
        <th>Project</th>
        <th>Point</th>
        <th>Type</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Notes</th>
      </tr>
      ${state.points
        .map((point, index) => {
          return html`
            <tr id="pointElements">
              <td>${point.project}</td>
              <td>${point.point}</td>
              <td>${point.type}</td>
              <td>${point.lat}</td>
              <td>${point.lon}</td>
              <td>${point.notes}</td>
              <td>
                <button
                  class="edit"
                  data-id=${point._id}
                  data-index=${point._index}
                >
                  Select
                </button>
              </td>
            </tr>
          `;
        })
        .join("")}
    </table>
    </div>
  </section>
`;
