'use client'
import React from 'react'
import { motion } from "framer-motion"

function Home() {

  return (
    <div>
      <div className='relative h-svh w-full bg-blue-600 p-10' style={{ height: '300vh' }}>a</div>

      <div className='relative overflow-hidden'>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: .2 }}
        >

          <div className='relative h-svh w-full bg-red-600'>a</div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, transform :'translateX(100%) '},
            visible: { opacity: .5, transform :'translateX(0%) '},
            
          }}

          initial="hidden"
          whileInView="visible"
          transition={{ duration: .3, delay: .2 }}

          className='abolute h-svh w-full bg-red-600'
        />

      </div>
    </div>

  )
}

export default Home