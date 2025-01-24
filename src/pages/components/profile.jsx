import { Circle, Square, Triangle } from "lucide-react"
import HeadShot from "../../assets/headShot.jpg"

const Profile = () => {
  return (
    <div className="h-screen w-full bg-white flex justify-center items-center pt-20">

      <div className="flex flex-row gap-x-24">

       {/* MY NAME & PIC */}
        <div className="flex flex-row gap-x-10">
          <div className="relative">

            <span style={{ fontFamily: "'Zen Dots', sans-serif", color: 'black', fontSize: '5rem' }}
              className="rotate-90 absolute top-full -right-0 transform origin-top-right mt-5 z-20">
              DongUllo
            </span>

            <span style={{ fontFamily: "'Zen Dots', sans-serif", color: 'gray', fontSize: '5rem' }}
              className="rotate-90 absolute top-full -right-1 -bottom-1 transform origin-top-right mt-5 z-10">
              DongUllo
            </span>

          </div>

          <div className="relative">

            <div className="h-[400px] w-80 bg-gray-300 absolute left-2 top-2 z-10">
            </div>

            <div className="h-100vh w-80 relative z-20">
              <img src={HeadShot} alt="Picture of Developer Romero" className="" />
            </div>

          </div>

        </div>
        
       {/* INTRO & SIGNATURE */}
        <div className="flex flex-row gap-x-24">

          <div className="flex flex-col relative">
            <div className="flex flex-row relative">
              <span>
                <h2 style={{ fontFamily: "'Zen Dots', sans-serif", fontSize: '2rem' }}
                  className="">This is Me</h2>
              </span>
              <span className="h-0.5 w-20 bg-black absolute right-48 bottom-4"></span>
            </div>

            <p>A passionate Junior Front-End Developer with a strong foundation<br />
               in HTML, CSS, and JavaScript. Committed to creating dynamic<br />
               web interfaces. I am proficient in React and Tailwind CSS.<br />
               Eager to learn and grow in the fast-paced world of web development.<br />
               I am also committed to writing clean, efficient code and collaborating <br />
               effectively with teams.<br />
               Excited to contribute fresh ideas and innovative solutions <br />
               to challenging projects. autem magni deserunt cum, totam et sequi, <br />
              eligendi dolorem eaque accusantium dolores? <br />
              Dignissimos impedit dolorum modi tempora earum quidem!<br />
              <br/>
              <span style={{ fontFamily: "'Parisienne', cursive", color: 'black', fontSize: '2rem' }}>Yours Truly,<br/></span>
              Romero
            </p>
            <div className="flex flex-row absolute -bottom-8 -right-0">
              <Circle className="absolute -bottom-1 right-44" />
              <Square className="absolute -bottom-1 right-36" />
              <Triangle className="absolute -bottom-1 right-28" />
              <div className="h-0.5 w-72 bg-black absolute bottom-0 -right-48">
              </div>
            </div>
          </div>



        </div>

      </div>

    </div>
  )
}

export default Profile
