"use client"

import React from 'react'
import Image from 'next/image';
import { motion } from "motion/react"

const Marquee = () => {

  const upperMarquee = [
    "img/react.svg",
    "img/nextjs.svg",
    "img/tailwindcss.svg",
    "img/motion.svg",
    "img/nodejs.svg",
    "img/express.svg",
    "img/jwt.svg",
    "img/postgresql.svg",
    "img/railway.svg",
    "img/vercel.svg",
    "img/git.svg",
    "img/github.svg",
    "img/postman.svg"
  ];

  return (
    <div className='container mx-auto mt-24 lg:mt-0'>
      <div className='flex marquee-side-gradient'>
        <motion.div 
          initial={{x:0}}
          animate={{x:"-100%"}}
          transition={{duration: 30, repeat: Infinity, ease: "linear"}}
          className='flex flex-shrink-0'
        >
          {
            upperMarquee.map((image, index) => {
              return <Image className="h-40 w-56 pr-20" src={image} alt='Tech brand logo' key={index} width={64} height={64} />
            })
          }
        </motion.div>
        <motion.div 
          initial={{x:0}}
          animate={{x:"-100%"}}
          transition={{duration: 30, repeat: Infinity, ease: "linear"}}
          className='flex flex-shrink-0'
        >
          {
            upperMarquee.map((image, index) => {
              return <Image className="h-40 w-56 pr-20" src={image} alt='Tech brand logo' key={index} width={64} height={64} />
            })
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee;