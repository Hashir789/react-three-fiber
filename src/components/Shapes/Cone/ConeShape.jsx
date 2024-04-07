import React from 'react'
import { Cone } from "@react-three/drei";

const ConeShape = ({ args, position, rotation }) => {
    const handleClick = () => console.log('Clicked on Sphere')
  return (
    <mesh>
        <Cone args={args} position={position} rotation={rotation} onClick={handleClick} >
            <meshStandardMaterial attach="material" color="orange" />
        </Cone>
    </mesh>
  )
}

export default ConeShape