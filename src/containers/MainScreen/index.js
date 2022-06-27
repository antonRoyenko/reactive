import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Atom, Light, MainText, Stars, ScreenWrapper } from '../../components'

function MainScreen() {
    return (
        <ScreenWrapper
            linkLeft="/about"
            linkRight="/why"
            arrowLeftText="About me"
            arrowRightText="Why me?"
        >
            <MainText />
            <Suspense fallback={null}>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                    <Light />
                    <Atom />
                </Canvas>
            </Suspense>
        </ScreenWrapper>
    )
}

export default MainScreen
