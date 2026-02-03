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
import project2 from './assets/project2.jpeg';
import project3 from './assets/Start.png';
// import project4 from './assets/project4.png';
import comingsoon from './assets/comingsoon.png';
import LazyTrunk from './assets/Lazytrunk.jpg';
import place1 from './assets/1st-place.svg'
import place2 from './assets/2nd-place.svg'
import Achievements from './components/Achievment';
import BlogCard from "./components/Blogcard";
import linkedin from './assets/linkedin.webp'
import flutterkanpur from './assets/flutter-kanpur.webp'
import git from './assets/github.png'
import email from './assets/email.png'
import dribble from './assets/dribble.png'
import linkedin_link from './assets/linkedin_link.png'
import home from './assets/home.png'
import resume from './assets/resume.png'
import mode from './assets/mode.png'
import as from './assets/AS.png'
import zenith from './assets/zenith.png'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-[#0a0a0a] flex items-center justify-center text-white min-h-screen font-[Inter]" : "bg-white text-black min-h-screen font-[Inter] flex items-center justify-center"}>
      <div className="w-full max-w-2xl lg:max-w-3xl mt-40  flex flex-col items-start text-left px-4 sm:px-6 md:px-8 lg:px-12 overflow-auto pb-24">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 mt-20 sm:mt-24 md:mt-28">
          Hi, I'm <span className='text-blue-500'>Angelica</span>
        </span>
        <h4 className="text-sm sm:text-base md:text-lg text-gray-500 font-regular">
          UI/UX & Graphic Designer, Full-Stack Developer. Always exploring creativity through tech.
        </h4>
        <div className="mt-4 mb-6">
          <img
            src={photo}
            alt="photo"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-lg object-cover border-0 border-black rotate-356"
          />
        </div>

        <div className="my-4 w-full">
          <h2 className="font-bold text-base sm:text-lg md:text-xl mb-2 w-full">About</h2>
          <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
            Currently a <b>3rd-year Information Science & Engineering</b> B.E. student at DSCE, Bangalore,
            I’m passionate about <b>turning ideas into interactive digital experiences</b>.
            As a <b>UI/UX designer</b> and <b>front-end developer</b>, I enjoy crafting beautiful and
            user-friendly interfaces using <b>React, Tailwind, and Figma. </b>
            While I’m not coding, you’ll find me creating <b>art, illustrations, or enjoying music.</b>
          </p>
        </div>
        <div className='w-full mt-5'>
          <h2 className="font-bold text-base sm:text-lg md:text-xl mb-3 w-full">Design Projects</h2>

          <Webproject
            img={zenith}
            duration={"Jan 2026"}
            description={"Created event assets: stickers, ID badges, t-shirts, standees, certificates, presentation decks, and social media graphics in a bold cosmic theme to energize the 24-hour experience."}
            name={"Zenith"}
            list={["Visual Design", "Branding","Digital and Print Assets","Collaterals"]}

            btn={
              <a
                href="https://drive.google.com/file/d/1QC6Dm7WqV2lIbJiXHw6cLT-EG2uiHPgt/view?usp=sharing"
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
            img={flutterkanpur}
            duration={"Dec'25-Jan 2026"}
            description={"An end-to-end UX case study where I redesigned the Flutter Kanpur app by applying user research, personas, and validation to create a clearer, more engaging community experience."}
            name={"FlutterKanpur- App Redesign"}
            list={["UI/UX Design", "User research","Usability testing ","Mobile app"]}

            btn={
              <a
                href="https://www.figma.com/design/Sj5SjNWRInNYCmKM7R9rvp/Untitled?node-id=0-1&t=LJeGKNc2jwPL8Yop-1"
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
            img={project2}
            duration={"Oct-Nov 2025"}
            description={"Curevo is a personal project where I designed a patient-focused hospital management website to make appointments, records, and care journeys easy to use. It includes a complete end-to-end flow and a scalable design system created in Figma."}
            name={"Curevo- Web-Design"}
            list={["Figma", "UI Design","UX Research","Design System","Web Design"]}

            btn={
              <a
                href="https://www.figma.com/design/wViHuSB0qv2Ty40DsLj4D6/Curevo?node-id=0-1&t=6p5CIDPL4OK46u64-1"
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
          <h2 className="font-bold text-base sm:text-lg mb-2 w-full">Work Experince</h2>
          <div>
            <EducationCard
              logo={LazyTrunk}
              collegeName="Lazy Trunk"
              course="UI/UX Designer"
              duration="Aug'25 - Oct'25"
            />
            <p className='text-xs sm:text-sm text-gray-600 ml-4 sm:ml-16'><b>At Lazy Trunk,</b> I work on designing and enhancing mobile game apps, focusing on creating fun, engaging, and intuitive user experiences. I design UI/UX for various party games, ensuring visually consistent and interactive interfaces that make gameplay enjoyable and seamless across devices.</p>
            <div className="flex flex-wrap mt-2 ml-4 sm:ml-16">
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Figma
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Canva
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Wireframing
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Prototyping
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Mobile App Design
              </span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 my-4"></div>
          <div>
            <EducationCard
              logo={artizence}
              collegeName="Artizence"
              course="UI/UX Designer"
              duration="Mar'25 - Apr'25"
            />
            <p className='text-xs sm:text-sm text-gray-600 ml-4 sm:ml-16'><b>At Artizence</b>, I was responsible for designing websites for a diverse range of clients, focusing on creating visually appealing and user-friendly interfaces. I developed intuitive UI/UX designs that improved user engagement and ensured seamless digital experiences across different platforms.</p>
            <div className="flex flex-wrap mt-2 ml-4 sm:ml-16">
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Figma
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Wireframing
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Prototyping
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Web Design
              </span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 my-4"></div>
          <div>
            <EducationCard
              logo={wander}
              collegeName="WanderGenie LLM"
              course="UI/UX Designer & Graphic Designer"
              duration="Nov'24 - Jan'25"
            />
            <p className='text-xs sm:text-sm text-gray-600 ml-4 sm:ml-16'><b>WanderGenie</b> is an AI-powered travel platform that generates personalized itineraries to simplify trip planning. I contributed by designing <b>253</b> user-centered screens, along with wireframes, prototypes, and graphic assets in <b>Figma and Canva</b>, ensuring an intuitive design flow, engaging user experience, and a consistent brand identity across the platform and its promotional materials.</p>
            <div className="flex flex-wrap mt-2 ml-4 sm:ml-16">
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Figma
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                UI Design
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Canva
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Wireframing
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Prototyping
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Graphic Design
              </span>
              <span className="inline-block bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full mr-2 mb-2">
                Miro
              </span>
            </div>
          </div>
        </div>
        <div className="my-4 w-full">
          <h2 className="font-bold text-base sm:text-lg mb-2 w-full">Volunteering</h2>
          <div className="flex flex-col space-y-4">
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
          <h2 className="font-bold text-base sm:text-lg mb-2 w-full">Achievements</h2>
          <div className="flex flex-col items-center space-y-4">
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
          <h2 className="font-bold text-base sm:text-lg mb-2 w-full">Education</h2>
          <div className="flex flex-col space-y-4">
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
          <h2 className="font-bold text-base sm:text-lg mb-2 w-full">My Skills</h2>

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
        {/* <h2 className="font-bold text-base sm:text-lg mb-2 w-full">Web Development Projects</h2> */}
        {/*         <div className="text-center flex flex-col items-center py-8"> */}
        {/*           <img */}
        {/*             src={comingsoon} */}
        {/*             alt="Coming Soon" */}
        {/*             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover border border-gray-300 rounded-full" */}
        {/*           /> */}
        {/*           <p className="mt-4 text-gray-500 text-xs sm:text-sm md:text-base"> */}
        {/*             No web dev projects right now — coming soon! */}
        {/*           </p> */}
        {/*         </div> */}

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-4 w-full">
          <h2 className="font-bold text-base sm:text-lg mb-2 w-full mt-3">Blogs & Writings</h2>
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">

            <BlogCard
              img={flutterkanpur}
              title="FLutter Kanpur Redesign"
              description="An end-to-end UX case study where I redesigned the Flutter Kanpur app by applying user research, personas, and validation."
              link={
                <a
                  href="https://medium.com/@angelicasingh2004/ui-ux-case-study-the-flutterkanpur-app-revamp-f801c97d36d7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton
                    text="View Case Study"
                    className="bg-blue-600 hover:bg-blue-700 mt-3"
                  />
                </a>
              }
              duration={"Jan 2026"}
            />
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



          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-15 bg-white text-gray-800 py-6 sm:py-8 px-4 sm:px-6 flex flex-col items-center rounded-lg w-full">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">Let's Connect</h2>
          <p className="text-xs mb-2 text-gray-600 sm:text-sm text-center max-w-md">
            Open to freelance projects, internships, and collaborations. Dro
            p me a message!
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
        className={`fixed top-4 sm:top-6 md:top-10 left-1/2 -translate-x-1/2 w-[60%] sm:w-62 md:w-80 h-12 sm:h-14 md:h-16 shadow-lg flex flex-row items-center justify-around px-2 sm:px-3 md:px-4 py-2 rounded-full border ${darkMode ? "bg-[#091920] text-white border-blue-200" : "bg-white text-black border-blue-200"
          } z-50`}
      >
        <div className="mr-2 sm:mr-3 md:mr-5 text-xl font-bold flex items-center justify-center flex-shrink-0">
          <img src={as} alt="AS" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full object-cover" />
        </div>

        {[
          { icon: home, href: "./", label: "Home" }, // Remove isActive prop
          { icon: resume, href: "https://drive.google.com/file/d/1-hSW1f5nMUYO0NQ7qgfAWHBfeHkQslFF/view?usp=drivesdk", label: "Resume" },
          { icon: dribble, href: "https://dribbble.com/angelica__2004", label: "Dribbble" },
          { icon: git, href: "https://github.com/angelica-singh-04", label: "GitHub" },
          { icon: linkedin_link, href: "https://www.linkedin.com/in/angelica-singh-960079291/", label: "Linkedin" },
          { icon: mode, href: "#", label: "Mode", hidden: true, onClick: toggleMode },
        ]
          .filter(item => !item.hidden)
          .map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={item.onClick}
              className="relative group w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full hover:bg-gray-300 transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ${item.label === "Home" ? '[filter:invert(24%)_sepia(85%)_saturate(2203%)_hue-rotate(214deg)_brightness(97%)_contrast(101%)]' :
                    darkMode ? "filter-white" : "filter-black"
                  }`}
              />
              <span className="absolute top-10 sm:top-12 md:top-14 bg-gray-800 dark:bg-gray-200 py-1 px-2 text-white dark:text-black text-[10px] sm:text-xs rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap pointer-events-none z-10">
                {item.label}
              </span>
            </a>
          ))}

      </nav>

    </div>

  )
}

export default App
