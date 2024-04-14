import React from 'react'
import { Box } from "@react-three/drei";

const Cube = ({ args, position, rotation, number, select, setSelect, position2, enable, color, shape, setShape }) => {
  const handleClick = () => {
    setSelect(select>0?-1:number);
    setShape(select>0?shape:'cube')
  }
  return (
    <mesh>
      <Box args={args} position={select===number && enable=== 1?position2:position} rotation={rotation} onClick={handleClick} >
        <meshStandardMaterial attach="material" color={select===number?'grey':color} />
      </Box>
    </mesh>
  )
}

export default Cube
