import styled from "styled-components";
import { useState } from "react";
import { Flex, Text, Button, Heading } from "@radix-ui/themes";
import { color } from "framer-motion";

// const [addCity, setAddCity] = useState("");
// const [deleteCity, setDeleteCity] = useState("");

const CityBlock = styled.div`
  width: 400px;
  ${"" /* background-color: #e1bee7; */}
  display: flex;
  justify-content: space-between;
`;

// const InputDeleteButton = styled.button`
//   width: 200px;
//   height: 40px;
//   background-color: #ffcdd2;
//   margin-bottom: 20px;
//   font-size: 16px;
//   font-family: Ubuntu;
//   font-weight: 500;
// `;

const CityName = styled.div`
  align-self: center;
  margin-bottom: 20px;
`;

function CityBlocks({ cities, deleteCity, sharedAPI }) {
  // const [search, setSearch] = useState("");

  // sharedAPI.then((result) => {
  //   console.log(result);
  // });

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
