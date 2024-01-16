"use client"; // This is a client component 👈🏽
import SectionTitle from "../sectionTitle/section-title";
import { FaPython, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io"
import { ProgressBarPython, ProgressBarReact, ProgressBarJavaScript, ProgressBarReactNative } from '../ProgressBar/progressBar'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { GiLaptop } from "react-icons/gi";
import { RiListSettingsLine } from "react-icons/ri"

import './experience.scss'
export default function Experience() {
  return (
    <div className="experience">
      <div className="title">


      <SectionTitle
        text={'Experience'}
      />
      </div>

      <p className="text">Two years of experience in Python backend and one year in mobile development with React Native. Successfully completed various personal and academic projects, showcasing practical skills.</p>

      <div className='experience-times'>
        <div className="bar-icon">
          <FaPython className="icon" />
          <ProgressBarPython />

        </div>
        
        <div className="bar-icon">
          <TbBrandReactNative className="icon" />
          <ProgressBarReactNative />
        </div>
        
        <div className="bar-icon">
          <IoLogoJavascript className="icon" />
          <ProgressBarJavaScript />
        </div>
        
        
        <div className="bar-icon">
          <FaReact className="icon" />
          <ProgressBarReact />


        </div>

        
        <div className="icon-dev">
          <div className="content">

            <MdOutlinePhoneIphone className="icon" />
            <p>Mobile</p>
          </div>
          <div className="content">
            <TbWorldWww className="icon" />
            <p>Web</p>
          </div>
          <div className="content">
            <GiLaptop className="icon" />
            <p>Software</p>
          </div>
        
          <div className="content">
            
            <RiListSettingsLine className="icon" />  
            <p>API</p>
          </div>
        
        </div>


      </div>


    </div>
  )
}
