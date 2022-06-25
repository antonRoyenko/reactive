import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Wrapper = styled(animated.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #202025;
    width: 100vw;
    height: 100vh;
    z-index: 2;
`
