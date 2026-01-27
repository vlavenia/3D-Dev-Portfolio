import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./models/ContactBoy";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1C34FF"} />

      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <ContactBoy scale={2.5} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
