import React, { useState } from "react";

function Cities() {
  const [cities, setCities] = useState(["punjab", "haryana"]);

  const UpdatedCities = (event) => {
    if (event.key === "Enter") {
      let city = event.target.value;
      setCities([city, ...cities]);
      event.target.value = "";
    }
  };

  const renderCities = () => {
    return (
      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input type="text" onKeyUp={UpdatedCities} />

      {renderCities()}
    </div>
  );
}

export default Cities;
