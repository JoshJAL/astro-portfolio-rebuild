import { forwardRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
import { GhibliShader } from '../../functions/GhibliShader';

export const Log = forwardRef((props: any, ref) => {
  const { nodes } = useGLTF('/logs.glb') as any;

  const uniforms = useMemo(() => {
    return {
      colorMap: {
        value: props.colors
      },
      brightnessThresholds: {
        value: [0.9, 0.45, 0.001]
      },
      lightPosition: {
        value: new Vector3(15, 15, 15)
      }
    };
  }, [props.colors]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Log5.geometry} position={[0.33, -0.05, -0.68]}>
        <shaderMaterial attach={'material'} {...GhibliShader} uniforms={uniforms} />
      </mesh>
    </group>
  );
});

useGLTF.preload('/logs.glb');
