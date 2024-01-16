
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { FaThreads } from "react-icons/fa6";
import './social.scss';
export default function MenuSocial() {
    return (
        <div className="menu-social">
            <a href="https://www.instagram.com/kayomacedo/" target="_blank">

                <FaInstagram className="icon" />
            </a>
            <a href="https://www.threads.net/@kayomacedo" target="_blank">

                <FaThreads className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/kayomacedo/" target="_blank">

                <CiLinkedin className="icon" />
            </a>
            <a href="https://github.com/kayomacedo/" target="_blank">

                <VscGithubAlt className="icon" />
            </a>
        </div>
    )
}