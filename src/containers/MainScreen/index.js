import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import {
    Atom,
    Light,
    MainScreenWrapper,
    MainText,
    Stars,
} from '../../components'
import { Arrow } from '../../components/Icon'
import { ArrowBottom, ArrowLeft, ArrowRight } from './styled'
import Loader from '../../components/Loader'

function MainScreen() {
    return (
        <>
            <Loader />
            <MainScreenWrapper>
                <MainText />
                <Link to="/about">
                    <ArrowLeft>
                        <span>About</span>
                        <Arrow />
                    </ArrowLeft>
                </Link>
                <ArrowRight>
                    <span>Why</span>
                    <Arrow />
                </ArrowRight>
                <ArrowBottom>
                    Contact
                    <Arrow />
                </ArrowBottom>

                <Suspense fallback={null}>
                    <Canvas camera={{ position: [0, 0, 1] }}>
                        <Stars />
                        <Light />
                        <Atom />
                    </Canvas>
                </Suspense>
            </MainScreenWrapper>
        </>
    )
}

export default MainScreen
