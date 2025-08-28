import {useThree, useFrame} from "@react-three/fiber";
import { useRouter } from 'next/router';
import { useEffect } from "react";

function ScrollToMainPage() {
    const { camera } = useThree();
    const router = useRouter();

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            
            const delta = event.deltaY;
            
            const moveSpeed = 0.5;
            if (camera.position.z <= -70) {
                //need to make it so you login through the computer
            }else{
                camera.position.z -= delta * 0.01 * moveSpeed;
            }
        };

        const handleKeyDown = (e) => {
            if(e.key == 'Enter' && camera.position.z <= -20) {
                router.push('/home')
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel, { passive: false });
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [camera, router]);

}

export default ScrollToMainPage;