import { Canvas } from "@react-three/fiber";
import { Boy } from "./models/Boy";
import { HeroGirls } from "./models/HeroGirls";

const HeroExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 18], fov: 22 }}
      style={{ width: "100%", height: "100%", borderRadius: "9999px" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

      <group>
        <HeroGirls scale={13.5} position={[0, -20.5, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
