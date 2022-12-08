import { useEffect } from "react";
import { ImagePixelated } from "react-pixelate";
type GameImageProps = {
  gameImg: string;
  size: number;
};

const GameImage = (props: GameImageProps) => {
  return (
    <div style={{ padding: "0 20px" }}>
      <ImagePixelated
        src={`https://cors-anywhere.herokuapp.com/http:${props.gameImg}`}
        width={300}
        height={300}
        pixelSize={props.size}
        fillTransparencyColor={"grey"}
      />
    </div>
  );
};

export default GameImage;
