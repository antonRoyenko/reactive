import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { media } from '../../styles/mixins'

export const Link = styled(ReactRouterLink)`
    color: white;
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: column;
    z-index: 1;
`

export const LinkLeft = styled(Link)`
    transform: rotate(90deg);

    & > div {
        display: flex;
        justify-content: center;
        position: relative;
        top: 10px;

        ${media.XS`
        top: 0;
    `}
    }
`

export const LinkRight = styled(Link)`
    transform: rotate(-90deg);
    right: 0;

    & > div {
        display: flex;
        justify-content: center;
        position: relative;
        top: 10px;

        ${media.XS`
        top: 0;
    `}
    }
`

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    background: #202025;
`
