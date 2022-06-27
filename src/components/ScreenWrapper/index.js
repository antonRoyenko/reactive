import { LinkLeft, LinkRight, Wrapper } from './styled'
import { Arrow } from '../Icon'
import Loader from '../Loader'
import useMediaQuery from '../../hooks/useMediaQuery'

function ScreenWrapper({
    children,
    linkLeft,
    linkRight,
    arrowLeftText,
    arrowRightText,
}) {
    const matches = useMediaQuery('(max-width: 768px)')
    return (
        <Wrapper>
            <Loader />
            <LinkLeft to={linkLeft}>
                {!matches && <span>{arrowLeftText}</span>}
                <Arrow direction="bottom" bigger={matches} />
            </LinkLeft>
            <LinkRight to={linkRight}>
                {!matches && <span>{arrowRightText}</span>}
                <Arrow direction="bottom" bigger={matches} />
            </LinkRight>
            {children}
        </Wrapper>
    )
}

export default ScreenWrapper
