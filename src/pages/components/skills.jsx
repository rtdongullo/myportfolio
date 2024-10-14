import Html from "../../assets/html.png"
import Css from "../../assets/css.png"
import Javascript from "../../assets/javascript.png"
import React from "../../assets/react.png"
import Wind from "../../assets/wind.png"

const Skills = () => {
  return (
    <div className="h-32 w-full bg-black z-10 flex flex-col justify-center items-center">
      {/* <div className="h-20 w-full bg-black flex justify-center items-center mb-10">

        <div style={{ fontFamily: 'Zen Dots', fontSize: '12rem' }}
          className="text-white">
          Skills
        </div>
      </div> */}

      <div className="flex flex-row justify-center items-center gap-x-20">

        <span style={{ fontFamily: "Zen Dots" }}
          className="text-white text-4xl flex justify-center items-center">
          Skills
        </span>
       
        <span className="h-10 w-16 flex flex-col justify-center items-center ">
          <img src={Html} alt="" className="hover:-translate-y-1 hover:scale-110" />
          <span className="text-white">HTML</span>
        </span>
      
        <span className="h-10 w-20 flex flex-col justify-center items-center">
          <img src={Css} alt="" className="hover:-translate-y-1 hover:scale-110" />
          <span className="text-white">CSS</span>
        </span>

        <span className="h-20 w-20 flex flex-col justify-center items-center pb-5">
          <img src={Javascript} alt="" className="hover:-translate-y-1 hover:scale-110" />
          <span className="text-white">JAVASCRIPT</span>
        </span>
        <span className="h-10 w-20 flex flex-col justify-center items-center">
          <img src={React} alt="" className="hover:-translate-y-1 hover:scale-110" />
          <span className="text-white">REACT</span>
        </span>
        <span className="h-32 w-20 text-white flex flex-col justify-center items-center">
          <img src={Wind} alt="" className="hover:-translate-y-1 hover:scale-110" />
          <span className="text-white">TAILWINDCSS</span>
        </span>
      
        {/* <div>
          <SkillsCard
            icon={<img src={Html} alt="html icon" />}
            nameOfSkill={"HTML"}
            text={"Proficiency in Js. Used it in 5 different projects to achieve stella results for my clients"}
            miniIcon={<img src={Code} alt="code icon" />} />

          <SkillsCard
            icon={<img src={Css} alt="html icon" />}
            nameOfSkill={"CSS"}
            text={"Proficiency in Js. Used it in 5 different projects to achieve stella results for my clients"}
            miniIcon={<img src={Code} alt="code icon" />} />

          <SkillsCard
            icon={<img src={Javascript} alt="html icon" />}
            nameOfSkill={"JavaScript"}
            text={"Proficiency in Js. Used it in 5 different projects to achieve stella results for my clients"}
            miniIcon={<img src={Code} alt="code icon" />} />

          <SkillsCard
            icon={<img src={React} alt="html icon" />}
            nameOfSkill={"React"}
            text={"Proficiency in Js. Used it in 5 different projects to achieve stella results for my clients"}

            miniIcon={<img src={Code} alt="code icon" />} />
        </div> */}

      </div>
    </div>
  )
}

export default Skills
