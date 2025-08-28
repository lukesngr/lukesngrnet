import { TextureLoader } from "three/src/loaders/TextureLoader";
import {useLoader, useThree} from "@react-three/fiber";
import {useEffect}  from "react";

function Background() {
    const { scene } = useThree();
    const texture = useLoader(TextureLoader, '/0_0.png');
    useEffect(() => {
      if (!texture) return;
  
      const imageAspect = texture.image.width / texture.image.height;
      texture.matrixAutoUpdate = false;
      const aspect = window.innerWidth / window.innerHeight;
      
      if (aspect < imageAspect) {
        texture.matrix.setUvTransform(0, 0, aspect / imageAspect, 1, 0, 0.5, 0.5);
      } else {
        texture.matrix.setUvTransform(0, 0, 1, imageAspect / aspect, 0, 0.5, 0.5);
      }
      
      scene.background = texture;
    }, [scene, texture]);
    
    return null;
}

export default Background;