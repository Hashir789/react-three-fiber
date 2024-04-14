import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import "./CanvasContainer.css";
import Grid from "../Grid/Grid";
import { Plane, Raycaster, Vector2, Vector3 } from "three";
import Cube from "../Shapes/Cube/Cube";
import SphereShape from "../Shapes/Sphere/SphereShape";
import ConeShape from "../Shapes/Cone/ConeShape";
import CylinderShape from "../Shapes/Cylinder/CylinderShape";
import ImageComponent from "../Image/ImageComponent";

const Form = ({ controls }) => {
    const { shapes, setShapes, gridX, setGridX, gridY, setGridY, gridZ, setGridZ, option1, setOption1, option2, setOption2, option3, setOption3, option4, setOption4, planee, setPlanee, cordinatePoints, select, setSelect, setCordinatePoints, setEnable, color, setColor } = controls;
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        switch (name) {
            case 'gridX':
                setGridX(checked);
                break;
            case 'gridY':
                setGridY(checked);
                break;
            case 'gridZ':
                setGridZ(checked);
                break;
            default:
                break;
        }
    };
    let labels = [ 'X Scale', 'Y Scale', 'Z Scale', 'Radius', 'X Segments', 'Y Segments', 'Radius Base', 'Radius Top', 'Height', 'Segments', 'Radius', 'Height', 'Segments' ]
    return (
        <div className="controls" style={{ height: '600px', overflowY: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>{shapes.charAt(0).toUpperCase() + shapes.slice(1)}</h2><br/>
            <div className="controlGroup">
                <div className="control">
                    <label>{shapes==='cube'?labels[0]:shapes==='sphere'?labels[3]:shapes==='cylinder'?labels[6]:labels[10]}</label>
                    <input
                        value={option1}
                        onChange={(e)=>{ setOption1(e.target.value); 
                          if (select > 0) { 
                            let shape = cordinatePoints[select - 1].shape
                            let argument = cordinatePoints[select - 1].arguments
                            let number = cordinatePoints[select - 1].number
                            let colorr = cordinatePoints[select - 1].color
                            let cordinatePoint = cordinatePoints[select - 1].cordinatePoints
                            let obj = { cordinatePoints: cordinatePoint, shape: shape, arguments: [option1, argument[1], argument[2]], number: number, color: colorr }
                            setCordinatePoints([...cordinatePoints.slice(0, select - 1), obj, ...cordinatePoints.slice(select)]);
                         } }}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>{shapes==='cube'?labels[1]:shapes==='sphere'?labels[4]:shapes==='cylinder'?labels[7]:labels[11]}</label>
                    <input
                        value={option2}
                        onChange={(e)=>{ setOption2(e.target.value); 
                          if (select > 0) { 
                            let shape = cordinatePoints[select - 1].shape
                            let argument = cordinatePoints[select - 1].arguments
                            let number = cordinatePoints[select - 1].number
                            let colorr = cordinatePoints[select - 1].color
                            let cordinatePoint = cordinatePoints[select - 1].cordinatePoints
                            let obj = { cordinatePoints: cordinatePoint, shape: shape, arguments: [argument[0], option2, argument[2]], number: number, color: colorr }
                            setCordinatePoints([...cordinatePoints.slice(0, select - 1), obj, ...cordinatePoints.slice(select)]);
                         } }}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>{shapes==='cube'?labels[2]:shapes==='sphere'?labels[5]:shapes==='cylinder'?labels[8]:labels[12]}</label>
                    <input
                        value={option3}
                        onChange={(e)=>{ setOption3(e.target.value); 
                          if (select > 0) { 
                            let shape = cordinatePoints[select - 1].shape
                            let argument = cordinatePoints[select - 1].arguments
                            let number = cordinatePoints[select - 1].number
                            let colorr = cordinatePoints[select - 1].color
                            let cordinatePoint = cordinatePoints[select - 1].cordinatePoints
                            let obj = { cordinatePoints: cordinatePoint, shape: shape, arguments: [argument[0], argument[1], option3], number: number, color: colorr }
                            setCordinatePoints([...cordinatePoints.slice(0, select - 1), obj, ...cordinatePoints.slice(select)]);
                         } }}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                {option4 && <div className="control">
                    <label>{labels[9]}</label>
                    <input
                        value={option4}
                        onChange={(e)=>{ setOption4(e.target.value); 
                          if (select > 0) { 
                            let shape = cordinatePoints[select - 1].shape
                            let argument = cordinatePoints[select - 1].arguments
                            let number = cordinatePoints[select - 1].number
                            let colorr = cordinatePoints[select - 1].color
                            let cordinatePoint = cordinatePoints[select - 1].cordinatePoints
                            let obj = { cordinatePoints: cordinatePoint, shape: shape, arguments: [argument[0], argument[1], argument[2], option4], number: number, color: colorr }
                            setCordinatePoints([...cordinatePoints.slice(0, select - 1), obj, ...cordinatePoints.slice(select)]);
                         } }}
                        step={1 / 32}
                        type="number"
                    />
                </div>}
                <div className="control">
                  <label htmlFor="colorpicker" style={{ color: 'white' }}>Color Picker</label>
                  <input type="color" id="colorpicker" value={color} onChange={(e)=>{ 
                    setColor(e.target.value)  
                  if (select > 0) { 
                    let shape = cordinatePoints[select - 1].shape
                    let argument = cordinatePoints[select - 1].arguments
                    let number = cordinatePoints[select - 1].number
                    let colorr = color
                    let cordinatePoint = cordinatePoints[select - 1].cordinatePoints
                    let obj = { cordinatePoints: cordinatePoint, shape: shape, arguments: argument, number: number, color: colorr }
                    setCordinatePoints([...cordinatePoints.slice(0, select - 1), obj, ...cordinatePoints.slice(select)]);
                 } }}/>
                </div>
            </div>
            <hr/>
            <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Other Shapes</h2>
            <div className="controlGroup">
                <button className="control btn" onClick={() => { setShapes('cube'); setOption1(1); setOption2(1); setOption3(1); setOption4(null); }}>Cube</button>
                <button className="control btn" onClick={() => { setShapes('sphere'); setOption1(0.5); setOption2(32); setOption3(32); setOption4(null); }}>Sphere</button>
                <button className="control btn" onClick={() => { setShapes('cylinder'); setOption1(1); setOption2(1); setOption3(2); setOption4(32); }}>Cylinder</button>
                <button className="control btn" onClick={() => { setShapes('cone'); setOption1(0.5); setOption2(1); setOption3(32); setOption4(null); }}>Cone</button>
            </div>
            <hr/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10px' }}>
                <input type="checkbox" id="gridX" name="gridX" checked={gridX} onChange={handleCheckboxChange} />
                <label htmlFor="gridX" style={{ color: 'white', fontSize: '14px' }}>&nbsp;&nbsp;Grid X</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10px' }}>
                <input type="checkbox" id="gridY" name="gridY" checked={gridY} onChange={handleCheckboxChange} />
                <label htmlFor="gridY" style={{ color: 'white', fontSize: '14px' }}>&nbsp;&nbsp;Grid Y</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10px' }}>
                <input type="checkbox" id="gridZ" name="gridZ" checked={gridZ} onChange={handleCheckboxChange} />
                <label htmlFor="gridZ" style={{ color: 'white', fontSize: '14px' }}>&nbsp;&nbsp;Grid Z</label>
            </div>
            <hr/>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', marginBottom: '10px' }}>
                <div>
                    <input type="radio" id="X" name="X" value="X" checked={planee==='X'} onChange={(e) => setPlanee(e.target.value)} />
                    <label htmlFor="X" style={{ color: 'white', fontSize: '14px' }}>&nbsp;&nbsp;Plane X</label>
                </div>
                <div>
                    <input type="radio" id="Y" name="Y" value="Y" checked={planee==='Y'} onChange={(e) => setPlanee(e.target.value)} />
                    <label htmlFor="Y" style={{ color: 'white', fontSize: '14px' }}>&nbsp;&nbsp;Plane Y</label>
                </div>
                <div>
                    <input type="radio" id="Z" name="Z" value="Z" checked={planee==='Z'} onChange={(e) => setPlanee(e.target.value)} />
                    <label htmlFor="Z" style={{ color: 'white', fontSize: '14px' }}>&nbsp;&nbsp;Plane Z</label>
                </div>
            </div>
            <hr/>
            <div style={{ marginTop: '10px' }}>
            {cordinatePoints.length > 0 && cordinatePoints.map((cordinatePoint, index) => (<div key={index}>
              <div style={{ color: 'white', paddingTop: '5px', paddingBottom: '5px', background: select===cordinatePoint.number?'red':'inherit', cursor: 'pointer' }} key={index} onClick={()=>{ setSelect(select>0?-1:cordinatePoint.number); }}>
                <div>Shape # {cordinatePoint.number}: {cordinatePoint.shape}</div>
              </div>
                <button style={{ width: '100%', padding: '5px' }} onClick={()=>{ setEnable(1); }}>Move Shape # {cordinatePoint.number}: {cordinatePoint.shape}</button>
              </div>
            ))}
            </div>
        </div>
    );
};

const CanvasContainer = () => {
  const cameraRef = useRef();
  const orbitRef = useRef();
  const size = 10;
  const [cordinatePoints, setCordinatePoints] = useState([]);
  const mouse = new Vector2();
  const intersectionPoint = new Vector3();
  const planeNormal = new Vector3();
  const plane = new Plane();
  const raycaster = new Raycaster();
  const [shapes, setShapes] = useState('cube')
  const [gridX, setGridX] = useState(true)
  const [gridY, setGridY] = useState(true)
  const [gridZ, setGridZ] = useState(true)
  const [planee, setPlanee] = useState('X')
  const [option1, setOption1] = useState(1)
  const [option2, setOption2] = useState(1)
  const [option3, setOption3] = useState(1)
  const [option4, setOption4] = useState(null)
  const [no, setNo] = useState(1)
  const [select, setSelect] = useState(-2)
  const [xyz, setXYZ] = useState([0, 0, 0])
  const [enable, setEnable] = useState(0)
  const [color, setColor] = useState('#ff0000')
  useEffect(() => {
    setEnable(0)
  }, [select]);
  useEffect(() => {
    document.addEventListener("mousemove", handlePointerMissed2);
    return () => {
      document.removeEventListener("mousemove", handlePointerMissed2);
    };
  }, []);
  const handlePointerMissed = (event) => {
    if (select <= 0) {
      const canvas = event.target;
      mouse.x = (event.clientX / canvas.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1;
      planeNormal.copy(cameraRef.current.position).normalize();
      plane.setFromNormalAndCoplanarPoint(planeNormal, new Vector3(0, 0, 0));
      raycaster.setFromCamera(mouse, cameraRef.current);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      const shape = shapes
      let argument = [option1, option2, option3]
      let y = 0
      if (option4!==null) { argument.push(option4) }  
      if (shapes === 'cube' || shapes === 'cone') {
        y = option2 / 2
      } else if (shapes === 'sphere') {
        y = option1
      } else {
        y = option3 / 2
      }
      const number = no;
      const colorr = color;
      setXYZ([intersectionPoint.x, y, intersectionPoint.z]);
      setCordinatePoints([
        ...cordinatePoints,
        {
          cordinatePoints: [
            intersectionPoint.x,
            y,
            intersectionPoint.z,
          ],
          shape: shape,
          arguments: argument,
          number: number,
          color: colorr
        },
      ]); 
      setNo(no + 1);
      setSelect(select>0?-1:select)
    } else {
      let shape = cordinatePoints[select - 1].shape
      let argument = cordinatePoints[select - 1].arguments
      let number = cordinatePoints[select - 1].number
      let colorr = cordinatePoints[select - 1].color
      let obj = { cordinatePoints: xyz, shape: shape, arguments: argument, number: number, color: colorr }
      if (enable === 1) {
      setCordinatePoints([...cordinatePoints.slice(0, select - 1), obj, ...cordinatePoints.slice(select)]);
      setSelect(select>0?-1:select)
      }
    }
  };
  const handlePointerMissed2 = (event) => {
      const canvas = event.target;
      mouse.x = (event.clientX / canvas.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1;
      planeNormal.copy(cameraRef.current.position).normalize();
      plane.setFromNormalAndCoplanarPoint(planeNormal, new Vector3(0, 0, 0));
      raycaster.setFromCamera(mouse, cameraRef.current);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      let argument = [option1, option2, option3]
      let y = 0
      if (option4!==null) { argument.push(option4) }  
      if (shapes === 'cube' || shapes === 'cone') {
        y = option2 / 2
      } else if (shapes === 'sphere') {
        y = option1
      } else {
        y = option3 / 2
      }
      setXYZ([intersectionPoint.x, y, intersectionPoint.z]);  
  };
  return (
    <div className="CanvasContainer">
      <Form controls={{ shapes, setShapes, gridX, setGridX, gridY, setGridY, gridZ, setGridZ, option1, setOption1, option2, setOption2, option3, setOption3, option4, setOption4, planee, setPlanee, cordinatePoints, select, setSelect, setCordinatePoints, setEnable, color, setColor }}/>
      <Canvas className="Canvas" onPointerMissed={handlePointerMissed}>
        <Suspense
          fallback={
            <Text color="white" anchorX="center" anchorY="middle">
              Loading...
            </Text>
          }
        >
          <ambientLight intensity={1} />
          <directionalLight intensity={1} position={[10, 20, 10]} />
          <OrbitControls ref={orbitRef} />          
          <ImageComponent controls={{ planee, size }}/>
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[0, 15, 0]}
          />
          <group>
            {gridX && <Text
              color="#616161"
              anchorX="center"
              anchorY="middle"
              position={[size / 2 + 1, 0, 0]}
            >
              X+
            </Text>}
            {gridX && <Text
              color="#616161"
              anchorX="center"
              anchorY="middle"
              position={[-size / 2 - 1, 0, 0]}
            >
              X-
            </Text>}
            {gridY && <Text
              color="#616161"
              anchorX="center"
              anchorY="middle"
              position={[0, size / 2 + 1, 0]}
            >
              Y+
            </Text>}
            {gridY && <Text
              color="#616161"
              anchorX="center"
              anchorY="middle"
              position={[0, -size / 2 - 1, 0]}
            >
              Y-
            </Text>}
            {gridZ && <Text
              color="#616161"
              anchorX="center"
              anchorY="middle"
              position={[0, 0, size / 2 + 1]}
            >
              Z+
            </Text>}
            {gridZ && <Text
              color="#616161"
              anchorX="center"
              anchorY="middle"
              position={[0, 0, -size / 2 - 1]}
            >
              Z-
            </Text>}
            {gridX && <Grid size={size} xyz={1} />}
            {gridY && <Grid size={size} xyz={2} />}
            {gridZ && <Grid size={size} xyz={3} />}
          </group>
          {cordinatePoints.length > 0 &&
            cordinatePoints.map((cordinatePoint, index) => (
              <React.Fragment key={index}>
                {cordinatePoint.shape === "sphere" && (
                  <SphereShape
                    number={cordinatePoint.number}
                    rotation={[0, 0, 0]}
                    position={cordinatePoint.cordinatePoints}
                    args={cordinatePoint.arguments}
                    select={select}
                    setSelect={setSelect}
                    position2={xyz}
                    enable={enable}
                    color={cordinatePoint.color}
                  />
                )}
                {cordinatePoint.shape === "cube" && (
                  <Cube
                    number={cordinatePoint.number}
                    rotation={[0, 0, 0]}
                    position={cordinatePoint.cordinatePoints}
                    args={cordinatePoint.arguments}
                    select={select}
                    setSelect={setSelect}
                    position2={xyz}
                    enable={enable}
                    color={cordinatePoint.color}
                    shape={shapes}
                    setShape={setShapes}
                  />
                )}
                {cordinatePoint.shape === "cone" && (
                  <ConeShape
                    number={cordinatePoint.number}
                    rotation={[0, 0, 0]}
                    position={cordinatePoint.cordinatePoints}
                    args={cordinatePoint.arguments}
                    select={select}
                    setSelect={setSelect}
                    position2={xyz}
                    enable={enable}
                    color={cordinatePoint.color}
                    shape={shapes}
                    setShape={setShapes}
                  />
                )}
                {cordinatePoint.shape === "cylinder" && (
                  <CylinderShape
                    number={cordinatePoint.number}
                    rotation={[0, 0, 0]}
                    position={cordinatePoint.cordinatePoints}
                    args={cordinatePoint.arguments}
                    select={select}
                    setSelect={setSelect}
                    position2={xyz}
                    enable={enable}
                    color={cordinatePoint.color}
                    shape={shapes}
                    setShape={setShapes}
                  />
                )}
              </React.Fragment>
            ))}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
