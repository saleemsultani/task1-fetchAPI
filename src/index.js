import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
// import Data from "./Data.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const region = prompt("Enger Name of region");

let Data;
function renderData(data) {
  Data = data;
}
fetch(`https://restcountries.com/v3.1/region/${region}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    renderData(data);
  });

function renderCountry(country, No) {
  let {
    name: { common: countryName },
  } = country;
  const { population } = country;
  const { languages: languages } = country;
  const [language] = Object.values(languages);

  const { capital } = country;
  const { subregion } = country;
  const {
    flags: { png: flag },
  } = country;

  return (
    <App
      key={No + 1}
      No={No + 1}
      name={countryName}
      population={population}
      capital={capital}
      subregion={subregion}
      flag={flag}
      language={language}
    />
  );
}

setTimeout(function () {
  root.render(
    <table className="border">
      <tr className="border">
        <th className="No">No</th>
        <th>Name</th>
        {/* <th>Population</th>
        <th>Capital</th>
        <th>Subregion</th> */}
        <th>Flag</th>
      </tr>
      {Data.map(renderCountry)}
    </table>
  );
}, 1000);
