import { Wrapper } from './styled'

function ArrowMenu({ children, ...props }) {
    return <Wrapper {...props}>{children}</Wrapper>
}

export default ArrowMenu
