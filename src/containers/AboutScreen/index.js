import { Canvas } from '@react-three/fiber'
import { Link } from 'react-router-dom'
import { Light, MainScreenWrapper, Stars } from '../../components'
import { ArrowRight } from '../MainScreen/styled'
import { Arrow } from '../../components/Icon'
import Loader from '../../components/Loader'
import { Card, Img, Text, Icons } from './styled'

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
                <Card>
                    <Img src="/photo.png" alt="" />
                    <div>
                        <Text>
                            Hello, my name Anton, I&apos;m crypto enthusiast and
                            front-end engineer with big experience of
                            professional expertise in web development. Love
                            Web3, NFT on Solana and a lot of technologies
                            impregnated with ideas of decentralization.
                            Basically run secure validator nodes in Cosmos but
                            also in Polkadot and Etherium networks, as well like
                            contribute, help people and projects
                        </Text>
                    </div>
                    <Icons>
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
