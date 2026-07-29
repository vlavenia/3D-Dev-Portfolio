import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { bentoSocialLinks } from "../constants";
import { Alien } from "../components/models/Alien";

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Vega Lavenia
                  </h1>
                  <p className="md:text-2xl mt-2">
                    Hi, I'm Vega Lavenia, a final-year Information Systems with
                    hands-on experience supporting IT Strategic Planning and IT
                    Governance at PT Petrokimia Gresik (Pupuk Indonesia Group),
                    specifically in developing Enterprise Architecture
                    documentation. Proficient in COBIT 2019, business process
                    analysis,data, application and technology architecture
                    mapping. Highly systematic, analytical, and collaborative in
                    driving Strategic Business-IT Alignment, with a strong
                    commitment to advancing a career in IT Planning and
                    Governance, especially as a Junior Enterprise Architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#C8D751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <ambientLight />
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Enterprise Architecture & Artifact Mapping
                  </h1>
                  <p className="md:text-2xl max-w-180">
                    Experienced in mapping As-Is business processes, data flows,application catalogs, and IT infrastructure. Skilled in
                    transforming complex enterprise workflows into structured BPMN and standardized EA documentation to drive strategic
                    alignment.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    IT Governance & Strategic Planning
                  </h1>
                  <p className="md:text-2xl max-w-180">
                    Adept at supporting IT governance frameworks using COBIT 2019 and IT Strategic Planning. Dedicated to evaluating IT
                    capabilities, identifying operational gaps, and ensuring technology investments align with business goals
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BE YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BE DIFFERENT!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BUILD DIFFERENT!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.icon} />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                        {item.name}
                      </h1>
                    </div>
                    <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow-up"
                        className="md:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
