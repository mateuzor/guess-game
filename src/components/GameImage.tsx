import React from "react";
import { ImagePixelated } from "react-pixelate";
type GameImageProps = {
  size: number;
};

const GameImage = (props: GameImageProps) => (
  <div style={{ padding: "0 20px" }}>
    <ImagePixelated
      src={
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      }
      width={300}
      height={300}
      pixelSize={props.size}
      fillTransparencyColor={"grey"}
    />
  </div>
);

export default GameImage;
