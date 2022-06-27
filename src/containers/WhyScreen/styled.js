import styled from 'styled-components'
import { fonts } from '../../styles/mixins'
import { ArrowLeft as DefaultArrowLeft } from '../MainScreen/styled'

export const Info = styled.div`
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

export const List = styled.ul`
    width: 80%;

    li {
        display: flex;
        color: white;
        font-family: ${fonts.medium};
        margin-bottom: 25px;

        img {
            margin-right: 20px;
        }
    }
`

export const Icons = styled.div`
    display: flex;
    margin-top: 20px;

    img {
        margin-left: 15px;
        margin-right: 15px;
    }
`

export const SubTitle = styled.h3`
    font-family: ${fonts.semiBold};
`

export const Text = styled.p`
    font-family: ${fonts.light};
`

export const ArrowLeft = styled(DefaultArrowLeft)`
    left: 1%;

    & div {
        left: -7px;
    }
`
