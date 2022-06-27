import styled from 'styled-components'
import { ArrowMenu } from '../../components'

const Arrow = styled(ArrowMenu)`
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
`

export const ArrowLeft = styled(Arrow)`
    top: 50%;
    left: 0;

    & > div {
        position: absolute;
        bottom: 0;
        left: 10px;
        transform: translate(-50%, -50%) rotate(180deg);
    }

    & > span {
        transform: rotate(90deg);
    }
`

export const ArrowRight = styled(Arrow)`
    top: 50%;
    right: 0;

    & > div {
        position: absolute;
        bottom: 0;
        right: -5px;
        transform: translate(-50%, -50%) rotate(0deg);
    }

    & > span {
        transform: rotate(-90deg);
    }
`

export const ArrowBottom = styled(Arrow)`
    left: 50%;
    bottom: 2%;

    & > div {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
    }
`
