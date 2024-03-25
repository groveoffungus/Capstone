import html from "html-literal";

export default state => html`
  <section id="point">
    <div class="filter">
    <label name="selectedProj">Project:</label>

      <input type="search" name="search" id="filter" />
      <button id="search-button">Search</button>
    </div>
    <table id="points">
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
            <tr>
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
                  Edit
                </button>
                <button
                  class="delete"
                  data-id=${point._id}
                  data-index=${point._index}
                >
                  Delete
                </button>
              </td>
            </tr>
          `;
        })
        .join("")}
    </table>
  </section>
`;
