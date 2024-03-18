import styled from "styled-components";
import cities from "../data/citiesFull.json";
import { useState, useEffect } from "react";
import { Button, Card, Strong } from "@radix-ui/themes";

const Block = styled.div`
  min-height: 500px;
  background-color: #ffd600;
  flex-direction: column;
  display: flex;
  border-radius: 20px;
`;

const ScoreInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px;
  ${"" /* background-color: pink; */}
  ${"" /* min-height: 50px; */}
`;

const WeatherInfoBlock = styled.div`
  width: 100%;
  min-height: 250px;
  margin: auto;
  ${"" /* background-color: lightgray; */}
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: flex-end;
`;

const AnswersBlock = styled.div`
  ${"" /* width: 100%; */}
  ${"" /* min-height: 150px; */}
  ${"" /* background-color: blue; */}
  padding: 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const WeatherDetailsBlock = styled.div`
  width: 150px;
  height: 200px;
  background-color: #e0f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 5px solid #303f9f;
`;

const TopWDB = styled.div`
  width: 100px;
  height: 100px;
  background-size: contain;
  overflow: hidden;
`;

const BottomWDB = styled.div`
  width: 150px;
  height: 50px;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #303f9f;
`;

function QuestionBlock() {
  // const [number, setNumber] = useState(1);
  const [data, setData] = useState(""); //used for fetching weather data
  const [correctCount, setCorrectCount] = useState(0); //counts correct answers
  const [incorrectCount, setIncorrectCount] = useState(0); //counts incorrect answers
  const [answered, setAnswered] = useState([]); //adds into array of already answered cities to avoid them in the future

  const api = {
    key: "c1291c1bd863d0a1593f8f4f254860f1",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const weatherDetails = [
    {
      id: "cloudiness",
      // imageSrc: "https://www.svgrepo.com/show/223569/cloudy-cloud.svg",
      imageSrc: "https://www.svgrepo.com/show/475581/sunny.svg",
      text: data.weather?.[0]?.description || "Loading",
    },
    {
      id: "temperature",
      // imageSrc: "https://www.svgrepo.com/show/223555/temperature.svg",
      imageSrc: "https://www.svgrepo.com/show/475590/temperature.svg",
      text: `${data.main?.temp} C°` || "Loading",
    },
    {
      id: "humidity",
      // imageSrc: "https://www.svgrepo.com/show/223552/raindrop-teardrop.svg",
      imageSrc: "https://www.svgrepo.com/show/475583/rain.svg",
      text: `${data.main?.humidity} %` || "Loading",
    },
    {
      id: "wind",
      // imageSrc: "https://www.svgrepo.com/show/223561/wind.svg",
      imageSrc: "https://www.svgrepo.com/show/475599/wind-svg.svg",
      text: `${data.wind?.speed} m/s` || "Loading",
    },
  ];

  let citiesAnswersArray = [];

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${
          cities[Math.random().toFixed(1) * 100].city
        }&units=metric&APPID=${api.key}`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch resource(s)");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [answered]);

  for (let i = 0; i < 3; i++) {
    let randomCity;

    do {
      randomCity = cities[Math.random().toFixed(1) * 100].city;
    } while (
      randomCity == data.name ||
      citiesAnswersArray.includes(randomCity) ||
      answered.includes(randomCity)
    );
    citiesAnswersArray[i] = randomCity;
  }
  let correctCity = data.name;
  console.log(data.name);
  console.log("correct:" + correctCity);
  citiesAnswersArray.push(data.name);

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  // useEffect(() => {
  //   AnswerShuffle();
  // }, []);

  function AnswerShuffle() {
    for (let i = citiesAnswersArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = citiesAnswersArray[i];
      citiesAnswersArray[i] = citiesAnswersArray[j];
      citiesAnswersArray[j] = temp;
    }

    function handleClick(city) {
      if (city == data.name) {
        setCorrectCount((correctCount) => correctCount + 1);
        setAnswered((prevAnswered) => {
          if (!prevAnswered.includes(city)) {
            return [...prevAnswered, city];
          }
          return prevAnswered;
        });
      } else {
        setIncorrectCount((incorrectCount) => incorrectCount + 1);
      }
      fetchData();
      console.log(answered);
    }

    return (
      // <AnswersBlock>
      <>
        {citiesAnswersArray.map((city, index) => {
          return (
            <Button key={index} onClick={() => handleClick(city)} size="3">
              <Strong>{city || "City is Loading"}</Strong>
            </Button>
          );
        })}
      </>
      // </AnswersBlock>
    );
  }

  return (
    <Block>
      <ScoreInfo>
        <Card>{"Correct:" + correctCount}</Card>
        <Card>{"Incorrect:" + incorrectCount}</Card>
      </ScoreInfo>
      <WeatherInfoBlock>
        {/* <WeatherDetailsBlock>
          <TopWDB>
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src="https://www.svgrepo.com/show/223569/cloudy-cloud.svg"
            />
          </TopWDB>
          <BottomWDB>
            <Strong>{data.weather?.[0]?.description || "Loading"}</Strong>
          </BottomWDB>
        </WeatherDetailsBlock>
        <WeatherDetailsBlock>
          <TopWDB>
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src="https://www.svgrepo.com/show/223555/temperature.svg"
            />
          </TopWDB>
          <BottomWDB>
            <Strong>{data.main?.temp + " C°" || "Loading"}</Strong>
          </BottomWDB>
        </WeatherDetailsBlock>
        <WeatherDetailsBlock>
          <TopWDB>
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src="https://www.svgrepo.com/show/223552/raindrop-teardrop.svg"
            />
          </TopWDB>
          <BottomWDB>
            <Strong>{data.main?.humidity + " %" || "Loading"}</Strong>
          </BottomWDB>
        </WeatherDetailsBlock>
        <WeatherDetailsBlock>
          <TopWDB>
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src="https://www.svgrepo.com/show/223561/wind.svg"
            />
          </TopWDB>
          <BottomWDB>
            <Strong>{data.wind?.speed + " m/s" || "Loading"}</Strong>
          </BottomWDB>
        </WeatherDetailsBlock> */}

        {weatherDetails.map((detail) => (
          <WeatherDetailsBlock key={detail.id}>
            <TopWDB>
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={detail.imageSrc}
              />
            </TopWDB>
            <BottomWDB>
              <Strong>{detail.text}</Strong>
            </BottomWDB>
          </WeatherDetailsBlock>
        ))}
      </WeatherInfoBlock>
      <AnswersBlock> {AnswerShuffle()}</AnswersBlock>
    </Block>
  );
}

export default QuestionBlock;

// Key changes and explanations:

// Introduced useState to hold the weather data (cityWeather) fetched from the API.
// Used useEffect to perform the fetch operation when the component mounts.
//  The empty dependency array ([]) ensures the fetch operation runs only once after the initial render.
// The fetch operation is encapsulated within an asynchronous function (fetchWeather) which is then called inside the useEffect.
// Conditional rendering is used to display the weather data if available (cityWeather), or a loading message otherwise.
// Removed the incorrect attempt to render a Promise directly in the component's return statement.
// These modifications ensure that your component waits for the asynchronous fetch operation to complete
// and updates the component state with the fetched data, which then triggers a re-render to display the updated information.
