import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";
import { bentoSocialLinks } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-screen min-h-dvh overflow-hidden bg-[#070613] text-white"
    >
      <div className="gradient-box w-full h-96 absolute inset-x-0 bottom-0 z-10" />
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />

      <div className="container mx-auto relative z-20 px-5 py-10">
        <div className="absolute left-6 top-1/2 hidden h-[calc(100%-80px)] -translate-y-1/2 flex-col items-center gap-8 text-center xl:flex">
          <div className="space-y-3"></div>
        </div>

        <div className="grid min-h-dvh place-items-center gap-10 xl:grid-cols-[1.1fr_1.3fr_1fr] xl:items-center">
          <div className="flex flex-col justify-center gap-6 xl:pl-8">
            <p className="text-2xl font-semibold uppercase tracking-[0.4em] text-slate-400">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-[-0.04em] md:text-[6.5rem]">
              Vega Lavenia
            </h1>
            <div className="space-y-4">
              {bentoSocialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-pink-300 hover:text-pink-300"
                >
                  <img src={item.icon} alt={item.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-165 overflow-hidden  ">
            <div className="absolute " />
            <div className="relative h-140 sm:h-160 w-full">
              <HeroExperience />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 xl:pr-8">
            <div className="space-y-4 text-right">
              <p className="text-4xl font-semibold uppercase tracking-[0.18em] text-[#9f8cff] md:text-5xl">
                Junior
              </p>
              <h2 className="text-5xl font-black leading-tight text-white md:text-[5.5rem]">
                Enterprise
              </h2>
              <h2 className="text-5xl font-black leading-tight text-white md:text-[5.5rem]">
                Architecture
              </h2>
            </div>

            <div className="flex flex-col items-end gap-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-pink-300 hover:bg-white/10"
              >
                Resume
              </a>
              <p className="max-w-[20rem] text-sm leading-7 text-slate-300">
                I craft immersive digital experiences with strong visuals,
                elegant typography, and polished motion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
