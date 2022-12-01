import { useEffect, useState } from "react";
import { Select, Row, Button } from "antd";
import GameImage from "./components/GameImage";

function App() {
  const [gamesNames, setgamesNames] = useState([]);
  const [pixelSize, setPixelSize] = useState(20);

  useEffect(() => {
    fetch("https://api.igdb.com/v4/games/?search=zelda&fields=*", {
      method: "POST",
      headers: {
        "Client-ID": "hocbgvticdyx9v5ftmk7zp55e3lqnf",
        Authorization: `Bearer tbus7j13k4572mi8i87umhpjr5pq61`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const handleDecreasePixel = () => {
    setPixelSize((prev) => prev - 3);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Button
        onClick={() => handleDecreasePixel()}
        size="large"
        style={{ marginBottom: "10px", width: "300px" }}
      >
        Next Game
      </Button>
      <Button
        onClick={() => handleDecreasePixel()}
        size="large"
        style={{ marginBottom: "10px", width: "300px" }}
      >
        Decrease Pixel
      </Button>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <GameImage size={pixelSize} />
      </Row>
      <br />
      <Row>
        <Select
          style={{ width: "500px" }}
          size="large"
          showSearch
          placeholder="Select a game"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          options={gamesNames}
        />
      </Row>
    </div>
  );
}

export default App;
