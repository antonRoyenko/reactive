import { Canvas } from '@react-three/fiber'
import { Link } from 'react-router-dom'
import { Light, MainScreenWrapper, Stars } from '../../components'
import { ArrowRight } from '../MainScreen/styled'
import { Arrow } from '../../components/Icon'
import { Info, List, SubTitle, Text, ArrowLeft } from './styled'
import Logo from '../../components/Logo'
import Loader from '../../components/Loader'

function AboutScreen() {
    return (
        <>
            <Loader />
            <MainScreenWrapper>
                <Logo />
                <Link to="/">
                    <ArrowLeft>
                        <span>Main</span>
                        <Arrow />
                    </ArrowLeft>
                </Link>
                <Link to="/about">
                    <ArrowRight>
                        <span>About me</span>
                        <Arrow />
                    </ArrowRight>
                </Link>
                <Info>
                    <h2>Why me?</h2>
                    <List>
                        <li>
                            <img src="/secure.svg" alt="" />
                            <div>
                                <SubTitle>Security</SubTitle>
                                <Text>
                                    I provide only secure nodes with various
                                    types of protection. I provide full time
                                    monitoring so your money remains fully safe,
                                    at all times.
                                </Text>
                            </div>
                        </li>
                        <li>
                            <img src="/contribute.svg" alt="" />
                            <div>
                                <SubTitle>Contributing</SubTitle>
                                <Text>
                                    I try to help cosmos ecosystem with
                                    different utilities, apps and bots. Each day
                                    I perform a new coding session enhancing the
                                    usability of networks.
                                </Text>
                            </div>
                        </li>
                        <li>
                            <img src="/refund.svg" alt="" />
                            <div>
                                <SubTitle>Refund</SubTitle>
                                <Text>
                                    You will get 100% refund in case of
                                    slashing.
                                </Text>
                            </div>
                        </li>
                        <li>
                            <img src="/communication.svg" alt="" />
                            <div>
                                <SubTitle>Communication</SubTitle>
                                <Text>
                                    You always can write me and ask any question
                                    what you want. I reply a soon as I possibly
                                    can, and aim to explain or provide the
                                    highest service possible.
                                </Text>
                            </div>
                        </li>
                    </List>
                </Info>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                    <Light />
                </Canvas>
            </MainScreenWrapper>
        </>
    )
}

export default AboutScreen
