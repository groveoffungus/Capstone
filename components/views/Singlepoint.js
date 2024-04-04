import html from "html-literal";

export default state => html`
  <section id="singlepoint">
    <table id="singlepoint">
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
