import styled from 'styled-components'
import { fonts, media } from '../../styles/mixins'

export const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`

export const Img = styled.img`
    width: 256px;
    height: 256px;
    border-radius: 50%;

    ${media.XS`
        width: 180px;
    	height: 180px;
    `}
`

export const Text = styled.span`
    position: relative;
    margin-top: 20px;
    font-family: ${fonts.medium};
    text-align: center;
    display: block;
    color: white;

    &::before {
        content: '\\201C';
        font-size: 40px;
        font-weight: bold;
        position: absolute;
        left: -20px;
        top: -15px;
    }
`

export const Icons = styled.div`
    display: flex;
    margin-top: 20px;

    a {
        margin-left: 15px;
        margin-right: 15px;
    }
`
