'use client'
import React from 'react'
import { motion } from "framer-motion"


function Home() {

  return (
    <div >

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: .3, delay: .2 }}
      >

        <div className='relative h-svh w-full bg-red-600'>a</div>

      </motion.div>
    </div>
  )
}

export default Home