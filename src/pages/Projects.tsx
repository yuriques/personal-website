import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SplitText);

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    SplitText.create(".head-text", {
      type: "words",
      autoSplit: true,
      onSplit(self: { words: Element[] }) {
        return gsap.from(self.words, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });

    SplitText.create(projectsRef.current, {
      type: "chars",
      onSplit(self: { chars: Element[] }) {
        self.chars.forEach((char) => {
          char.classList.add("blue-gradient_text");
        });

        return gsap.from(self.chars, {
          duration: 0.8,
          autoAlpha: 0,
          stagger: 0.03,
          delay: 1,
        });
      },
    });
  }, []);
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span
          ref={projectsRef}
          className="blue-gradient_text font-semibold drop-shadow"
        >
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I occasionaly create small projects to investigate and learn fun and
          interesting skills.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div
                className={`btn-front rounded-xl flex justify-center items-center`}
              >
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                ></img>
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lime-800"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
