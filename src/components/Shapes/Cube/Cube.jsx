import React from 'react'
import { Box } from "@react-three/drei";

const Cube = ({ args, position, rotation }) => {
  const handleClick = () => console.log('Clicked on Cube')
  return (
    <mesh>
      <Box args={args} position={position} rotation={rotation} onClick={handleClick} >
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </mesh>
  )
}

export default Cube
