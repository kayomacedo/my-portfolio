import SectionTitle from "../sectionTitle/section-title";
import "./information.scss"
import Image from "next/image";

export default function Info() {
    return (
        <div className='information'>
            <div className="title">
            <SectionTitle
                text={'Languages'}
            />

            </div>
            <div className='languages-info'>
                <div className="boxIconLanguage">

                    <Image
                        className="icon"
                        src="/flag-br.png"
                        alt="Logo"

                        width={30}
                        height={30}
                        priority
                    />
                    <h1>PT-BR Native Speaker</h1>
                </div>
                <div className="boxIconLanguage">

                    <Image
                        className="icon"
                        src="/flag-eua.svg"
                        alt="Logo"

                        width={30}
                        height={30}
                        priority
                    />
                    <h1>EN - Advanced</h1>
                </div>
                
            </div>

           
            <div className='education-info'>
            <div className="title"> 
            
            
            <SectionTitle
                text={'Education'}
            />
            </div>
                <p>
    Information Systems Bachelor's Degree
    <br></br> - Estácio Cabo Frio (7th semester)
</p>
                

            </div>
        </div>
    )
}