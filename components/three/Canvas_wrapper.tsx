import { FC, useEffect, useState } from "react"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Pc_wrapper from "./Pc_wrapper"
import { OrbitControls } from "@react-three/drei"

interface CanvasProps {
  activePage: number
}

const Canvas_wrapper: FC<CanvasProps> = ({ activePage }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    setTimeout(() => setAnimate(false), 1000)
  }, [activePage])

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Canvas shadows flat linear>
        <Pc_wrapper animate={animate} activeProject={activePage} />
        {/* <OrbitControls /> */}
      </Canvas>
    </Suspense>
  )
}
export default Canvas_wrapper
