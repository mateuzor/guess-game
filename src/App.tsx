import { useEffect, useState } from "react";
import { Select, Row, Button } from "antd";
import GameImage from "./components/GameImage";
import "./App.css";

function App() {
  const [pixelSize, setPixelSize] = useState(20);
  const gameCover = 267834;

  // useEffect(() => {
  //   fetch("https://api.igdb.com/v4/games/?search=zelda&fields=*", {
  //     method: "POST",
  //     headers: {
  //       "Client-ID": "hocbgvticdyx9v5ftmk7zp55e3lqnf",
  //       Authorization: `Bearer tbus7j13k4572mi8i87umhpjr5pq61`,
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const onChange = (value: string) => {
    if (Number(value) !== gameCover) {
      setPixelSize((prev) => prev - 3);
    } else {
      setPixelSize(0);
    }
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className="appContainer">
      <Button disabled size="large" className="nextButton">
        Next Game
      </Button>
      <Row className="imageRow">
        <GameImage size={pixelSize} />
      </Row>
      <br />
      <Row>
        <Select
          className="gameSelect"
          showSearch
          placeholder="Select a game"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 40104,
              label: "Dogou Souken",
            },
            {
              value: 85031,
              label: "City Mysteries",
            },
            {
              value: 99234,
              label: "Sword of the Black Stone",
            },
            {
              value: 139538,
              label: "sun machine",
            },
            {
              value: 85450,
              label: "Transformers Prime: The Game",
            },
            {
              value: 33284,
              label: "One way to exit",
            },
            {
              value: 89616,
              label: "Bubble Whirl Shooter",
            },
            {
              value: 104748,
              label: "Space station - build your own ISS",
            },
            {
              value: 143875,
              label: "Resident Evil 3",
            },
            {
              value: 135938,
              label: "a sunny day in lockdown",
            },
          ]}
        />
      </Row>
    </div>
  );
}

export default App;
