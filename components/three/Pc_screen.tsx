import { useFrame, useLoader } from "@react-three/fiber"
import { FC, useEffect, useRef, useState } from "react"
import { Texture, TextureLoader } from "three"
import img_blend from "../../img/blend.jpg"

import { projects } from "../../data/projects"

interface Pc_screenProps {
  materials: Record<string, any>
  nodes: Record<string, any>
  animate: boolean
  activeProject: number
}

const Pc_screen: FC<Pc_screenProps> = ({ nodes, materials, animate, activeProject }) => {
  const texture = useLoader(TextureLoader, projects[activeProject].image)
  const [animateState, setAnimateState] = useState(false)
  const [open, setOpen] = useState(true)
  const screenGroup = useRef(null as any)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (animate) setAnimateState(true)
  }, [animate])

  useFrame(() => {
    if (screenGroup.current && animateState) {
      if (open) {
        screenGroup.current.rotation.x -= 0.017
        setOpacity(0)
        if (screenGroup.current.rotation.x <= -1.5) setOpen(false)
      }
      if (!open) {
        screenGroup.current.rotation.x += 0.015
        if (screenGroup.current.rotation.x >= 0.1) setOpacity(1)
        if (screenGroup.current.rotation.x >= 0.6) {
          setAnimateState(false)
          setOpen(true)
        }
      }
    }
  })

  return (
    <group ref={screenGroup} name="screen" position={[-1.27, -436.61, -17.86]} rotation={[0.6, 0, 0]} scale={1}>
      <group name="logo_apple" position={[-6.96, 478.11, 16.32]} rotation={[0, 0, 0]} scale={[1.96, 1.96, 1089627.53]}>
        <mesh
          name="logo_apple1"
          geometry={nodes.logo_apple1.geometry}
          material={materials.logo_apple}
          castShadow
          receiveShadow
          position={[-22.72, 24.79, 0]}
          rotation={[0, 0, 0]}
          scale={[0.09, 0.09, 0]}
        />
        <mesh
          name="logo_apple2"
          geometry={nodes.logo_apple2.geometry}
          material={materials.logo_apple}
          castShadow
          receiveShadow
          position={[0.14, 47.16, 0]}
          rotation={[0, 0, 0]}
          scale={[0.09, 0.09, 0]}
        ></mesh>
      </group>
      <mesh
        name="connector"
        geometry={nodes.connector.geometry}
        material={materials.metalic}
        castShadow
        receiveShadow
        position={[1.27, -20.52, -5.61]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={2.07}
      />
      <mesh
        name="screen1"
        geometry={nodes.screen1.geometry}
        // material={materials.screen}
        castShadow
        receiveShadow
        position={[669.2, 44.16, 0.66]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.9}
      >
        <meshStandardMaterial map={texture} attach="material" transparent={true} opacity={opacity} />
      </mesh>
      <mesh
        name="green_light"
        geometry={nodes.green_light.geometry}
        material={materials["green_light Material"]}
        castShadow
        receiveShadow
        position={[-25.41, 906.02, 0.61]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.82, 0.81, 0.92]}
      />
      <mesh
        name="black_border_notch_screen"
        geometry={nodes.black_border_notch_screen.geometry}
        material={materials["black_border_notch_screen Material"]}
        castShadow
        receiveShadow
        position={[691.33, 915.76, 0.97]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[0.9, 0.9, 1]}
      />
      <mesh
        name="grey_border_creen"
        geometry={nodes.grey_border_creen.geometry}
        material={materials["grey_border_creen Material"]}
        castShadow
        receiveShadow
        position={[0.45, 448.36, 9.16]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.9, 0.9, 1]}
      />
      <mesh
        name="Rectangle1"
        geometry={nodes.Rectangle1.geometry}
        material={materials.metalic}
        castShadow
        receiveShadow
        position={[0, 448.36, 15.07]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.9, 0.9, 1]}
      />
      <mesh
        name="metalic_screen"
        geometry={nodes.metalic_screen.geometry}
        material={materials.metalic}
        castShadow
        receiveShadow
        position={[0, 448.36, 10.17]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.9, 0.9, 1]}
      />
      <mesh
        name="camera"
        geometry={nodes.camera.geometry}
        material={materials["camera Material"]}
        castShadow
        receiveShadow
        position={[-3.46, 906.02, 0.61]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.82, 0.81, 0.92]}
      />
      <mesh
        name="border_black_camera"
        geometry={nodes.border_black_camera.geometry}
        material={materials["connector&screen"]}
        castShadow
        receiveShadow
        position={[-3.46, 906.02, 0.84]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.82, 0.81, 0.92]}
      />
    </group>
  )
}
export default Pc_screen
