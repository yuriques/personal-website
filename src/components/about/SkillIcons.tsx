import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { Skill } from "../../constants";

gsap.registerPlugin(useGSAP);

interface SkillIconsProps {
  skills: Skill[];
}

export const SkillIcons = ({ skills }: SkillIconsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".skills",
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out" },
      );
    },
    { scope: containerRef, dependencies: [skills] },
  );

  return (
    <div ref={containerRef} className="mt-16 flex flex-wrap gap12">
      {skills.map((skill) => (
        <div className="skills block-container w-20 h-20" key={skill.name}>
          <div className="btn-back rounded-xl" />
          <div className="btn-front rounded-xl flex justify-center items-center">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              title={skill.name}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
