import './App.css'
import React from "react";
import EducationCard from "./components/EducationCard";
import HorizontalBoxes from "./components/HorizontalBoxes";
import HorizontalSkills from "./components/HorizontalSkills";
import Webproject  from './components/Webproject';
import ShimmerButton from "./components/ShimmerButton";
import photo from './assets/photo.jpeg';
import dsce from './assets/dsce.jpeg';
import upps from './assets/upps.jpeg';
import raj from './assets/raj.png';
import pb from './assets/pb.jpeg';
import genesis from './assets/genesis.jpeg';
import fk from './assets/flutterkanpur_logo.jpeg';
import wander from './assets/wander.jpeg';
import artizence from './assets/artizence_logo.jpeg';
import canva from './assets/canva.svg';
import express from './assets/express.svg';
import figma from './assets/figma.svg';
import javascript from './assets/javascript.svg';
import krita from './assets/krita.svg';
import miro from './assets/miro.svg';
import node from './assets/nodedotjs.svg';
import tailwindcss from './assets/tailwindcss.svg';
import mongodb from './assets/mongodb.svg';
import next from './assets/nextdotjs.svg';
import react from './assets/react.svg';
import font from './assets/font.png';
import color from './assets/color.svg';
import prototype from './assets/prototype.svg';
import webflow from './assets/webflow.png';
import wireframe from './assets/wireframe.svg';
import photoshop from './assets/photoshop.png';
import illustrator from './assets/illustrator.png';
import github from './assets/github.svg';
import project1 from './assets/project1.png';




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

          <div className="my-4 w-full">
                <h2 className="font-bold text-lg mb-2 w-full">My Skills</h2>
                
                  <div>
                    <HorizontalBoxes
                      items={[
                              { image: react , text: "React" },
                              { image: next , text: "Next.js" },
                              { image: node , text: "Node.js" },
                              { image: tailwindcss , text: "Tailwind CSS" },
                              { image: javascript , text: "Javascript" },
                              { image: mongodb , text: "MongoDb " },
                              { image: express , text: "Express.js" },
                              { image: github, text: "Github" },
                              { image: react, text: "React" },
                              { image: next, text: "Next.js" },
                            ]}
                      speed={10}
                      boxColor="bg-[rgba(243,244,246,0.5)]"
                      boxSize="w-30 h-10"
                      boxClass="text-black font-regular text-xs border border-gray-200"
                    />
                    <HorizontalSkills
                      items={[
                              { image: wireframe , text: "Wireframing" },
                              { image: prototype , text: "Prototyping" },
                              { image: font , text: "Typography" },
                              { image: color , text: "Color Theory" },
                              { image: illustrator , text: "Illustrator" },
                              { image: photoshop , text: "Photoshop" },
                              { image: canva , text: "Canva" },
                              { image: miro , text: "Miro" },
                              { image: figma , text: "Figma" },
                              { image: webflow , text: "Webflow" },
                              { image: krita , text: "Krita" },
                      ]}
                      speed={10}
                      boxColor="bg-[rgba(243,244,246,0.5)]"
                      boxSize="w-30 h-10"
                      boxClass="text-black font-regular text-xs border border-gray-200"
                      reverse={true}
                    />

                  </div>                  
          </div>

          <div className='w-full'>
            <Webproject 
            img={project1}
            duration={"Jan 2023 - June 2023"}
            description={"It is my personal web redesign project of Codeforces, where I focused on creating a clean and modern interface with an organized contest dashboard, searchable problem sets, enhanced user profiles with ratings, and interactive community forums."}
            name={"Codeforces Web-Redesign"}
            />
            <ShimmerButton
        text="View Projects"
        className="bg-blue-600 hover:bg-blue-700"
        onClick={() => alert("Button Clicked!")}
      />
          </div>
      </div>
    </div>
   
  )
}

export default App
