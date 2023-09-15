import "./styles.css";

const myjson = [
  {
    Car0 : {
      Color: "Rose red",
      "Tinted windows": true,
      Wheels: "4",
      RoofCargo: "null",
      Entertainment: "Apple CarPlay",
      Accessories: "santav, cruise control"
    },
    Car1 : {
      Color: "Navy blue",
      "Tinted windows": false,
      Wheels: "4",
      RoofCargo: "Thule",
      Entertainment: "FM Radio",
      Accessories: "self drive system, luggage cover"
    }
  },
];

document.getElementById("app").innerHTML = `
<div id="json">
  <h1>Car properties</h1>
  <p>Color: ${myjson[0].Car0.Color}</p>
  <p>Tinted windows: ${myjson[0].Car0["Tinted windows"]}</p>

  <table>
    <tr>
      <th>Property</th>
      <th>Car 0</th>
      <th>Car 1</th>
    </tr>
    <tr>
      <td>Color</td>
      <td>${myjson[0].Car0.Color}</td>
      <td>${myjson[0].Car1.Color}</td>
    </tr>
    <tr>
      <td>Tinted windows</td>
      <td>${myjson[0].Car0["Tinted windows"]}</td>
      <td>${myjson[0].Car1["Tinted windows"]}</td>
    </tr>
    <tr>
      <td>Wheels</td>
      <td>${myjson[0].Car0.Wheels}</td>
      <td>${myjson[0].Car1.Wheels}</td>
    </tr>
    <tr>
      <td>Roof cargo</td>
      <td>${myjson[0].Car0.RoofCargo}</td>
      <td>${myjson[0].Car1.RoofCargo}</td>
    </tr>
    <tr>
      <td>Entertainment</td>
      <td><ul><li>${myjson[0].Car0.Entertainment}</li></ul></td>
      <td><ul><li>${myjson[0].Car1.Entertainment}</li></ul></td>
    </tr>
    <tr>
      <td>Accessories</td>
      <td>${myjson[0].Car0.Accessories}</td>
      <td>${myjson[0].Car1.Accessories}</td>
    </tr>
  </table>
</div>
`;
