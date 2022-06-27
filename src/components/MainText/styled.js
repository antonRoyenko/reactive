import styled from 'styled-components'
import { fonts } from '../../styles/mixins'

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
`

export const H2 = styled.h2`
    font-family: ${fonts.title};
`
