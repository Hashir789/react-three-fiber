import React from 'react'
import * as THREE from 'three';
import { useLoader } from "react-three-fiber";
import img from '../../assets/google-map-tile-image.jpeg'

// const ImageComponent = ({ planee, size }) => {
//     const texture = useLoader(THREE.TextureLoader, img)
//     return (
//     //   rotation={[xyz===1? 1.5 * Math.PI : 0 * Math.PI, xyz===3?Math.PI / 2:0, 0]}
//     // <mesh rotation={[planee==='Y'?0:planee==='X'?-Math.PI / 2:0, 0, planee==='Y'?0:planee==='Z'?-Math.PI / 2:0]} position={[0, -size / 2, 0]}>
//     <mesh rotation={[planee==='X' ? 1.5 * Math.PI : 0 * Math.PI, planee==='Z'?Math.PI / 2:0, 0]} position={[0, -size / 2, 0]}>
//         <planeGeometry attach="geometry" args={[size, size]} />
//         <meshStandardMaterial attach="material" map={texture} />
//     </mesh>
//   )
// }
const ImageComponent = ({ controls }) => {
    const { planee, size  } = controls;
    const texture = useLoader(THREE.TextureLoader, img);
    return (
        <mesh rotation={[planee==='X' ? 1.5 * Math.PI : 0 * Math.PI, planee==='Z'?Math.PI / 2:0, 0]} position={[0, 0, 0]}>
            <planeGeometry attach="geometry" args={[size, size]} />
            <meshStandardMaterial attach="material" map={texture} />
        </mesh>
    );
}
export default ImageComponent