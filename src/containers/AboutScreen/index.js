import { Canvas } from '@react-three/fiber'
import { Link } from 'react-router-dom'
import { Light, MainScreenWrapper, Stars } from '../../components'
import { ArrowLeft } from '../MainScreen/styled'
import { Arrow } from '../../components/Icon'
import Loader from '../../components/Loader'
import Logo from '../../components/Logo'
import { Card, Img, Text, Icons, ArrowRight } from './styled'

function AboutScreen() {
    return (
        <>
            <Loader />
            <MainScreenWrapper>
                <Logo />
                <Link to="/">
                    <ArrowRight>
                        <span>Main</span>
                        <Arrow />
                    </ArrowRight>
                </Link>
                <Link to="/why">
                    <ArrowLeft>
                        <span>Why me?</span>
                        <Arrow />
                    </ArrowLeft>
                </Link>
                <Card>
                    <Img src="/photo.png" alt="" />
                    <div>
                        <Text>
                            Hello, my name is Anton, and I&apos;m a crypto
                            enthusiast professional and front-end engineer. I
                            have vast experience with programming and web
                            development. I love Web3, NFT on Solana and a lot of
                            technologies impregnated with ideas of
                            decentralization. Basically, I run secure validator
                            nodes in Cosmos, and also in Polkadot and Ethereum
                            networks too. I enjoy helping people and
                            contributing to various projects.
                        </Text>
                    </div>
                    <Icons>
                        <a
                            href="https://github.com/antonRoyenko"
                            target="_blank"
                        >
                            <img src="/github.svg" alt="" />
                        </a>
                        <a href="https://t.me/mrRedington" target="_blank">
                            <img src="/telegram.svg" alt="" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anton-royenko-375030160/"
                            target="_blank"
                        >
                            <img src="/linkedin.svg" alt="" />
                        </a>
                        <a
                            href="https://twitter.com/RoenkoAnton"
                            target="_blank"
                        >
                            <img src="/twitter.svg" alt="" />
                        </a>
                    </Icons>
                </Card>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                    <Light />
                </Canvas>
            </MainScreenWrapper>
        </>
    )
}

export default AboutScreen
