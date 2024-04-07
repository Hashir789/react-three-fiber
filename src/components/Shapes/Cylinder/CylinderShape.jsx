import React from 'react';
import { Cylinder } from "@react-three/drei";

const CylinderShape = ({ args, position, rotation }) => {
    const handleClick = () => console.log('Clicked on Cylinder');
    return (
        <mesh>
            <Cylinder args={args} position={position} rotation={rotation} onClick={handleClick}>
                <meshStandardMaterial attach="material" color="orange" />
            </Cylinder>
        </mesh>
    );
};

export default CylinderShape;