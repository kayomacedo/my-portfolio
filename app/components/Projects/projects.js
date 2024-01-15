"use client"; // This is a client component 👈🏽
import Image from "next/image";
import SectionTitle from "../sectionTitle/section-title";
import './projects.scss';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState,useEffect } from "react";
import { VscGithubAlt } from "react-icons/vsc";


import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projects() {
    const [slidePerview,setSlidePerview] = useState(2);
    const data = [
        { id: '1', img: '/project1.gif',url:'https://github.com/kayomacedo/gerenciador-de-contas-app' },
        { id: '2', img: '/project1.gif', url:'https://github.com/kayomacedo/gerenciador-de-contas-app' }
     
       

    ]

    useEffect(()=>{
        function handleResize(){
            setSlidePerview(window.innerWidth > 768? 2 : 1);

        }
        handleResize();
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }

    },[]);
    return (
        <div className="projects">
            <SectionTitle
                text={'Projects'}
            />
            <div className="gallery">
                <Swiper
                
                slidesPerView={slidePerview}
                 spaceBetween={30}
                
                 autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                 
                 loop={true}
                 pagination={{
                   clickable: true,
                 }}
                 navigation={true}
                 modules={[ Navigation, Autoplay]}
                >
                    {
                        data.map((item) => (
                            <>
                            
                            <SwiperSlide key={item.id} className="content">

                            <Image 
                                className="slider-item"
                                src={item.img}
                                alt="Logo"

                                width={150}
                                height={150}
                              
                                priority
                            />
                       
                              
                                <a target="_blank" href={item.url}  className="link"> On  
                                <VscGithubAlt fontSize={25} className="git"/>
                                </a>


                            </SwiperSlide>
                           
                            </>

                        ))
                    }
                </Swiper>


            </div>
        </div>
    )
}