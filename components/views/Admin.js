import html from "html-literal";

export default state => html`
  <section id="admin">
    <h2>Admin Console</h2>
    <p>
      This is a administration view for editing all data points.
    </p>
    <div class="filter">
      <label name="selectedProj">Project:</label>

      <input type="search" name="search" id="filter" />
      <button id="search-button">Search</button>
    </div>
    <table id="points">
      <tr>
        <th>Project</th>
        <th>Point</th>
        <th>DataPoint</th>
        <th>Type</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Notes</th>
      </tr>
      ${state.points
        .map((point, index) => {
          return html`
            <tr>
              <td>
                <input
                  type="text"
                  name="project"
                  id="project"
                  value=${point.project}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="point"
                  id="point"
                  value=${point.point}
                  required
                />
              </td>
              <td>
                <input
                  type="boolean"
                  name="dataPoint"
                  id="dataPoint"
                  value=${point.dataPoint}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="type"
                  id="type"
                  value="${point.type}"
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  name="lat"
                  id="lat"
                  value=${point.lat}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  name="lon"
                  id="lon"
                  value=${point.lon}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="notes"
                  id="notes"
                  value="${point.notes}"
                  required
                />
              </td>
              <td>
                <button
                  class="save"
                  data-id=${point._id}
                  data-index=${point._index}
                >
                  Save
                </button>
              </td>
            </tr>
          `;
        })
        .join("")}
    </table>
  </section>
`;
