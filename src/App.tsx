import { useEffect, useState } from "react";
import { Select, Row, Button } from "antd";
import GameImage from "./components/GameImage";
import "./App.css";
import GameType from "./types/gameType";

function App() {
  const [games, setGames] = useState<GameType[]>([]);
  const [gameID, setgameID] = useState<number>();
  const [cover, setCover] = useState<string>("");
  const [pixelSize, setPixelSize] = useState(0);

  useEffect(() => {
    onResetGame();
  }, []);

  const onChange = (value: string) => {
    if (Number(value) !== gameID) {
      setPixelSize((prev) => prev - 3);
    } else {
      setPixelSize(0);
    }
  };

  const onSearch = (value: string) => {
    console.log(value);
    console.log("search:", value);
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.igdb.com/v4/games/?search=${value}&fields=id,name`,
      {
        method: "POST",
        headers: {
          "Client-ID": "hocbgvticdyx9v5ftmk7zp55e3lqnf",
          Authorization: `Bearer tbus7j13k4572mi8i87umhpjr5pq61`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        const gameslist = data.map((game: GameType) => ({
          ...game,
          label: game.name,
        }));
        setGames(gameslist);
      });
  };

  const onResetGame = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://api.igdb.com/v4/covers/?fields=id,game,url;limit500",
      {
        method: "POST",
        headers: {
          "Client-ID": "hocbgvticdyx9v5ftmk7zp55e3lqnf",
          Authorization: `Bearer tbus7j13k4572mi8i87umhpjr5pq61`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const randomNumber = Math.floor(Math.random() * 10);
        setCover(data[randomNumber].url);
        setgameID(data[randomNumber].game);
      });
  };

  return (
    <div className="appContainer">
      <Button
        disabled
        size="large"
        className="nextButton"
        onClick={() => onResetGame()}
      >
        Reset Game
      </Button>
      <Row className="imageRow">
        <GameImage gameImg={cover} size={pixelSize} />
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
          options={games}
        />
      </Row>
    </div>
  );
}

export default App;
