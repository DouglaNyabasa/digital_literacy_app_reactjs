import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Testimonal from '../testimonials/Testimonal'
import Faq from '../faq/Faq'


const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HAbout />
      <Testimonal/>
      <Faq/>
     
    </>
  )
}

export default Home
