import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";

function App(props) {
  function expandCountry() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <Card
        name={props.name}
        population={props.population}
        capital={props.capital}
        subregion={props.subregion}
        flag={props.flag}
        language={props.language}
      />
    );
  }

  return (
    <tr className="border">
      <td className="No">{props.No}</td>
      <td onClick={expandCountry}>{props.name}</td>
      {/* <td>{props.population}</td>
      <td>{props.capital}</td>
      <td>{props.subregion}</td> */}
      <td>
        <img height="100px" width="300px" src={props.flag} alt="flag" />
      </td>
    </tr>
  );
}

export default App;
