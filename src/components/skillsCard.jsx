

const SkillsCard = ({ icon, text, nameOfSkill, miniIcon }) => {
    return (
        <div className="h-64 w-64 bg-white shadow-md border border-gray-400
        hover:-translate-y-1 hover:scale-110 flex justify-center items-center rounded-lg">

            {/* <div className="h-60 w-60 border border-white rounded-lg flex justify-center items-center"> */}

                <div className="flex flex-col justify-center items-center gap-y-2">
                    <div className="h-16 w-12">
                        {icon}
                    </div>

                    <div className="font-bold text-black">
                        {nameOfSkill}
                    </div>
                    <div className="h-0.5 w-24 bg-black">

                    </div>

                    <div className="h-20 w-52 text-center items-center text-black">
                        {text}
                    </div>

                    <div className="h-8 w-8 text-black">
                        {miniIcon}
                    </div>
                </div>
        </div>
    )
}

export default SkillsCard