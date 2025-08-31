import './App.css'
import React from "react";
import EducationCard from "./components/EducationCard";
import HorizontalBoxes from "./components/HorizontalBoxes";
import HorizontalSkills from "./components/HorizontalSkills";
import Webproject  from './components/Webproject';
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
import project2 from './assets/Screen.png';
import project3 from './assets/Start.png';
import project4  from './assets/project4.png';
import comingsoon  from './assets/comingsoon.png';
import LazyTrunk  from './assets/Lazytrunk.jpg';
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

  return (
  <div className="flex justify-center bg-white font-[Inter]">
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
                                <div className="border-t-1 border-dashed border-gray-300 my-4"></div>


                <div>
                  <EducationCard
                    logo={LazyTrunk}
                    collegeName="Lazy Trunk"
                    course="UI/UX Designer"
                    duration="Aug'25 - Current"
                  />
                  <p className='text-xs text-gray-600 ml-16'><b>At Lazy Trunk</b>, I was responsible for designing websites for a diverse range of clients, focusing on creating visually appealing and user-friendly interfaces. I developed intuitive UI/UX designs that improved user engagement and ensured seamless digital experiences across different platforms.</p>
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

          <div className='w-full mt-5'>
            <h2 className="font-bold text-lg mb-2 w-full">Projects</h2>
            <Webproject 
            img={project1}
            duration={"Jan 2023 - June 2023"}
            description={"It is my personal web redesign project of Codeforces, where I focused on creating a clean and modern interface with an organized contest dashboard, searchable problem sets, enhanced user profiles with ratings, and interactive community forums."}
            name={"Codeforces Web-Redesign"}
            list={["React", "Tailwind", "Figma"]}

            btn={<ShimmerButton
              text="View Project"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => alert("Button Clicked!")}
            />}
            />
            
            <Webproject 
            img={project2}
            duration={"Jan 2023 - June 2023"}
            description={"It is my personal web redesign project of Codeforces, where I focused on creating a clean and modern interface with an organized contest dashboard, searchable problem sets, enhanced user profiles with ratings, and interactive community forums."}
            name={"LinkedIn- Case Study"}
            list={["Miro", "Figma", "Medium"]}

            btn={<ShimmerButton
              text="View Case Study"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => alert("Button Clicked!")}
            />}
            />

            <Webproject 
            img={project3}
            duration={"Jan 2023 - June 2023"}
            description={"It is my personal web redesign project of Codeforces, where I focused on creating a clean and modern interface with an organized contest dashboard, searchable problem sets, enhanced user profiles with ratings, and interactive community forums."}
            name={"Sky Explorer- App Design"}
            list={["React", "Tailwind", "Figma"]}

            btn={<ShimmerButton
              text="View Project"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => alert("Button Clicked!")}
            />}
            />

            <Webproject 
            img={project4}
            duration={"Jan 2023 - June 2023"}
            description={"It is my personal web redesign project of Codeforces, where I focused on creating a clean and modern interface with an organized contest dashboard, searchable problem sets, enhanced user profiles with ratings, and interactive community forums."}
            name={"Ola App- Case Study"}
            list={["React", "Tailwind", "Figma"]}

            btn={<ShimmerButton
              text="Coming Soon"
              className="bg-gray-400 cursor-not-allowed"
              disabled
            />}
            />
          </div>

          <div className='w-full mt-5'>
            <h2 className="font-bold text-lg mb-2 w-full">Web Development Projects</h2>
            <div class="text-center flex flex-col items-center">
                <img src= {comingsoon} alt="Project Preview" class="w-28 h-28 object-cover border border-gray-300 rounded-full" />
                <p class="mt-3 text-gray-500 text-sm">No web dev projects right now — coming soon!</p>
          </div>

          </div>

          <div className='w-full mt-5'>
            <h2 className="font-bold text-lg mb-2 w-full">Achievements</h2>
            <div class="text-center flex flex-col items-center">
                <Achievements 
                img={[place1]}
                title={
                <>
                  Winner – Design Hackathon{" "}
                </>
              }
                decription={"Won 1st place for UI/UX Design Challenge hosted by Flutter Kanpur Community, 2024."}
                />
                <Achievements 
                img={[place1]}
                title={
                <>
                  1st Place – Photography Competition
                </>
              }
                decription={"Awarded for creativity through photography hosted by DSCE, 2023."}
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


          <div className='w-full mt-5'>
                <h2 className="font-bold text-lg mb-2 w-full mt-3">Blogs & Writings</h2>
                <div class="text-center flex justify-between">            
                      <BlogCard
                    img={linkedin}
                    title="LinkedIn Redesign"
                    description="Reimagined LinkedIn’s first impression with a sleek, user-friendly landing page that enhances engagement and usability."
                    link={<ShimmerButton
                  text="View Case Study"
                  className="bg-blue-600 hover:bg-blue-700 mt-3"
                  onClick={() => alert("Button Clicked!")}
                />}
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
  {/* Section Title */}
  <h2 className="text-l font-bold mb-1">Let’s Connect</h2>
  <p className="text-xs mb-6 text-center">
    Open to freelance projects, internships, and collaborations. Drop me a message!
  </p>

  {/* Contact Form */}
  <form className="flex flex-col w-full gap-3">
    <input
      type="text"
      placeholder="Your Name"
      className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 text-xs"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 text-xs"
    />
    <textarea
      placeholder="Your Message"
      className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 resize-none h-24 text-xs"
    />
    <button
      type="submit"
      className="bg-black hover:bg-gray-800 text-white py-3 rounded-lg text-xs font-semibold transition-colors"
    >
      Send Message
    </button>
  </form>

    
    <div className="flex gap-3 mt-6">
  <a
    href="mailto:letsmailangel@email.com"
    className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
  >
    <img
      src={email} // put your email icon here
      alt="Email"
      className="w-6 h-6"
    />
  </a>
    <a
    href="https://www.linkedin.com/in/angelica-singh-960079291/"
    className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
  >
    <img
      src={linkedin_link} // put your email icon here
      alt="linkedIn"
      className="w-6 h-6"
    />
  </a>

      <a
    href="https://github.com/angelica-singh-04"
    className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
  >
    <img
      src={git} // put your email icon here
      alt="Github"
      className="w-6 h-6"
    />
  </a>

        <a
    href="https://dribbble.com/angelica__2004"
    className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
  >
    <img
      src={dribble} // put your email icon here
      alt="dribbble"
      className="w-6 h-6"
    />
  </a>
</div>
<div className='mt-6 text-xs text-gray-400'>Made with ❤️ by Angelica</div>

          </div>

      </div>

<nav className="ml-10 w-16 bg-white shadow-lg flex flex-col items-center justify-between py-3 sticky top-36 h-85 rounded-full border-1 border-gray-200">
  <div className="mb-6 text-xl font-bold">
    <img 
     src={as}
     alt={"AS"}
     className='h-10 w-10 rounded-full'
    />
  </div>

{[
  { icon: home, href: "#about", label: "Home" },
  { icon: resume, href: "#about", label: "Resume" },
  { icon: dribble, href: "#about", label: "Dribbble" },
  { icon: git, href: "#about", label: "GitHub" },
  { icon: linkedin_link, href: "#about", label: "Linkedin" },
  { icon: mode, href: "#about", label: "Mode" },
].map((item, index) => (
  <a
    key={index}
    href={item.href}
    className="relative group w-10 py-5 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300"
  >
    <img src={item.icon} alt={item.label} className="w-4 h-4" />
    <span className="absolute left-16 bg-gray-800 py-1 px-2 text-white text-xs rounded opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
      {item.label}
    </span>
  </a>
))}
</nav>

  </div>
   
  )
}

export default App
