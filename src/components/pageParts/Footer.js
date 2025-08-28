import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import '../../styles/footer.scss';
import { DialogBoxContext } from "../home/DialogBoxContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

function Footer() {
    const {dialogBoxHidden, setDialogBoxHidden} = useContext(DialogBoxContext);
    const ICON_SIZE = 40;
    return (
    <div className="hstack gap-3 footerDiv">
        <a className="linkedinLink" href="https://www.linkedin.com/in/luke-sanger-43b33420b/"><FaLinkedin size={ICON_SIZE}></FaLinkedin></a>
        <a className="githubLink"  href="https://github.com/lukesngr"><FaGithub size={ICON_SIZE}></FaGithub></a>
        <a className="mediumLink"  href="https://medium.com/@lukesngr/about"><FaMedium size={ICON_SIZE}></FaMedium></a>
        {dialogBoxHidden && <FontAwesomeIcon className="dialogBoxReopen" icon={faCircleInfo} onClick={() => setDialogBoxHidden(false)}></FontAwesomeIcon>}
    </div>)
}

export default Footer;