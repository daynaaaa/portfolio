import React from "react";
import profilepic from "../assets/catto.png";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="text-light1 md:text-7xl text-5xl tracking-tight mb-4">
                        Danya Cheng
                        </h1>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-light2 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 mx-1"
                >
                    Welcome! I'm currently studying CS @ UWaterloo in my 1B term.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-light1 stroke-light1 fill-current z-20 ">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/daynaaaa">
                            <AiOutlineGithub className='fill-light2'/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/danya-cheng/">
                            <AiOutlineLinkedin className='fill-light2'/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>
    </div>
  )
}

export default Hero