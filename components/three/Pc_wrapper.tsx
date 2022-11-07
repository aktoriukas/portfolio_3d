/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline"
import { OrthographicCamera } from "@react-three/drei"
import { FC, useEffect, useRef, useState } from "react"
import Pc_screen from "./Pc_screen"
import Pc_base from "./Pc_base"
import Camera from "./Camera"
import { useFrame } from "@react-three/fiber"
import useGetScreenSize from "../hooks/useGetScreenSize"

interface Pc_wrapperProps {
  animate: boolean
  activeProject: number
}

const Pc_wrapper: FC<Pc_wrapperProps> = ({ animate, activeProject }) => {
  const { nodes, materials } = useSpline("https://prod.spline.design/KrdyKvNGet7Y4-ox/scene.splinecode")
  const pcGroup = useRef(null as any)
  const tiltRadian = 2 * Math.PI * (330 / 360)
  const screenSize = useGetScreenSize()
  const [animateState, setAnimateState] = useState(false)

  useEffect(() => {
    if (animate) setAnimateState(true)
  }, [animate])

  useFrame((state) => {
    // if (pcGroup.current && animateState) {
    //   pcGroup.current.rotation.y += 0.03
    //   if (Math.floor(getDegFromRadian(pcGroup.current.rotation.y) % 360) <= 330) setAnimateState(false)
    // }
    const t = state.clock.getElapsedTime()
    // hover effect
    pcGroup.current.rotation.z = Math.sin(t) * 0.07 + 3.19
    pcGroup.current.rotation.x = Math.sin(t) * 0.03 - 2.81
  })

  const getScale = () => {
    const { width, height } = screenSize
    if (width > 500) return 0.39
    return 0.18
  }

  const macbookScale = getScale()

  const getDegFromRadian = (radian: number) => radian * (180 / Math.PI)
  const getRadianFromDeg = (deg: number) => deg * (Math.PI / 180)

  return (
    <>
      {/* <color attach="background" args={["#7a6c89"]} /> */}
      <group dispose={null}>
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials["Rectangle Material"]}
          castShadow
          receiveShadow
          position={[0, -359.01, 20.52]}
          rotation={[-1.49, 0, 0]}
          scale={1}
        />
        <group
          name="Macbook Pro M1 Max 14 Inch"
          position={[38.58, 162.72, -212.29]}
          rotation={[-2.81, tiltRadian, 3.19]}
          scale={macbookScale}
          ref={pcGroup}
        >
          <pointLight
            name="Point Light 3"
            intensity={1.9}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2500}
            color="#d590fe"
            position={[-260.19, 737.2, 1655.59]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.07}
          />
          <pointLight
            name="Point Light 4"
            intensity={0.2}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2500}
            color="#ffffff"
            position={[-285.4, -58.2, -10.11]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.07}
          />
          <pointLight
            name="Point Light"
            intensity={1}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2500}
            color="#ffffff"
            position={[0, -58.2, -10.11]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.07}
          />
          <Pc_screen animate={animate} nodes={nodes} materials={materials} activeProject={activeProject} />
          <Pc_base nodes={nodes} materials={materials} />
        </group>
        <Camera />
      </group>
    </>
  )
}

export default Pc_wrapper