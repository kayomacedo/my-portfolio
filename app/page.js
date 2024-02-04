
import Experience from './components/Experience/experience';
import Header from './components/Header/header'
import Info from './components/information/information';
import './styles/home.scss';
import MenuSocial from './components/Social/social'
import ContactMe from './components/ContactMe/contactMe';
import Projects from './components/Projects/projects';
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

export default function Home() { 
  return (
    <main className='container'>



      <Header />
      <MenuSocial />
      <div className='blocoTop'>
        <div className='inicio'>
        <Experience />
          

        </div>
        <div className='meio'>
        <Projects/>

        </div>
        <div className='final'>
        <Info/>
        </div>


      </div>







      <div className='buttons'>
        <div className='social'>

        </div>


      </div>




    </main>
  )
}
