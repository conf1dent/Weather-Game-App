// import styled from "styled-components";
import { useState } from "react";
import { Button } from "@radix-ui/themes";

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

  return (
    <Button
      onClick={SubmitHandler}
      size="4"
      style={{ backgroundColor: "#00E5FF", color: "#006064" }}
    >
      <strong>Submit</strong>
    </Button>
  );
}

export default SubmitCities;
