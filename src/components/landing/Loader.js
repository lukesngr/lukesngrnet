import { Html, useProgress } from '@react-three/drei'


//loader copied from react-three fiber website so problem of animation running without models doesn't occur
export function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}