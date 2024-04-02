import html from "html-literal";

export default state => html`
  <section id="singlepoint">
    <table id="singlepoints">
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
