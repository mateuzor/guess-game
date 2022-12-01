import { ImagePixelated } from "react-pixelate";
type GameImageProps = {
  size: number;
};

const GameImage = (props: GameImageProps) => (
  <div style={{ padding: "0 20px" }}>
    <ImagePixelated
      src={
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Resident_Evil_3_Cover.jpg"
      }
      width={300}
      height={300}
      pixelSize={props.size}
      fillTransparencyColor={"grey"}
    />
  </div>
);

export default GameImage;
