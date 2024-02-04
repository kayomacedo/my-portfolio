"use client"; // This is a client component 👈🏽
import Image from "next/image";
import SectionTitle from "../sectionTitle/section-title";
import './projects.scss';
import { Navigation, Pagination, Autoplay, EffectCube } from 'swiper/modules';
import { useState, useEffect, useRef } from "react";
import { VscGithubAlt } from "react-icons/vsc";



import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projects() {
  const [slidePerview, setSlidePerview] = useState(2);
  const data = [
    { id: '1', img: '/project1.gif', url: 'https://github.com/kayomacedo/gerenciador-de-contas-app' },
    { id: '2', img: '/project1.gif', url: 'https://github.com/kayomacedo/gerenciador-de-contas-app' }



  ]

  useEffect(() => {
    function handleResize() {
      setSlidePerview(window.innerWidth > 768 ? 2 : 1);

    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);
  return (
    <div className="projects">
      <div className="title">
        <SectionTitle
          text={'Projects'}
        />
      </div>
      <div className="gallery">
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          autoplay={{ delay: 5000 }}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper sliderItem"
        >
          <SwiperSlide>
            <Image src={'/appGerenciador.png'} height={300} width={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/appGerenciador2.png'} height={300} width={300} />

          </SwiperSlide>
          <SwiperSlide>

            <Image src={'/appLight.png'} height={300} width={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/appLight2.png'} height={300} width={300} />
          </SwiperSlide>
        </Swiper>
        <div className="button">

          <a href="https://github.com/kayomacedo/gerenciador-de-contas-app" target="_blank" className="textButon">On Github</a>
        </div>


      </div>
    </div>
  )
}