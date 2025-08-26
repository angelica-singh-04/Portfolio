import './App.css'
import React from "react";
import EducationCard from "./components/EducationCard";
import photo from './assets/photo.jpeg';
import dsce from './assets/dsce.jpeg';
import upps from './assets/upps.jpeg';
import raj from './assets/raj.png';
import pb from './assets/pb.jpeg';
import genesis from './assets/genesis.jpeg';
import fk from './assets/flutterkanpur_logo.jpeg';
import wander from './assets/wander.jpeg';
import artizence from './assets/artizence_logo.jpeg';

function App() {

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white font-[Inter]">
      <div className="w-1/2 flex flex-col items-start text-left">
        <span className="text-5xl font-bold mb-3">Hi, I'm Angelica👋</span>
        <h4 className="text-lg text-gray-600 font-regular">Designer & Front-end Developer. I love music, photography, and painting. Always exploring creativity through tech & art.</h4>
        <div className="mt-4 mb-6">
              <img
                src={photo}
                alt="photo"
                className="w-24 h-24 rounded-full object-cover border-0 border-black"
              />
        </div>

          <div className="my-8">
                <h2 className="font-bold text-lg mb-2">About</h2>

                <p className="text-gray-800 text-sm leading-snug">
                  Currently a <b>3rd-year Information Science & Engineering</b> student at DSCE, Bangalore, 
                  I’m passionate about <b>turning ideas into interactive digital experiences</b>. 
                  As a <b>UI/UX designer</b> and <b>front-end developer</b>, I enjoy crafting beautiful, 
                  user-friendly interfaces using <b>React, Tailwind, and Figma.</b> 
                  Beyond coding and design, I find inspiration in <b>music, photography, and painting</b>, 
                  which fuel my creativity and shape the way I approach every project.
                </p>
          </div>

          <div className="my-4 w-full">
                <h2 className="font-bold text-lg mb-2 w-full">Education</h2>
                <div>
                  <EducationCard
                    logo={dsce}
                    collegeName="Dayananda Sagar College of Engineering, Bangalore"
                    course="Information Science & Engineering"
                    duration="2023-2027"
                  />

                  <EducationCard
                    logo= {raj}
                    collegeName="Raj English School, Varanasi"
                    course="XII (PCM-92%)"
                    duration="2020-2021"
                  />

                  <EducationCard
                    logo= {upps}
                    collegeName="Udai Pratap Public School, Varanasi"
                    course="X (95%)"
                    duration="2018-2019"
                  />
                </div>
                  
          </div>

          <div className="my-4 w-full">
                <h2 className="font-bold text-lg mb-2 w-full">Volunteering</h2>
                <div>
                  <EducationCard
                    logo={pb}
                    collegeName="Point Blank"
                    course="Team Member"
                    duration="Nov'24 - Current"
                  />

                  <EducationCard
                    logo= {fk}
                    collegeName="Flutter Kanpur Community"
                    course="Design Team Lead"
                    duration="Mar'25 - Current"
                  />

                  <EducationCard
                    logo= {genesis}
                    collegeName="Genesis"
                    course="Team Member"
                    duration="Nov'24 - Current"
                  />
                </div>
                  
          </div>

          <div className="my-4 w-full">
                <h2 className="font-bold text-lg mb-2 w-full">Work Experince</h2>
                <div>
                  <EducationCard
                    logo={wander}
                    collegeName="WanderGenie LLM"
                    course="UI/UX Designer & Graphic Designer"
                    duration="Oct'24 - Jan'25"
                  />
                  <p className='text-xs text-gray-600 ml-16'><b>WanderGenie</b> is an AI-powered travel platform that generates personalized itineraries to simplify trip planning. I contributed by designing <b>253</b> user-centered screens, along with wireframes, prototypes, and graphic assets in <b>Figma and Canva</b>, ensuring an intuitive design flow, engaging user experience, and a consistent brand identity across the platform and its promotional materials.</p>
                  <span className="mt-2 mx-16 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                    Figma
                  </span>
                  <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                    Canva
                  </span>
                  <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                    Wireframing
                  </span>
                  <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                    Prototyping
                  </span>
                </div>
                <div className="border-t-1 border-dashed border-gray-300 my-4"></div>

                <div>
                  <EducationCard
                    logo={artizence}
                    collegeName="Artizenxe"
                    course="UI/UX Designer"
                    duration="Mar'25 - Apr'25"
                  />
                  <p className='text-xs text-gray-600 ml-16'><b>At Artizence</b>, I was responsible for designing websites for a diverse range of clients, focusing on creating visually appealing and user-friendly interfaces. I developed intuitive UI/UX designs that improved user engagement and ensured seamless digital experiences across different platforms.</p>
                  <span className="mt-2 mx-16 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                    Figma
                  </span>
                  <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                    Wireframing
                  </span>
                  <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                    Prototyping
                  </span>


                </div>
                  
          </div>

      </div>
    </div>
   
  )
}

export default App
