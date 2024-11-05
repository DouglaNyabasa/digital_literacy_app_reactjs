import React from 'react'
import Title from '../../common/tittle/Title';
import { coursesCard } from '../../../dummydata';
import OnlineCourse from '../../allcourses/OnlineCourse';
import video5 from "../../../videos/video5.mp4";

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
      <div className="container">
      <Title subtitle="Our Courses" title="Explore our popular online courses"/>
      <div className="coursesCard">
        <div className="grid2">
          {coursesCard.slice(0,3).map((val) => {
            return (
              <div className="items">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-2/2 h-2/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
              >
                <source src={video5} type="video/mp4"></source>
              </video>
              
               
                <button className="outline-btn">ENROLL NOW !</button>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      </section>
 
      <OnlineCourse/>
    </>
  )
}

export default HAbout
