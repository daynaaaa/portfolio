//import React from 'react'
import { motion } from "framer-motion";
import yb1 from "../assets/yb page 1.png";
import yb2 from "../assets/yb page 2.png";
import yb3 from "../assets/club divider.png";
import yb4 from "../assets/student life divider.png";
import nvg from "../assets/navigoose.png";



export default function Designs() {
    return (
        <div id="project" className='p-10 '>
          <h2>My Designs</h2>
          
          <div className="designs grid-cols-1 md:grid-cols-2 sm:grid-cols-1 ">
          <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className="design max-w-[600px]">
                    <motion.img 
                        className="w-[550px] md:w-[550px] rounded-3xl "
                        src={nvg}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />
                    <div>
                        <h3 className='text-light1'>Navigoose Website Design</h3>
                    </div>
                </div>
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className="design max-w-[600px]">
                    <motion.img 
                        className="w-[550px] md:w-[550px] rounded-3xl "
                        src={yb3}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />
                    <div>
                        <h3 className='text-light1'>23/24 Yearbook Club Divider</h3>
                        {/*<p className='text-med '> Editor-in-Chief for HS Yearbook team (2024-2025)<br/>
                        </p>*/}
                    </div>
                </div>
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className="design max-w-[600px]">
                    <motion.img 
                        className="w-[550px] md:w-[550px] rounded-3xl "
                        src={yb4}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />
                    <div>
                        <h3 className='text-light1'>23/24 Yearbook Student Life Divider</h3>
                        {/*<p className='text-med '> Editor-in-Chief for HS Yearbook team (2024-2025)<br/>
                        </p>*/}
                    </div>
                </div>
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className="design max-w-[600px]">
                    <motion.img 
                        className="w-[550px] md:w-[550px] rounded-3xl "
                        src={yb2}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />
                    <div>
                        <h3 className='text-light1'>23/24 Yearbook Double Page</h3>
                        <p className='text-med '> Editor-in-Chief for HS Yearbook team (2024-2025)<br/>
                        </p>
                    </div>
                </div>
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className="design max-w-[600px]">
                    <motion.img 
                        className="w-[550px] md:w-[550px] rounded-3xl "
                        src={yb1}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />
                    <div>
                        <h3 className='text-light1'>22/23 Yearbook Single Page</h3>
                        <p className='text-med '> Designer for  HS Yearbook team (2023-2024)<br/>
                        </p>
                    </div>
                </div>
            </motion.p>
            </div> 
          </div>
      );
      
}
