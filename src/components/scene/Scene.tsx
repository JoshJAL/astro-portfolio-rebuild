import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trees } from '../trees/Trees';
import { Color } from 'three';
import { Log } from '../trees/Log';

export const Scene = () => {
  const refTrees = useRef(null);
  const otherTreeRef = useRef(null);
  const logRef = useRef(null);
  const otherLogRef = useRef(null);

  useFrame(() => {
    const { current: group } = refTrees;
    if (group) {
      // @ts-ignore
      group.rotation.y += 0.01;
    }
  })
  useFrame(() => {
    const { current: group } = otherTreeRef;
    if (group) {
      // @ts-ignore
      group.rotation.y += 0.01;
    }
  })
  useFrame(() => {
    const { current: group } = logRef;
    if (group) {
      // @ts-ignore
      group.rotation.y += 0.01;
    }
  })
  useFrame(() => {
    const { current: group } = otherLogRef;
    if (group) {
      // @ts-ignore
      group.rotation.y += 0.01;
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color={'white'} position={[15, 15, 15]} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <Trees position={[0, 2, -4]} ref={refTrees} colors={[new Color('#427062').convertLinearToSRGB(), new Color('#33594E').convertLinearToSRGB(), new Color('#234549').convertLinearToSRGB(), new Color('#1E363F').convertLinearToSRGB()]} />
      <Log position={[0, 0, -4]} ref={logRef} colors={[new Color('#693c01').convertLinearToSRGB(), new Color('#7a4014').convertLinearToSRGB(), new Color('#8c5002').convertLinearToSRGB(), new Color('#3d200a').convertLinearToSRGB()]} />
      <Trees position={[0, 2, 4]} ref={otherTreeRef} colors={[new Color('#4a8d7e').convertLinearToSRGB(), new Color('#377f6a').convertLinearToSRGB(), new Color('#184f52').convertLinearToSRGB(), new Color('#143b36').convertLinearToSRGB()]} />
      <Log position={[0, 0, 4]} ref={otherLogRef} colors={[new Color('#693c01').convertLinearToSRGB(), new Color('#7a4014').convertLinearToSRGB(), new Color('#8c5002').convertLinearToSRGB(), new Color('#3d200a').convertLinearToSRGB()]} />
    </>
  );
};
