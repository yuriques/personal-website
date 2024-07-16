import React, { useState } from "react";
import { experiences, skills } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  const [activeSkillFilter, setActiveSkillFilter] = useState();
  const filteredSkills = activeSkillFilter
    ? skills.filter((skill) => skill.type === activeSkillFilter)
    : skills;

  const skillTypes = [...new Set(skills.map((skill) => skill.type))];

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Elizabeth
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Frontend focused Full Stack Engineer, with a passion for crafting
          seamless user experiences. Versatile problem-solver with a holistic
          understanding of both frontend and backend 🌟
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="justify-left mt-8 select-none flex">
          {skillTypes.map((type) => (
            <button
              key={type}
              className={`py-2 px-4 shadow-md no-underline rounded-full text-white ${
                activeSkillFilter === undefined || type === activeSkillFilter
                  ? "btn-dark"
                  : "btn-light"
              } font-semibold text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-white focus:outline-none active:shadow-none mr-2 duration-150`}
              onClick={() => {
                if (activeSkillFilter === type) {
                  setActiveSkillFilter(undefined);
                } else {
                  setActiveSkillFilter(type);
                }
              }}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap12">
          {filteredSkills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
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
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked in all sorts of applications, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.date}`}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyleStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.company_name}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.title}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
