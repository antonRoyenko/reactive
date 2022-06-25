import { useEffect, useState } from 'react'
import { useSpring } from '@react-spring/web'
import { Wrapper } from './styled'
import LogoDark from './LogoDark'

function SplashScreen() {
    const [isVisible, setVisible] = useState(true)
    const [toggle, setToggle] = useState(false)

    const styles = useSpring({
        from: { transform: 'translate3d(0%,0%,0)' },
        to: { transform: 'translate3d(0%,100%,0)' },
        delay: 3000,
        onRest: () => {
            setVisible(false)
        },
    })

    useEffect(() => {
        setTimeout(() => {
            setToggle(true)
        }, 0)
    }, [])

    if (!isVisible) return null

    return (
        <Wrapper style={styles}>
            <LogoDark toggle={toggle} />
        </Wrapper>
    )
}

export default SplashScreen
