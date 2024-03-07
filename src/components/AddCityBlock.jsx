import CityMenu from "./CityMenu";
import CityBlocks from "./CityBlocks";
import SubmitCities from "./SubmitCities";
import { useState } from "react";
import styled from "styled-components";

const ShowBtn = styled.button`
  width: 400px;
  height: 50px;
  background-color: ${(props) => (props.$isVisible ? "tomato" : "lime")};
  font-size: 20px;
  margin-bottom: 20px;
`;

function AddCityBlock() {
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
    <>
      <ShowBtn $isVisible={isVisible} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide my list" : "Add my own city list"}
      </ShowBtn>
      <div>
        {isVisible && (
          <div>
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
    </>
  );
}

export default AddCityBlock;
