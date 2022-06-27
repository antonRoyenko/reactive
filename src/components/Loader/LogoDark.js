import { useSpring, animated } from '@react-spring/web'
import useAnimatedPath from '../../hooks/useAnimationPath'

function LogoDark({ toggle }) {
    return (
        <RotateDiv delay={1500}>
            <svg width="105" height="105.5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient
                        gradientTransform="matrix(1,0,0,1,-41.129730224609375,-10.622297167778015)"
                        gradientUnits="userSpaceOnUse"
                        r="7.6462"
                        cy="61.8082"
                        cx="95.1924"
                        id="svg_30"
                    >
                        <stop stopColor="#FFFFFF" offset="0.0051" />
                        <stop
                            stopOpacity="0.9041"
                            stopColor="#BBBDBF"
                            offset="0.9592"
                        />
                    </radialGradient>
                    <radialGradient
                        gradientTransform="matrix(1,0,0,1,-41.129730224609375,-10.622297167778015)"
                        gradientUnits="userSpaceOnUse"
                        r="7.6462"
                        cy="61.8082"
                        cx="95.1924"
                        id="svg_29"
                    >
                        <stop stopColor="#FFFFFF" offset="0.0051" />
                        <stop
                            stopOpacity="0.9041"
                            stopColor="#BBBDBF"
                            offset="0.5408"
                        />
                        <stop
                            stopOpacity="0.9041"
                            stopColor="#26A9E0"
                            offset="1"
                        />
                    </radialGradient>
                    <linearGradient
                        gradientTransform="matrix(1,0,0,1,-41.129730224609375,-10.622297167778015)"
                        y2="62.6772"
                        x2="118.4304"
                        y1="62.6772"
                        x1="69.4117"
                        gradientUnits="userSpaceOnUse"
                        id="svg_28"
                    >
                        <stop stopColor="#FFFFFF" offset="0.0051" />
                        <stop
                            stopOpacity="0.9041"
                            stopColor="#929497"
                            offset="0.9592"
                        />
                    </linearGradient>
                    <linearGradient
                        gradientTransform="matrix(1,0,0,1,-41.129730224609375,-10.622297167778015)"
                        y2="62.4233"
                        x2="132.6183"
                        y1="62.4233"
                        x1="54.607"
                        gradientUnits="userSpaceOnUse"
                        id="svg_27"
                    >
                        <stop stopColor="#FFFFFF" offset="0.0051" />
                        <stop
                            stopOpacity="0.9041"
                            stopColor="#929497"
                            offset="0.9592"
                        />
                    </linearGradient>
                    <linearGradient
                        gradientTransform="matrix(1,0,0,1,-41.129730224609375,-10.622297167778015)"
                        y2="62.6772"
                        x2="118.1491"
                        y1="62.6772"
                        x1="69.1305"
                        gradientUnits="userSpaceOnUse"
                        id="svg_26"
                    >
                        <stop stopColor="#FFFFFF" offset="0.0051" />
                        <stop
                            stopOpacity="0.9041"
                            stopColor="#929497"
                            offset="0.9592"
                        />
                    </linearGradient>
                </defs>
                <g>
                    <title>Layer 1</title>
                    <g>
                        <Circle
                            fill="#404241"
                            r="52.4"
                            cy="52.6777"
                            cx="52.57027"
                            className="st8"
                            toggle={toggle}
                            delay={1350}
                        />
                        <g>
                            <Circle
                                color="url(#svg_30)"
                                r="7.6"
                                cy="51.1777"
                                cx="54.07027"
                                className="st0"
                                toggle={toggle}
                                delay={1050}
                            />
                            <Circle
                                color="url(#svg_29)"
                                r="7.6"
                                cy="51.1777"
                                cx="54.07027"
                                className="st1"
                                toggle={toggle}
                                delay={1200}
                            />
                        </g>
                        <g>
                            <g>
                                <Line
                                    color="url(#svg_28)"
                                    d="m33.27027,18.2777c-9.4,5.4 -4.4,25.2 5.2,42c9.7,16.8 24.4,31 33.8,25.6c9.4,-5.4 4.4,-25.2 -5.2,-42c-9.7,-16.8 -24.4,-31 -33.8,-25.6zm37.2,64.4c-6.2,3.6 -19.1,-7.3 -28.8,-24.2c-9.8,-16.9 -12.7,-33.5 -6.6,-37.1c6.2,-3.6 19.1,7.3 28.8,24.2c9.8,17 12.8,33.6 6.6,37.1z"
                                    className="st2"
                                    delay={150}
                                    toggle={toggle}
                                />
                            </g>
                            <g>
                                <Line
                                    d="m33.27027,18.2777c-9.4,5.4 -4.4,25.2 5.2,42c9.7,16.8 24.4,31 33.8,25.6c9.4,-5.4 4.4,-25.2 -5.2,-42c-9.7,-16.8 -24.4,-31 -33.8,-25.6zm37.2,64.4c-6.2,3.6 -19.1,-7.3 -28.8,-24.2c-9.8,-16.9 -12.7,-33.5 -6.6,-37.1c6.2,-3.6 19.1,7.3 28.8,24.2c9.8,17 12.8,33.6 6.6,37.1z"
                                    className="st3"
                                    toggle={toggle}
                                    color="#3EBBEC"
                                    delay={300}
                                />
                            </g>
                        </g>
                        <g>
                            <g>
                                <Line
                                    color="url(#svg_27)"
                                    d="m13.47027,51.7777c0,10.8 19.6,16.5 39,16.5c19.4,0 39,-5.7 39,-16.5c0,-10.8 -19.6,-16.5 -39,-16.5c-19.4,0.1 -39,5.7 -39,16.5zm74.4,0c0,7.1 -15.9,12.9 -35.4,12.9c-19.6,0 -35.4,-5.8 -35.4,-12.9s15.9,-12.9 35.4,-12.9c19.6,0.1 35.4,5.8 35.4,12.9z"
                                    className="st4"
                                    delay={450}
                                    toggle={toggle}
                                />
                            </g>
                            <g>
                                <Line
                                    d="m13.47027,51.7777c0,10.8 19.6,16.5 39,16.5c19.4,0 39,-5.7 39,-16.5c0,-10.8 -19.6,-16.5 -39,-16.5c-19.4,0.1 -39,5.7 -39,16.5zm74.4,0c0,7.1 -15.9,12.9 -35.4,12.9c-19.6,0 -35.4,-5.8 -35.4,-12.9s15.9,-12.9 35.4,-12.9c19.6,0.1 35.4,5.8 35.4,12.9z"
                                    className="st5"
                                    toggle={toggle}
                                    color="#5A78BA"
                                    delay={600}
                                />
                            </g>
                        </g>
                        <g>
                            <g>
                                <Line
                                    color="url(#svg_26)"
                                    d="m71.97027,18.2777c-9.4,-5.4 -24.1,8.8 -33.8,25.6c-9.7,16.8 -14.6,36.6 -5.2,42c9.4,5.4 24.1,-8.8 33.8,-25.6c9.7,-16.8 14.6,-36.6 5.2,-42zm-37.2,64.4c-6.2,-3.6 -3.2,-20.2 6.6,-37.1c9.8,-16.9 22.7,-27.8 28.8,-24.2c6.2,3.6 3.2,20.2 -6.6,37.1c-9.7,16.9 -22.6,27.8 -28.8,24.2z"
                                    className="st6"
                                    delay={750}
                                    toggle={toggle}
                                />
                            </g>
                            <g>
                                <Line
                                    d="m71.97027,18.2777c-9.4,-5.4 -24.1,8.8 -33.8,25.6c-9.7,16.8 -14.6,36.6 -5.2,42c9.4,5.4 24.1,-8.8 33.8,-25.6c9.7,-16.8 14.6,-36.6 5.2,-42zm-37.2,64.4c-6.2,-3.6 -3.2,-20.2 6.6,-37.1c9.8,-16.9 22.7,-27.8 28.8,-24.2c6.2,3.6 3.2,20.2 -6.6,37.1c-9.7,16.9 -22.6,27.8 -28.8,24.2z"
                                    className="st7"
                                    toggle={toggle}
                                    color="#3853A3"
                                    delay={900}
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </RotateDiv>
    )
}

function RotateDiv({ children, delay }) {
    const styles = useSpring({
        duration: 800,
        from: { rotateZ: 0 },
        to: { rotateZ: 360 },
        delay,
    })

    return <animated.div style={{ ...styles }}>{children}</animated.div>
}

function Line({ color, d, toggle, delay, ...props }) {
    const animationStrokeProps = useAnimatedPath({ toggle })
    const animationFillStyle = useSpring({
        fill: toggle ? color : '#202025',
        delay,
    })

    return (
        <animated.path
            {...animationStrokeProps}
            style={{
                ...animationStrokeProps.style,
                ...animationFillStyle,
            }}
            d={d}
            stroke={color}
            strokeWidth="1"
            {...props}
        />
    )
}

function Circle({ color, toggle, delay, ...props }) {
    const animationStrokeProps = useAnimatedPath({ toggle })
    const animationFillStyle = useSpring({
        opacity: toggle ? 1 : 0,
        delay,
    })

    return (
        <animated.circle
            {...animationStrokeProps}
            style={{
                ...animationStrokeProps.style,
                ...animationFillStyle,
            }}
            stroke={color}
            strokeWidth="1"
            fill={color}
            {...props}
        />
    )
}

export default LogoDark
