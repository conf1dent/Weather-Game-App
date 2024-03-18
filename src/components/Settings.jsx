import CityMenu from "./CityMenu";
import CityBlocks from "./CityBlocks";
import SubmitCities from "./SubmitCities";
import { useState } from "react";
// import styled from "styled-components";
import { Button } from "@radix-ui/themes";

// const ShowBtn = styled.button`
//   width: 400px;
//   height: 50px;
//   background-color: ${(props) => (props.$isVisible ? "tomato" : "lime")};
//   font-size: 20px;
//   margin-bottom: 20px;
// `;

function Settings() {
  const [cities, setCities] = useState([
    // { id: 1, name: "Bangkok" },
    // { id: 2, name: "Tokyo" },
    // { id: 3, name: "Dubai" },
  ]);

  const [sharedAPI, setSharedAPI] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  function addCity(newCity) {
    // setCities([...cities, newCity]);
    setCities((prevCities) => [...prevCities, newCity]);
  }

  function deleteCity(id) {
    setCities(cities.filter((city) => city.id !== id));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "400px",
        height: "80vh",
        // backgroundColor: "blue",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "calc(20%)",
          alignItems: "center",
        }}
      >
        <Button
          // $isVisible={isVisible}
          onClick={() => setIsVisible(!isVisible)}
          size="4"
          style={{
            backgroundColor: isVisible ? "#FF8A65" : "#7C4DFF",
            color: isVisible ? "#F5F5F5" : "#E8EAF6",
            // marginTop: "100px",
          }}
        >
          <strong>{isVisible ? "Hide my list" : "Add my own city"}</strong>
        </Button>
      </div>
      <div style={{ height: "calc(80%)" }}>
        {isVisible && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CityMenu addCity={addCity} setSharedAPI={setSharedAPI} />
            <CityBlocks
              cities={cities}
              deleteCity={deleteCity}
              sharedAPI={sharedAPI}
            />
            <SubmitCities cities={cities} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
