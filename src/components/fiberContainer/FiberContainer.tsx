import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from '../scene/Scene';
import { Ground } from '../ground/Ground';
export function FiberContainer() {
  return (
    <Canvas
      className='mt-4 cursor-grab active:cursor-grabbing'
      camera={{ position: [14.4666, 2.0635, 5.556165], fov: 40 }}
      shadows
    >
      <Scene />
      <Ground />
      <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
  );
}
