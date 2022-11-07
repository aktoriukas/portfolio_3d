import type { FC } from "react"
import { OrthographicCamera } from "@react-three/drei"

interface CameraProps {}

const Camera: FC<CameraProps> = ({}) => {
  return (
    <OrthographicCamera
      name="Default Camera"
      makeDefault={true}
      far={50000}
      near={-50000}
      position={[66.92, -12.56, 1000]}
      rotation={[0, 0, 0]}
      scale={1}
      key={undefined}
      attach={undefined}
      args={undefined}
      onUpdate={undefined}
      view={undefined}
      quaternion={undefined}
      up={undefined}
      matrix={undefined}
      layers={undefined}
      dispose={undefined}
      onClick={undefined}
      onContextMenu={undefined}
      onDoubleClick={undefined}
      onPointerUp={undefined}
      onPointerDown={undefined}
      onPointerOver={undefined}
      onPointerOut={undefined}
      onPointerEnter={undefined}
      onPointerLeave={undefined}
      onPointerMove={undefined}
      onPointerMissed={undefined}
      onPointerCancel={undefined}
      onWheel={undefined}
      castShadow={undefined}
      receiveShadow={undefined}
      visible={undefined}
      type={undefined}
      id={undefined}
      uuid={undefined}
      parent={undefined}
      modelViewMatrix={undefined}
      normalMatrix={undefined}
      matrixWorld={undefined}
      matrixAutoUpdate={undefined}
      matrixWorldNeedsUpdate={undefined}
      frustumCulled={undefined}
      renderOrder={undefined}
      animations={undefined}
      userData={undefined}
      customDepthMaterial={undefined}
      customDistanceMaterial={undefined}
      isObject3D={undefined}
      onBeforeRender={undefined}
      onAfterRender={undefined}
      applyMatrix4={undefined}
      applyQuaternion={undefined}
      setRotationFromAxisAngle={undefined}
      setRotationFromEuler={undefined}
      setRotationFromMatrix={undefined}
      setRotationFromQuaternion={undefined}
      rotateOnAxis={undefined}
      rotateOnWorldAxis={undefined}
      rotateX={undefined}
      rotateY={undefined}
      rotateZ={undefined}
      translateOnAxis={undefined}
      translateX={undefined}
      translateY={undefined}
      translateZ={undefined}
      localToWorld={undefined}
      worldToLocal={undefined}
      lookAt={undefined}
      add={undefined}
      remove={undefined}
      removeFromParent={undefined}
      clear={undefined}
      getObjectById={undefined}
      getObjectByName={undefined}
      getObjectByProperty={undefined}
      getWorldPosition={undefined}
      getWorldQuaternion={undefined}
      getWorldScale={undefined}
      getWorldDirection={undefined}
      raycast={undefined}
      traverse={undefined}
      traverseVisible={undefined}
      traverseAncestors={undefined}
      updateMatrix={undefined}
      updateMatrixWorld={undefined}
      updateWorldMatrix={undefined}
      toJSON={undefined}
      clone={undefined}
      copy={undefined}
      addEventListener={undefined}
      hasEventListener={undefined}
      removeEventListener={undefined}
      dispatchEvent={undefined}
      left={undefined}
      right={undefined}
      bottom={undefined}
      top={undefined}
      zoom={undefined}
      matrixWorldInverse={undefined}
      projectionMatrix={undefined}
      projectionMatrixInverse={undefined}
      isCamera={undefined}
      setViewOffset={undefined}
      clearViewOffset={undefined}
      updateProjectionMatrix={undefined}
      isOrthographicCamera={undefined}
    >
      <directionalLight
        name="Default Directional Light"
        intensity={0.6}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        position={[850000, 1300000, 1000000]}
      />
    </OrthographicCamera>
  )
}
export default Camera
