import './App.css'
import React from "react";
import { useState } from 'react';
import EducationCard from "./components/EducationCard";
import HorizontalBoxes from "./components/HorizontalBoxes";
import HorizontalSkills from "./components/HorizontalSkills";
import Form from "./components/Form";
import Webproject from './components/Webproject';
import ShimmerButton from "./components/ShimmerButton";
import Achievement from './components/Achievment';
import photo from './assets/photo.webp';
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
// import project2 from './assets/Screen.png';
import project3 from './assets/Start.png';
// import project4 from './assets/project4.png';
import comingsoon from './assets/comingsoon.png';
import LazyTrunk from './assets/Lazytrunk.jpg';
import place1 from './assets/1st-place.svg'
import place2 from './assets/2nd-place.svg'
import Achievements from './components/Achievment';
import BlogCard from "./components/Blogcard";
import linkedin from './assets/linkedin.webp'
import ola from './assets/ola.png'
import git from './assets/github.png'
import email from './assets/email.png'
import dribble from './assets/dribble.png'
import linkedin_link from './assets/linkedin_link.png'
import home from './assets/home.png'
import resume from './assets/resume.png'
import mode from './assets/mode.png'
import as from './assets/AS.png'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);


  return (
    <div className={darkMode ? "bg-[#0a0a0a] flex items-center justify-center text-white min-h-screen font-[Inter]" : "bg-white text-black min-h-screen font-[Inter] flex items-center justify-center"}>
      <div className="w-1/2 flex flex-col items-start text-left">
        <span className="text-5xl font-bold mb-3 mt-50">Hi, I'm <span className='text-blue-500'>Angelica</span></span>
        <h4 className="text-md text-gray-500 font-regular ">UI/UX & Graphic Designer, Full-Stack Developer. Always exploring creativity through tech.</h4>
        <div className="mt-4 mb-6">
          <img
            src={photo}
            alt="photo"
            className="w-24 h-24 rounded-lg shadow-lg object-cover border-0 border-black rotate-356"
          />
        </div>

        <div className="my-4">
          <h2 className="font-bold text-lg mb-2">About</h2>

          <p className="text-gray-800 text-sm leading-snug">
            Currently a <b>3rd-year Information Science & Engineering</b> B.E. student at DSCE, Bangalore,
            I’m passionate about <b>turning ideas into interactive digital experiences</b>.
            As a <b>UI/UX designer</b> and <b>front-end developer</b>, I enjoy crafting beautiful and
            user-friendly interfaces using <b>React, Tailwind, and Figma. </b>
            While I’m not coding, you’ll find me creating <b>art, illustrations, or enjoying music.</b>
          </p>
        </div>
        <div className='w-full mt-5'>
          <h2 className="font-bold text-lg mb-2 w-full">Design Projects</h2>
          <Webproject
            img={project1}
            duration={"Jan 2025"}
            description={"It is my personal web redesign project of Codeforces, where I focused on creating a clean and modern interface with an organized contest dashboard, searchable problem sets, enhanced user profiles with ratings, and interactive community forums."}
            name={"Codeforces Web-Redesign"}
            list={["Figma", "UI Design", "Re-Design"]}

            btn={
              <a
                href="https://www.figma.com/design/8e6aKHRjorzVyRJRHtPqWd/Untitled?node-id=0-1&t=eeEyfmnH5oL4YNUR-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton
                  text="View Project"
                  className="bg-blue-600 hover:bg-blue-700"
                />
              </a>
            }

          />

          <Webproject
            img={project3}
            duration={"Sep 2024 - Nov 2024"}
            description={"Sky Explorer is a mobile app concept designed for astronomy enthusiasts to explore constellations, track celestial events, and discover planets and stars. The focus was on building a clean & user-friendly interface that makes learning about space simple and enjoyable."}
            name={"Sky Explorer- App Design"}
            list={["Canva", "Figma", "Prototyping"]}

            btn={
              <a
                href="https://www.figma.com/design/I0hp6OSbwX68N9x6gMOKMm/Untitled?node-id=0-1&t=iF5DGMSCfShEJopr-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton
                  text="View Project"
                  className="bg-blue-600 hover:bg-blue-700"
                />
              </a>
            }
          />
        </div>

        <div className="my-6 w-full">
          <h2 className="font-bold text-lg mb-2 w-full">Work Experince</h2>
          <div>
            <EducationCard
              logo={LazyTrunk}
              collegeName="Lazy Trunk"
              course="UI/UX Designer"
              duration="Aug'25 - Current"
            />
            <p className='text-xs text-gray-600 ml-16'><b>At Lazy Trunk</b>, I work on designing and improving the company’s websites, with a focus on clean, user-friendly, and visually engaging interfaces. I create intuitive UI/UX designs that make interactions seamless across platforms and also contribute to mobile app web design, ensuring responsive and consistent experiences on smaller screens.</p>
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
            <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
              Mobile App Design
            </span>
          </div>

          <div className="border-t-1 border-dashed border-gray-300 my-4"></div>
          <div>
            <EducationCard
              logo={artizence}
              collegeName="Artizence"
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
            <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
              Web Design
            </span>
          </div>

          <div className="border-t-1 border-dashed border-gray-300 my-4"></div>
          <div>
            <EducationCard
              logo={wander}
              collegeName="WanderGenie LLM"
              course="UI/UX Designer & Graphic Designer"
              duration="Nov'24 - Jan'25"
            />
            <p className='text-xs text-gray-600 ml-16'><b>WanderGenie</b> is an AI-powered travel platform that generates personalized itineraries to simplify trip planning. I contributed by designing <b>253</b> user-centered screens, along with wireframes, prototypes, and graphic assets in <b>Figma and Canva</b>, ensuring an intuitive design flow, engaging user experience, and a consistent brand identity across the platform and its promotional materials.</p>
            <span className="mt-2 mx-16 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
              Figma
            </span>
            <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
              UI Design
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
            <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
              Graphic Design
            </span>
            <span className="mt-2 inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
              Miro
            </span>

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
              logo={fk}
              collegeName="Flutter Kanpur Community"
              course="Design Team Lead"
              duration="Mar'25 - Current"
            />

            <EducationCard
              logo={genesis}
              collegeName="Genesis"
              course="Team Member"
              duration="Nov'24 - Current"
            />
          </div>

        </div>
        <div className='w-full mt-4'>
          <h2 className="font-bold text-lg mb-2 w-full">Achievements</h2>
          <div className="text-center flex flex-col items-center">
            <Achievements
              img={[place1]}
              title={
                <>
                  Winner – Design Hackathon{" "}
                </>
              }
              decription={"Won 1st place for UI/UX Design Challenge hosted by Flutter Kanpur Community, 2025."}
            />
            <Achievements
              img={[place1]}
              title={
                <>
                  Winner – Photography Competition
                </>
              }
              decription={"Awarded for creativity through photography hosted by DSCE, 2024."}
            />
            <Achievements
              img={[place2]}
              title={
                <>
                  2nd Position – UI/UX Competition
                </>
              }
              decription={"Recognized for a creative approach to UI/UX design hosted by CSD Dept, DSCE 2024."}
            />
          </div>
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
              logo={raj}
              collegeName="Raj English School, Varanasi"
              course="XII (PCM-92%)"
              duration="2021-2022"
            />

            <EducationCard
              logo={upps}
              collegeName="Udai Pratap Public School, Varanasi"
              course="X (95%)"
              duration="2019-2020"
            />
          </div>

        </div>





        <div className="my-4 w-full">
          <h2 className="font-bold text-lg mb-2 w-full">My Skills</h2>

          <div>
            <HorizontalBoxes
              items={[
                { image: react, text: "React" },
                { image: next, text: "Next.js" },
                { image: node, text: "Node.js" },
                { image: tailwindcss, text: "Tailwind CSS" },
                { image: javascript, text: "Javascript" },
                { image: mongodb, text: "MongoDb " },
                { image: express, text: "Express.js" },
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
                { image: wireframe, text: "Wireframing" },
                { image: prototype, text: "Prototyping" },
                { image: font, text: "Typography" },
                { image: color, text: "Color Theory" },
                { image: illustrator, text: "Illustrator" },
                { image: photoshop, text: "Photoshop" },
                { image: canva, text: "Canva" },
                { image: miro, text: "Miro" },
                { image: figma, text: "Figma" },
                { image: webflow, text: "Webflow" },
                { image: krita, text: "Krita" },
              ]}
              speed={10}
              boxColor="bg-[rgba(243,244,246,0.5)]"
              boxSize="w-30 h-10"
              boxClass="text-black font-regular text-xs border border-gray-200"
              reverse={true}
            />

          </div>
        </div>

        <div className='w-full mt-5'>
          <h2 className="font-bold text-lg mb-2 w-full">Web Development Projects</h2>
          <div className="text-center flex flex-col items-center">
            <img src={comingsoon} alt="Project Preview" className="w-28 h-28 object-cover border border-gray-300 rounded-full" />
            <p className="mt-3 text-gray-500 text-sm">No web dev projects right now — coming soon!</p>
          </div>

        </div>

        <div className='w-full mt-5'>
          <h2 className="font-bold text-lg mb-2 w-full mt-3">Blogs & Writings</h2>
          <div className="text-center flex justify-between">
            <BlogCard
              img={linkedin}
              title="LinkedIn Redesign"
              description="Reimagined LinkedIn’s first impression with a sleek, user-friendly landing page that enhances engagement and usability."
              link={
                <a
                  href="https://medium.com/@angelicasingh2004/linkedin-reimagined-a-ui-ux-case-study-on-website-redesign-8ab2509e1964"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton
                    text="View Case Study"
                    className="bg-blue-600 hover:bg-blue-700 mt-3"
                  />
                </a>
              }
              duration={"Nov 2025"}
            />


            <BlogCard
              img={ola}
              title="Ola App-Redesign"
              description="A complete redesign of the Ola app with a modern UI and improved user experience, making ride booking simpler, faster, and more engaging."
              link={<ShimmerButton
                text="Work in Progress"
                className="bg-gray-400 cursor-not-allowed my-3"
                disabled
              />}
              duration={"April 2025- In progress"}
            />

          </div>
        </div>

        <div className="mt-15 bg-white text-gray-800 py-6 px-6 flex flex-col items-center rounded-lg w-full mx-auto">
          <h2 className="text-l font-bold mb-1">Let’s Connect</h2>
          <p className="text-xs mb-6 text-center">
            Open to freelance projects, internships, and collaborations. Drop me a message!
          </p>
          <Form
          />


          <div className="flex gap-3 mt-6">
            <a
              href="mailto:letsmailangel@email.com"
              className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
            >
              <img
                src={email}
                alt="Email"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/angelica-singh-960079291/"
              className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
            >
              <img
                src={linkedin_link}
                alt="linkedIn"
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://github.com/angelica-singh-04"
              className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
            >
              <img
                src={git}
                alt="Github"
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://dribbble.com/angelica__2004"
              className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
            >
              <img
                src={dribble}
                alt="dribbble"
                className="w-6 h-6"
              />
            </a>
          </div>
          <div className='mt-6 text-xs text-gray-400'>Made with ❤️ by Angelica</div>

        </div>

      </div>

      <nav
        className={`fixed top-10 w-72 h-15 shadow-lg flex flex-row items-center justify-center py-3 rounded-full border border-gray-200 ${
          darkMode ? "bg-[#091920] text-white border border-blue-200" : "bg-white text-black border border-blue-200"
        }`}
      >
        <div className="mr-5 text-xl font-bold flex items-center justify-center">
          <img src={as} alt="AS" className="h-10 w-10 rounded-full" />
        </div>

{[
  { icon: home, href: "#about", label: "Home" },
  { icon: resume, href: "https://drive.google.com/file/d/1KJwagfc7XUZrkHJoilpqz9PkbhmbeT6g/view?usp=sharing", label: "Resume" },
  { icon: dribble, href: "https://dribbble.com/angelica__2004", label: "Dribbble" },
  { icon: git, href: "https://github.com/angelica-singh-04", label: "GitHub" },
  { icon: linkedin_link, href: "https://www.linkedin.com/in/angelica-singh-960079291/", label: "Linkedin" },
  { icon: mode, href: "#", label: "Mode", hidden: true, onClick: toggleMode }, // hidden
]
  .filter(item => !item.hidden) // 👈 filter out hidden ones
  .map((item, index) => (
    <a
      key={index}
      href={item.href}
      onClick={item.onClick}
      className="relative group w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-all duration-300"
    >
      <img
        src={item.icon}
        alt={item.label}
        className={`w-4 h-4 ${darkMode ? "filter-white" : "filter-black"}`}
      />
      <span className="absolute top-12 bg-gray-800 dark:bg-gray-200 py-1 px-2 text-white dark:text-black text-xs rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
        {item.label}
      </span>
    </a>
))}

      </nav>

    </div>

  )
}

export default App