import ProjectsCard from "../../components/projectsCard"
import Force1 from "../../assets/force1.jpg"
import Display from "../../assets/display.jpg"
import Perfume from "../../assets/perfume.jpg"
// import Fragrance from "../../assets/fragrance.jpg"


const Projects = () => {
  return (
    <div className="h-[1900px] w-full bg-white relative flex flex-col gap-y-10 pt-5">

      <div className="">
        <hr className="w-full h-0 border-t border-blue-300 transform rotate-90
      absolute bottom-[1225px] left-0" />

        <div className="">
          <hr className="w-full h-0 border-t border-blue-300 transform rotate-90
      absolute bottom-[1225px] -left-96" />
        </div>

        <div className="">
          <hr className="w-full h-0 border-t border-blue-300 transform rotate-90
      absolute bottom-[1225px] -right-96" />
        </div>
      </div>

      <div style={{ fontFamily: 'Zen Dots', fontSize: '2rem' }}
        className="flex justify-center z-30">
        Works
      </div>


      <div className="flex flex-col justify-center items-center gap-y-16">
        <ProjectsCard
          projectImage={Force1}
          projectNumber={"01"}
          projectTitle={"Sneaker-Ville"}
          projectLink={"https://rtdongullo.github.io/Sneaker-Ville/"}/>

        <ProjectsCard
          projectImage={Display}
          projectNumber={"02"}
          projectTitle={"Porli-Sara"}
          projectLink={"https://rtdongullo.github.io/Porli-Sara/"}/>

        <ProjectsCard
          projectImage={Perfume}
          projectNumber={"03"}
          projectTitle={"Purmish"} 
          projectLink={"https://rtdongullo.github.io/Sneaker-Ville/"}/>
      </div>

    </div>
  )
}

export default Projects