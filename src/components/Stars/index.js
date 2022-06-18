import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PointMaterial, Points } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.5 }),
    )
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20
        ref.current.rotation.y -= delta / 100
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.005}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export default Stars
