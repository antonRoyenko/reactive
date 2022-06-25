import { Canvas } from '@react-three/fiber'
import { Link } from 'react-router-dom'
import { Light, MainScreenWrapper, Stars } from '../../components'
import { ArrowRight } from '../MainScreen/styled'
import { Arrow } from '../../components/Icon'
import Loader from '../../components/Loader'

function AboutScreen() {
    return (
        <>
            <Loader />
            <MainScreenWrapper>
                <Link to="/">
                    <ArrowRight>
                        <span>Main</span>
                        <Arrow />
                    </ArrowRight>
                </Link>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                    <Light />
                </Canvas>
            </MainScreenWrapper>
        </>
    )
}

export default AboutScreen
