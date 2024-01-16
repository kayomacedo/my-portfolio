"use client"; // This is a client component 👈🏽

import Image from "next/image";
import "./header.scss";
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function Header() {
  const [text] = useTypewriter({
    words: ['Software Engeneer', 'Developer Mobile', 'Backend Developer', 'Full Stack'],
    loop: {},
    typeSpeed: 150


  })
  return (
    <div className="header">
      <div className="box-header">
        

      <div className="titlesHeader">
        <h1>Hi, i'm Kayo 👋</h1>
        <h2>

          {text}

          <Cursor
            cursorColor='white'
          />
        </h2>
      </div>
      <Image
        className="header-img"
        src="/perfil.jpg"
        alt="Logo"

        width={150}
        height={150}
        priority
      />
      </div>


    </div>
  )
}
