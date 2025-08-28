import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber"
function Computer() {
    const pc = useLoader(GLTFLoader, '/computer.glb');
    pc.scene.position.y = -20;
    pc.scene.rotation.y = 0;
    pc.scene.position.z = -100;
    pc.scene.position.x = 20;
    return <primitive  onClick={(e) => console.log('click')} object={pc.scene}></primitive>
}

export default Computer