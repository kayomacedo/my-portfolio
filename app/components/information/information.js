import SectionTitle from "../sectionTitle/section-title";
import "./information.scss"
import Image from "next/image";

export default function Info() {
    return (
        <div className='information'>
            <SectionTitle
                text={'Languages'}
            />
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
            <SectionTitle
                text={'Education'}
            />
                <p>information systems bachelors degree 

                    <br></br> - Estácio Cabo Frio
                </p>
                

            </div>
        </div>
    )
}