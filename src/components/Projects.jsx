import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLink,
    AiOutlineLinkedin,
  } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div id="project" className='p-10 '>
          <h2>My Projects</h2>
          <div className="projects grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                    <div className="project max-w-[400px]">
                        <div className="flex gap-6 flex-row text-4xl md:text-6xl ">
                            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/s-illly/Project-Technova" target="_blank">
                                <AiOutlineGithub className='fill-light2' size={50}/>
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://devpost.com/software/optimeyes" target="_blank">
                                <AiOutlineLink className='fill-light2' size={50}/>
                            </motion.a>
                        </div>
                        <div>
                        <h3 className='text-light1'>OptimEyes - Winner @ Technova Hackathon</h3>
                        <p className='text-med '> Developed a <span className='text-light1'>website</span> & <span className='text-light1'>chrome extension</span> that generates a random wellness activity every 20 minutes.<br/>

                        <br/>Reduces overall screen time by guiding users to follow the 20-20-20 rule.
                        </p>
                        <div>
                            <li className='text-med '>Technova is the University of Waterloo's first Women+ in Tech Hackathon, organised by WiCS (Women in Computer Science) "</li>
                            <p></p>
                        </div>
                        <footer> 
                            <ul className="tech-list "> 
                                <li className='text-med'>JavaScript</li> 
                                <li className='text-med'>React</li> 
                                <li className='text-med'>HTML</li> 
                                <li className='text-med'>CSS</li> 
                                <li className='text-med'>Git</li>
                            </ul>
                         </footer>
                        </div>
                    </div>
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            >
                <div className="project max-w-[400px]">
                    <div className="flex gap-6 flex-row text-4xl md:text-6xl ">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/daynaaaa" target="_blank">
                            <AiOutlineGithub className='fill-light2' size={50}/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://purple-affogato.itch.io/catmas-chronicles" target="_blank">
                            <AiOutlineLink className='fill-light2' size={50}/>
                        </motion.a>
                    </div>
                    <div>
                    <h3 className='text-light1'>Catmas Chronicles</h3>
                    <p className='text-med '> I developed a game following the story of a stray cat fighting attackers using Godot.</p>
                    <div>
                        <li className='text-med '>MCPT Game-Jam 2023 submission</li>
                        <li className='text-med '>The theme was "Past Present and Future"</li>
                        <p></p>
                    </div>
                    <footer> 
                        <ul className="tech-list "> 
                            <li className='text-med'>Godot Engine</li> 
                            <li className='text-med'>Git</li>
                            <li className='text-med'>Photoshop</li> 
                        </ul>
                        </footer>
                    </div>
                </div>
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            >
                <div className="project max-w-[400px]">
                    <div className="flex gap-6 flex-row text-4xl md:text-6xl ">

                        <motion.a whileHover={{ scale: 1.2 }} href="https://replit.com/@daynach/GWC-Game-Jam" target="_blank">
                            <AiOutlineLink className='fill-light2' size={50}/>
                        </motion.a>
                    </div>
                    <div>
                    <h3 className='text-light1'>Grow - GWC Game Jam</h3>
                    <p className='text-med '> 
                        I designed and developed a merging game from scratch using Replit, inspired by the Suika Watermelon Game. <br/>
                        <br/>I also attained a certificate for completing the 2024 Girls Who Code Summer Immersion Program with Morgan Stanley.
                    </p>
                    <footer> 
                        <ul className="tech-list "> 
                            <li className='text-med'>JavaScript</li> 
                            <li className='text-med'>p5.js</li>
                            <li className='text-med'>Replit</li> 
                        </ul>
                        </footer>
                    </div>
                </div>
            </motion.p>
            
            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            >
                <div className="project max-w-[400px]">
                    <div className="flex gap-6 flex-row text-4xl md:text-6xl ">

                        <motion.a whileHover={{ scale: 1.2 }} href="https://drive.google.com/file/d/1VFRO2MOfaTvbw1K6Xmun5_qQwQUkbXF8/view" target="_blank">
                            <AiOutlineLink className='fill-light2' size={50}/>
                        </motion.a>
                    </div>
                    <div>
                    <h3 className='text-light1'>SumoBot</h3>
                    <p className='text-med '> 
                        I designed and built a functioning SumoBot from scratch using an Arduino Uno. <br/>
                        <li className='text-med ' > Programmed the robot to track and attack its opponents while staying in an arena in C language. </li>
                        <li className='text-med '> Debugged and tested code using Tinkercad prior to deploying on physical components. </li>
                    </p>
                    <footer> 
                        <ul className="tech-list "> 
                            <li className='text-med'>C</li> 
                            <li className='text-med'>Arduino Uno</li>
                            <li className='text-med'>Tinkercad</li> 
                            <li className='text-med'>SketchUp</li> 
                        </ul>
                        </footer>
                    </div>
                </div>
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            >
                <div className="project max-w-[400px]">
                    <div className="flex gap-6 flex-row text-4xl md:text-6xl ">

                        <motion.a whileHover={{ scale: 1.2 }} href="https://drive.google.com/file/d/1LW1AeKjrjcBRC_RzfixGLihphPoZ9jUt/view" target="_blank">
                            <AiOutlineLink className='fill-light2' size={50}/>
                        </motion.a>
                    </div>
                    <div>
                    <h3 className='text-light1'>Traffic Control System</h3>
                    <p className='text-med '> 
                        I built a physical city 3D model with working traffic lights, a streetlight, and a parking lot gate. <br/>
                        
                        <li className='text-med '> Programmed and drafted code in C language using Tinkercad, while designing 3D elements with SketchUp. </li>
                    </p>
                    <footer> 
                        <ul className="tech-list "> 
                            <li className='text-med'>C</li> 
                            <li className='text-med'>Arduino Uno</li>
                            <li className='text-med'>Tinkercad</li> 
                            <li className='text-med'>SketchUp</li> 
                        </ul>
                        </footer>
                    </div>
                </div>
            </motion.p>
            </div> 
          </div>
      );
}
