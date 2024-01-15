
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { FaThreads } from "react-icons/fa6";
import './social.scss';
export default function MenuSocial() {
    return (
        <div className="menu-social">
            <a href="#">

                <FaInstagram className="icon" />
            </a>
            <a href="#">

                <FaThreads className="icon" />
            </a>
            <a href="#">

                <CiLinkedin className="icon" />
            </a>
            <a href="#">

                <VscGithubAlt className="icon" />
            </a>
        </div>
    )
}