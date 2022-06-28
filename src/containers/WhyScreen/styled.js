import styled from 'styled-components'
import { fonts, media } from '../../styles/mixins'

export const Info = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    ${media.XS`
        width: 80%;
    `}
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

    ${media.XS`
        width: 100%;
        padding: 0;
        
        li {
            margin-bottom: 10px;
            margin-right: 10px;
        }
    `}
`

export const SubTitle = styled.h3`
    font-family: ${fonts.semiBold};
`

export const Text = styled.p`
    font-family: ${fonts.light};
`
