import styled from "styled-components";
import cities from "../data/citiesFull.json";
import React, { useState, useRef } from "react";

const Block = styled.div`
  height: 550px;
  background-color: orange;
  flex-direction: column;
  display: flex;
`;

const CityInfoBlock = styled.div`
  width: 100%;
  height: 200px;
  margin: auto;
  background-color: lightgreen;
  align-self: flex-start;
`;

const CityInfo = styled.div`
  width: 90%;
  height: 150px;
  margin: auto;
  background-color: lightgray;
`;

const Answers = styled.div`
  width: 100%;
  height: 150px;
  background-color: blue;
  display: flex;
  justify-content: space-around;
`;

const Answer = styled.button`
  width: 200px;
  height: 50px;
  background-color: lightgreen;
  align-self: flex-end;
  margin-bottom: 20px;
  font-size: 20px;
`;

function QuestionBlock() {
  const api = {
    key: "c1291c1bd863d0a1593f8f4f254860f1",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  return (
    <Block>
      <CityInfoBlock>
        <CityInfo>
          {/* fetch(`${api.base}weather?q=${cities[0].city}&units=metric&APPID=$
          {api.key}`).then((res) => res.json()).then((result) => {}
          ).catch((error) => console.error("Type correct city", error)); */}
          {fetch(`${api.base}weather?q=${cities[0].city}&units=metric&APPID=$
          {api.key}`)
            .then((res) => console.log(res))
            .catch((error) => console.error("Type correct city", error))}
        </CityInfo>
      </CityInfoBlock>
      <Answers>
        <Answer>Huy</Answer>
        <Answer>Huy</Answer>
        <Answer>Huy</Answer>
        <Answer>Huy</Answer>
      </Answers>
    </Block>
  );
}

export default QuestionBlock;
