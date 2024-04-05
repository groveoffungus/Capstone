import html from "html-literal";

export default state => html`
  <section id="admin">
    <h2>Admin Console</h2>
    <p>
      <h3>Administration of data points</h3>
    </p>
    <div class="filter">
      <label name="selectedProj">Project:</label>

      <input type="text" name="text" id="filter" />
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
            <form
              id="${point._id}"
              class="create"
              method="POST"
              action=""
              data-id=${point._id}
              data-index=${point._index}
            >
              <tr>
                <td class="adminElements">
                  <input
                    type="text"
                    name="project"
                    id="project"
                    value=${point.project}
                    required
                  />
                </td>
                <td class="adminElements">
                  <input
                    type="text"
                    name="point"
                    id="point"
                    value=${point.point}
                    required
                  />
                </td>
                <td class="adminElements">
                  <input
                    type="boolean"
                    name="dataPoint"
                    id="dataPoint"
                    value=${point.dataPoint}
                    required
                  />
                </td>
                <td class="adminElements">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    value="${point.type}"
                    required
                  />
                </td>
                <td class="adminElements">
                  <input
                    type="number"
                    name="lat"
                    id="lat"
                    value=${point.lat}
                    required
                  />
                </td>
                <td class="adminElements">
                  <input
                    type="number"
                    name="lon"
                    id="lon"
                    value=${point.lon}
                    required
                  />
                </td>
                <td class="adminElements">
                  <input
                    type="text"
                    name="notes"
                    id="notes"
                    value="${point.notes}"
                    required
                  />
                </td>
                <td class="adminElements">
                  <!-- <input type="text" name="submit" value="Save" /> -->
                  <button id="create">Save</button>
                </td>
              </tr>
            </form>
          `;
        })
        .join("")}
    </table>
  </section>
`;
