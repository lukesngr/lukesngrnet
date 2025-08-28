import { Canvas } from "@react-three/fiber";
import Computer from "../components/landing/Computer";
import Background from "../components/landing/Background";
import ScrollToMainPage from "../components/landing/ScrollToMainPage";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Loader } from "../components/landing/Loader";
import { useRef } from "react";
import { KeyboardControls, Text, useKeyboardControls } from "@react-three/drei";
function LandingPage() {
    const soundRef = useRef(null);
    const [dpr, setDpr] = useState(1);
    const [aspectRatio, setAspectRatio] = useState(1);
    const router = useRouter();
    
    useEffect(() => {
        const sound = new Howl({
            src: '/background_track.mp3',
            loop: true,
            volume: 0.1,
            autoplay: true,
            html5: true,
            preload: true
        })
        soundRef.current = sound
        setDpr(window.devicePixelRatio);
        setAspectRatio(window.innerWidth / window.innerHeight);
        router.prefetch("/home");

        return () => {
            sound.unload();
        };

    }, []);
    
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Canvas camera={{fov: 75, position: [0, 0, 30], aspect: aspectRatio}} dpr={dpr}>
                <Suspense fallback={<Loader />}>
                    <Background></Background>
                    <Computer></Computer>
                    <Text font="/Courier Prime Sans.woff"  position={[0, 4, -100]} fontSize={0.5} color="#4FF38E">
                        Press Enter
                    </Text>
                </Suspense>
                
                <ambientLight></ambientLight>
                <pointLight color={0xf59df5} position={[0, 4.75, -20]}></pointLight>
                <ScrollToMainPage />
            </Canvas>
        </div>
    )
}

export default LandingPage;