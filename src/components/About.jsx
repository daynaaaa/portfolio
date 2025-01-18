import React from 'react'

import { motion } from "framer-motion";

export default function About() {
  return (
    <div id='about' className='p-10 '>
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        >
            <h2>About Me</h2>
            <div className="text-light2 md:text-2xl text-lg mb-6 mx-1 ">
                Some things about me:
                <li className='text-light2 '>I draw in my free time (ig: @dayna.ch)</li>
                <li className='text-light2 '>I draw in my free time (ig: @dayna.ch)</li>
            </div>

        </motion.p>
    </div>
  );
}
