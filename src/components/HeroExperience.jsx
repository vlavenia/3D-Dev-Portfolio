import { Canvas } from "@react-three/fiber";
import { Boy } from "./models/Boy";
import { HeroGirls } from "./models/HeroGirls";

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

      <group>
        <HeroGirls scale={9.5} position={[0,-15.5,0]}/>
      </group>
    </Canvas>
  );
};

export default HeroExperience;
