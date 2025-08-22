'use client';

import React, { useEffect, useRef, useState, Suspense, JSX } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Preload } from '@react-three/drei';
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const StarBackground: React.FC<JSX.IntrinsicElements['points']> = (props) => {
  const ref = useRef<THREE.Points>(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} {...props}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[sphere, sphere.length / 3]}
            count={sphere.length / 3}
            array={sphere}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const startMusicOnFirstClick = () => {
      if (audioRef.current && !hasPlayed) {
        audioRef.current.play().catch(() => {
          /* autoplay was blocked */
        });
        setHasPlayed(true);
      }
      window.removeEventListener('click', startMusicOnFirstClick);
    };

    window.addEventListener('click', startMusicOnFirstClick);
    return () => window.removeEventListener('click', startMusicOnFirstClick);
  }, [hasPlayed]);

  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* Hidden audio element; will loop after first user click */}
      <audio ref={audioRef} loop src="/backgroundMusic.m4a" />
    </div>
  );
};

export default StarsCanvas;
