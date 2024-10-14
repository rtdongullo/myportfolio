import { useNavigate } from "react-router-dom"


const ProjectsCard = ({ projectImage, projectNumber, projectTitle, projectLink }) => {

  const navigate = useNavigate

  return (
    <div className="relative h-[450px] w-[980px] shadow-black 
    transition ease-in-out hover:-translate-y-1 hover:scale-110 ">

      <div className="relative h-full w-full">
        <img src={projectImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-60">
        </div>
      </div>


      <div className="absolute -top-10 -right-10 font-bold text-9xl text-blue-700">
        {projectNumber}
      </div>


      <div className="absolute bottom-32 text-6xl left-10 text-white">
        {projectTitle}
      </div>


      <button style={{ fontFamily: 'Zen Dots' }}
        className="absolute bottom-16 left-10 h-10 w-32 bg-blue-700 transition-transform"
        onClick={() => navigate(projectLink)}>
        <span className="text-white">
          View More
        </span>
      </button>
    </div>
  )
}

export default ProjectsCard
