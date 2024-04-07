import React from 'react'
import { Plane } from "@react-three/drei";

const Grid = ({ size, xyz }) => {
  return (
    <Plane
      args={[size, size, size, size]}
      rotation={[xyz===1? 1.5 * Math.PI : 0 * Math.PI, xyz===3?Math.PI / 2:0, 0]}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial attach="material" color={xyz===1?'#f9c74f':xyz===2?'pink':'#80ffdb'} wireframe />
    </Plane>
  )
}

export default Grid