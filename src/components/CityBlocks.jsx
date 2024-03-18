import styled from "styled-components";
import { Button } from "@radix-ui/themes";

const CityBlock = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const CityName = styled.div`
  align-self: center;
  margin-bottom: 20px;
`;

function CityBlocks({ cities, deleteCity, sharedAPI }) {
  return (
    <>
      {cities.map((city, index) => (
        <CityBlock key={city.id}>
          <CityName>
            {index + 1}) {city.name}:
            {sharedAPI?.main?.temp && ` ${city.weather}°C`}
            {/* {sharedAPI?.main?.temp !== undefined
              ? `Temp: ${sharedAPI.main.temp}°C`
              : ""} */}
          </CityName>
          <Button onClick={() => deleteCity(city.id)} color="ruby">
            Remove
          </Button>
        </CityBlock>
      ))}
    </>
  );
}

export default CityBlocks;
