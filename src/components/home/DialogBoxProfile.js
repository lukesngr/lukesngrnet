import "../../styles/dialogboxprofile.scss";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { FaTimesCircle, FaMinusCircle } from "react-icons/fa";
import { DialogBoxContext } from "./DialogBoxContext";

function DialogBoxProfile() {

    //movement logic
    const [transformX, setTransformX] = useState(0);
    const [transformY, setTransformY] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState({old: 0, new: 0});
    const [mouseY, setMouseY] = useState({old: 0, new: 0});

    useEffect(() => {
        const updateCoordinates = (e) => {
            setMouseX((previousValue) => {return {old: previousValue.new, new: e.x}});
            setMouseY((previousValue) => {return {old: previousValue.new, new: e.y}});
        }
        window.addEventListener('mousemove', updateCoordinates);
        return () => {
            window.removeEventListener('mousemove', updateCoordinates);
        }
    }, []);

    useEffect(() => {
        if(mouseDown) {
            setTransformX((mouseX.new - mouseX.old)+transformX);
            setTransformY((mouseY.new - mouseY.old)+transformY);
        }
    }, [mouseX, mouseY]);

    //minimize/close logic

    

    const [dialogBoxStyle, setDialogBoxStyle] = useState("appear");
    const {dialogBoxHidden, setDialogBoxHidden} = useContext(DialogBoxContext);

    if(!dialogBoxHidden && dialogBoxStyle != "appear") {
        setDialogBoxStyle("appear");
    }

    function minimizeDialog() {
        setDialogBoxHidden(true);
        setDialogBoxStyle("minimize");
    }

    function closeDialog() {
        setDialogBoxHidden(true);
        setDialogBoxStyle("close");
    }

    return (
    <div className="dialogContainer">
        <div style={{'transform': `translate(${transformX}px, ${transformY}px)`}} className="vaporDialog" id={dialogBoxStyle}>
            <div onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} onMouseLeave={() =>setMouseDown(false)} className="dialogTitle">
                Me <FaTimesCircle onClick={closeDialog} className="fakeExitButton" size={30} /><FaMinusCircle onClick={minimizeDialog} className="fakeMinusButton" size={30} />
            </div>
            <Image src="/me.jpg" width={700} height={700} alt="Picture of Luke Sanger" className="profilePicture" priority/>
        </div>
    </div>
    )
}

export default DialogBoxProfile;