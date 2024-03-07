import styled from "styled-components";
import React, { useState, useRef } from "react";

const CityPost = styled.form`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const CityInput = styled.input`
  width: 190px;
  margin-right: 10px;
  cursor: pointer;
`;

const InputButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #80deea;
  font-size: 16px;
  font-family: Ubuntu;
  font-weight: 500;
`;

// const ErrorText = styled.text`
//   width: 200px;
//   font-size: 16px;
//   font-family: Ubuntu;
//   font-weight: 300;
// `;

function CityMenu({ addCity, setSharedAPI }) {
  const [name, setName] = useState("");
  // const [weather, setWeather] = useState({});
  // const inputRef = useRef();
  const api = {
    key: "c1291c1bd863d0a1593f8f4f254860f1",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  // function addNewCity(e) {
  //   e.preventDefault();

  //   if (!name) return;

  //   // const newCity = { id: Date.now(), name: name, weather: result.name.temp };
  //   fetch(`${api.base}weather?q=${name}&units=metric&APPID=${api.key}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setWeather(result);
  //       setSharedAPI(weather);
  //       addCity({
  //         id: Date.now(),
  //         name: result.name,
  //         weather: result.main.temp,
  //       });
  //       setName("");
  //     });
  // }

  function addNewCity(e) {
    e.preventDefault();

    // if (!name) return;
    fetch(`${api.base}weather?q=${name}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        // Assuming `result.main` contains the temperature data
        // and `result.main.temp` is the temperature you want to save
        if (result.main && result.main.temp) {
          const newCity = {
            id: Date.now(),
            name: result.name, // Use the name from the result
            weather: result.main.temp, // Directly use the temperature from the result
          };
          // Now, setSharedAPI with the entire result to share the API data
          setSharedAPI(result); // Move this inside the then() to ensure it uses the latest fetched data
          addCity(newCity); // Add the city with its weather data
        }
        setName(""); // Reset the input field
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
        // Handle the error state appropriately here (e.g., showing an error message)
      });
  }

  return (
    <CityPost>
      <CityInput
        value={name}
        // ref={inputRef}
        // onChange={(e) => setName(e.target.value)}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter city"
      ></CityInput>
      <InputButton onClick={addNewCity}>Add</InputButton>
    </CityPost>
  );
}

export default CityMenu;
