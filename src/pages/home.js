import NavbarWithBanner from "../components/pageParts/NavbarWithBanner"
import DialogBoxProfile from "../components/home/DialogBoxProfile";
import Footer from "../components/pageParts/Footer";
import Skills from "../components/home/Skills";
import Meta from "../components/pageParts/Meta";
import { DialogBoxContextProvider } from "../components/home/DialogBoxContext";
import MyStory from "../components/home/MyStory";
import Hiring from "../components/home/Hiring";
import MediumFeed from "../components/home/MediumFeed";
import { ClaudeChat } from "../components/home/ClaudeChat";
import { useState } from "react";

function Home() {

    const [artData, setArtData] = useState("");
    return (<>
    <link rel="preload" href="/FoxCavalier.tff" as="font" type="font/tff" crossOrigin></link>
    <Meta siteTitle="Homepage" description="Homepage with summary of Luke Sanger's professional summary,  skills and contact points"></Meta>
    <NavbarWithBanner current={0} />
    <DialogBoxContextProvider>
        <DialogBoxProfile />
        <MyStory artData={artData} />
        <ClaudeChat setArtData={setArtData}/>
        <MediumFeed></MediumFeed>
        <Footer></Footer>
    </DialogBoxContextProvider>
    </>)
}

export default Home;