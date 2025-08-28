import Image from "next/image";
import '../../styles/claude.scss';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
export function ClaudeChat({setArtData}) {

    const [input, setInput] = useState("");

    async function getPoints() {
        try {
            const response = await axios.post("/api/postToClaude", {input: input});
            setArtData(response.data.content[0].text);
        }catch(error) {
            console.log(error)
        }
        
    }

    const handleKeyDown = (event) => {
        if(event.key == 'Backspace') {
            setInput(input.slice(0, input.length-1));
        }else if(event.key == 'Shift' | event.key == 'CapsLock') {

        }else if(event.key == 'Enter') {
            getPoints();
        }else {
            setInput(input+event.key);
        }
        
    };

    

    return (
    <div className="claudeChatDiv">
        <div tabIndex="0" className="terminalWindow" id="editableTerminalWindow" onKeyDown={handleKeyDown}>
            newuser@sanganet:/sanganet/cli$ activateaidisplay <br></br>
            You can change the display above by entering an artwork you want AI to draw
            Artwork: {input}
        </div>
    </div>
    )
}