import styled from "styled-components";
import React, { useState } from "react";

const SubmitBtn = styled.button`
  width: 200px;
  height: 40px;
  background-color: teal;
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: Ubuntu;
  font-weight: 500;
`;

// const [cityDatabase, setCityDatabase] = useState([{ id: 0, city: "" }]);

function SubmitCities({ cities }) {
  const [isNotEmptyObj, setIsNotEmptyObj] = useState(true);

  // if (!cities) {
  //   setIsNotEmptyObj(false);
  // }

  function SubmitHandler() {
    if (!isNotEmptyObj) return <div>Please provide valid city name</div>;

    const jsonString = JSON.stringify(cities);
    console.log(jsonString);

    let jsonFile = new File([jsonString], "cities.json", {
      type: "application/json",
    });
    console.log(jsonFile);

    let url = URL.createObjectURL(jsonFile);
    let a = document.createElement("a");
    a.href = url;
    console.log(a.href);
    a.download = jsonFile.name;
    a.textContent = `Download ${jsonFile.name}`;
    document.querySelector("body").append(a);
    // a.click(); //automatically downloads json file
  }

  return <SubmitBtn onClick={SubmitHandler}>Submit</SubmitBtn>;
}

export default SubmitCities;
