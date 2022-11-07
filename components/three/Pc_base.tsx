import type { FC } from "react"

interface Pc_baseProps {
  materials: Record<string, any>
  nodes: Record<string, any>
}

const Pc_base: FC<Pc_baseProps> = ({ nodes, materials }) => {
  return (
    <group name="base" position={[-56.34, -457.52, -546.11]} rotation={[0, 0, 0]} scale={1}>
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials.Sound}
        castShadow
        receiveShadow
        position={[56.34, 17.75, 516.41]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={2.07}
      />
      <group name="base1" position={[5.42, -7.13, -0.41]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
        <mesh
          name="base2"
          geometry={nodes.base2.geometry}
          material={materials.metalic}
          castShadow
          receiveShadow
          position={[10.98, 13.35, 134.94]}
          rotation={[0, 0, 0]}
        />
      </group>
      <group name="sound" position={[1.28, 32.07, 180.03]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
        <mesh
          name="Rectangle 2"
          geometry={nodes["Rectangle 2"].geometry}
          material={materials.Sound}
          castShadow
          receiveShadow
          position={[585.27, 0.3, -16.44]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={1}
        />
        <mesh
          name="Rectangle2"
          geometry={nodes.Rectangle2.geometry}
          material={materials.Sound}
          castShadow
          receiveShadow
          position={[-697.58, 0.3, -16.44]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={1}
        />
      </group>
      <group name="feet" position={[51.91, -18.23, -11.95]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
        <mesh
          name="Subdiv 3"
          geometry={nodes["Subdiv 3"].geometry}
          material={materials.metalic}
          castShadow
          receiveShadow
          position={[466.78, 3.42, -412.46]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1.09, 1.15, 1.13]}
        />
        <mesh
          name="Subdiv 31"
          geometry={nodes["Subdiv 31"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[466.78, -2.64, -412.46]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1.05, 1.03]}
        />
        <mesh
          name="Subdiv 32"
          geometry={nodes["Subdiv 32"].geometry}
          material={materials.metalic}
          castShadow
          receiveShadow
          position={[-466.78, 3.42, -412.46]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1.09, 1.15, 1.13]}
        />
        <mesh
          name="Subdiv 33"
          geometry={nodes["Subdiv 33"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[-464, -3.76, -412.39]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1.05, 1.03]}
        />
        <mesh
          name="Subdiv 2"
          geometry={nodes["Subdiv 2"].geometry}
          material={materials.metalic}
          castShadow
          receiveShadow
          position={[466.78, 3.42, 326.82]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1.09, 1.15, 1.13]}
        />
        <mesh
          name="Subdiv 21"
          geometry={nodes["Subdiv 21"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[466.78, -2.64, 326.82]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1.05, 1.03]}
        />
        <mesh
          name="Subdiv"
          geometry={nodes.Subdiv.geometry}
          material={materials.metalic}
          castShadow
          receiveShadow
          position={[-466.78, 3.42, 326.82]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1.09, 1.15, 1.13]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[-466.78, -2.64, 326.82]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1.05, 1.03]}
        />
      </group>
      <group name="keyboard" position={[57.79, 37.67, 198.94]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
        <mesh
          name="Torus"
          geometry={nodes.Torus.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[542.48, -3.08, -197.92]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.17}
        />
        <mesh
          name="keybord_lign"
          geometry={nodes.keybord_lign.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[306.67, -9.04, 198.69]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="keybord_lign1"
          geometry={nodes.keybord_lign1.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-550.66, -9.04, 198.69]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="keybord_lign2"
          geometry={nodes.keybord_lign2.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-364.4, -9.04, 120.03]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="keybord_lign3"
          geometry={nodes.keybord_lign3.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-405.8, -9.04, 40.69]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="keybord_lign4"
          geometry={nodes.keybord_lign4.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-429.33, -9.04, -40.64]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 6"
          geometry={nodes["Rectangle 6"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-39.25, -9.04, 198.26]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 7"
          geometry={nodes["Rectangle 7"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[214.76, -9.04, 198.26]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 5"
          geometry={nodes["Rectangle 5"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-293.93, -9.04, 198.26]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 14"
          geometry={nodes["Rectangle 14"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[466.16, -8.97, 180.77]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 2.67]}
        />
        <mesh
          name="Rectangle 13"
          geometry={nodes["Rectangle 13"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[466.16, -8.97, 215.5]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 2.67]}
        />
        <mesh
          name="Rectangle 12"
          geometry={nodes["Rectangle 12"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[548.77, -8.97, 215.5]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 2.67]}
        />
        <mesh
          name="Rectangle 11"
          geometry={nodes["Rectangle 11"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[386.57, -8.97, 215.5]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 2.67]}
        />
        <mesh
          name="Rectangle 8"
          geometry={nodes["Rectangle 8"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[494.68, -9.04, 120.42]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 4"
          geometry={nodes["Rectangle 4"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-499.8, -9.04, 120.42]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 9"
          geometry={nodes["Rectangle 9"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[513.92, -9.04, 40.9]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 3"
          geometry={nodes["Rectangle 3"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-519.3, -9.04, 40.9]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 10"
          geometry={nodes["Rectangle 10"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[523.26, -9.04, -119.43]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle 21"
          geometry={nodes["Rectangle 21"].geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-530.8, -9.04, -40.8]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Rectangle3"
          geometry={nodes.Rectangle3.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-529.3, -9.04, -196.64]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="keybord_lign5"
          geometry={nodes.keybord_lign5.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-429.33, -9.04, -196.64]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="keybord_lign6"
          geometry={nodes.keybord_lign6.geometry}
          material={materials.keyboard_2}
          castShadow
          receiveShadow
          position={[-549.33, -9.04, -118.99]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="keyboard1"
          geometry={nodes.keyboard1.geometry}
          material={materials.keyboard}
          castShadow
          receiveShadow
          position={[0, -7.7, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 2.16]}
        />
      </group>
      <group name="trackpad" position={[-4.13, 34.51, -285]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
        <mesh
          name="trackpad_top"
          geometry={nodes.trackpad_top.geometry}
          material={materials.trackpad}
          castShadow
          receiveShadow
          position={[-61.19, -1.67, -41.26]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.83, 0.83, 5]}
        />
        <mesh
          name="trackpad_border"
          geometry={nodes.trackpad_border.geometry}
          material={materials.keyboard}
          castShadow
          receiveShadow
          position={[-61.19, -2.48, -41.26]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.83, 0.83, 5]}
        />
      </group>
      <group name="button_right" position={[-633.05, 12.57, 270.94]} rotation={[-Math.PI, 0, -Math.PI]} scale={1}>
        <mesh
          name="Rectangle 91"
          geometry={nodes["Rectangle 91"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[-2.05, -20.27, 425.43]}
          rotation={[Math.PI / 2, 1.28, -Math.PI / 2]}
          scale={1}
        />
        <mesh
          name="Rectangle 101"
          geometry={nodes["Rectangle 101"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0, 0, -105.07]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 92"
          geometry={nodes["Rectangle 92"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0, 2.5, -26.07]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 81"
          geometry={nodes["Rectangle 81"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0, 2.94, 79.57]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <group name="button_left" position={[745.73, 14.04, 293.61]}>
        <mesh
          name="Rectangle 82"
          geometry={nodes["Rectangle 82"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[-1.38, -18.91, -448.11]}
          rotation={[Math.PI / 2, 1.23, -Math.PI / 2]}
          scale={1}
        />
        <mesh
          name="Rectangle 31"
          geometry={nodes["Rectangle 31"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0.77, 1.08, 84]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Ellipse"
          geometry={nodes.Ellipse.geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0.48, -0.08, -113.5]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 61"
          geometry={nodes["Rectangle 61"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0.48, 0.57, -58.94]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 51"
          geometry={nodes["Rectangle 51"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0.48, 0.57, 5.16]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 41"
          geometry={nodes["Rectangle 41"].geometry}
          material={materials["metalic _2"]}
          castShadow
          receiveShadow
          position={[0.48, 1.08, 84]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
    </group>
  )
}
export default Pc_base
