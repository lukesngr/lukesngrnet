import { useQuery } from "react-query";
import axios from "axios";
import { useMemo } from "react";
import Image from "next/image";
import '../../styles/myposts.scss';
import { useState } from "react";

export default function MediumFeed() {
    const [mediumSliderIndex, setMediumSliderIndex] = useState(0);
    const {data, error, status} = useQuery("/api/getPostsData", async () => {
            const response = await axios.get("/api/getPostsData");
            return response.data;
    })

    const parsedData = useMemo(() =>
    {
        let parsedData = [];
        if(status === "success") {

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            
            const items = xmlDoc.querySelectorAll('item')
            
            for(const item of items) {
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;
                parsedData.push({title, link});
            }
        
        
        }
        return parsedData;
    }, [status]);

    let anyPosts = parsedData.length != 0;

    function goForward() {
        if(anyPosts) {
            if(mediumSliderIndex >= (parsedData.length-1)) {
                setMediumSliderIndex(0)
            }else{
                setMediumSliderIndex(mediumSliderIndex+1);
            }
        }
    }

    function goBackward() {
        if(anyPosts) {
            if(mediumSliderIndex <= 0) {
                setMediumSliderIndex(parsedData.length-1);
            }else{
                setMediumSliderIndex(mediumSliderIndex-1);
            }
        }
    }
    return <div className="mediumFeedDiv">
        <h1 className="mediumFeedTitle">My Posts</h1>
        {parsedData.length > 0 && <>
            <a href={parsedData[mediumSliderIndex].link}>
                <Image alt="postIcon" width={200} height={200} src="/fileicon.png"></Image>
            </a>
            <p className="postUndertext">{parsedData[mediumSliderIndex].title}</p>
            </>}
    </div>
}