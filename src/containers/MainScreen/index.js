import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import {
    Atom,
    Light,
    MainScreenWrapper,
    MainText,
    Stars,
} from '../../components'
import { Arrow } from '../../components/Icon'
import { ArrowBottom, ArrowLeft, ArrowRight } from './styled'

function MainScreen() {
    return (
        <div>
            <MainScreenWrapper>
                <MainText />
                <ArrowLeft>
                    <span>About</span>
                    <Arrow />
                </ArrowLeft>
                <ArrowRight>
                    <span>Why</span>
                    <Arrow />
                </ArrowRight>
                <ArrowBottom>
                    Contact
                    <Arrow />
                </ArrowBottom>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                    <Light />

                    <Suspense fallback={null}>
                        <Atom />
                    </Suspense>
                </Canvas>
            </MainScreenWrapper>
        </div>
    )
}

export default MainScreen
