import React from 'react'
import { Sphere } from "@react-three/drei";

const SphereShape = ({ args, position, rotation }) => {
    const handleClick = () => console.log('Clicked on Sphere')
  return (
    <mesh>
        <Sphere args={args} position={position} rotation={rotation} onClick={handleClick} >
            <meshStandardMaterial attach="material" color="orange" />
        </Sphere>
    </mesh>
  )
}

export default SphereShape