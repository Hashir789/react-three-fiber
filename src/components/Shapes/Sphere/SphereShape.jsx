import React from 'react'
import { Sphere } from "@react-three/drei";

const SphereShape = ({ args, position, rotation, number, select, setSelect, position2, enable, color, shape, setShape }) => {
  const handleClick = () => {
    setSelect(select>0?-1:number);
    setShape(select>0?shape:'sphere')
  }
  return (
    <mesh>
        <Sphere args={args} position={select===number && enable=== 1?position2:position} rotation={rotation} onClick={handleClick} >
            <meshStandardMaterial attach="material" color={select===number?'grey':color}/>
        </Sphere>
    </mesh>
  )
}

export default SphereShape