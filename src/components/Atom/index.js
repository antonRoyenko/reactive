import { useRef } from 'react'
import { MathUtils } from 'three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useMediaQuery from '../../hooks/useMediaQuery'

function Atom() {
    const ref = useRef()
    const { nodes } = useGLTF('/atom2.glb')
    const matches = useMediaQuery('(max-width: 768px)')

    useFrame(({ clock, camera }) => {
        const t = clock.getElapsedTime()

        ref.current.rotation.set(
            0.1 + Math.cos(t / 4.5) / 2,
            Math.sin(t / 4) / 4,
            0.3 - (1 + Math.sin(t / 4)),
        )
        ref.current.position.x = Math.cos(t * 0.5)
        ref.current.position.y = Math.sin(t * 0.5)
        const s = MathUtils.lerp(ref.current.scale.x, 1, 0)
        ref.current.scale.set(s, s, s)
        // eslint-disable-next-line no-param-reassign
        camera.zoom = MathUtils.lerp(camera.zoom, 1, 0.3)
        camera.updateProjectionMatrix()
    })

    return (
        <group
            scale={matches ? 0.05 : 0.1}
            position={[0, 0, 0]}
            rotation={[-1.1, 0.55, -2]}
        >
            <group ref={ref}>
                <mesh
                    geometry={nodes.Circle008_1.geometry}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        color="#3853A3"
                        emissive="#000000"
                        flatShading
                    />
                </mesh>
                <mesh
                    geometry={nodes.Circle008_2.geometry}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#000000"
                        flatShading
                        transparent
                        opacity={0.1}
                    />
                </mesh>
                <mesh
                    geometry={nodes.Circle008_3.geometry}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        color="#707070"
                        emissive="#000000"
                        flatShading
                    />
                </mesh>
            </group>
        </group>
    )
}

export default Atom
