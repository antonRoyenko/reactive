import { css } from 'styled-components'

import { breakpoints } from '../constants/style'

const mediaQuery =
    (selector, width) =>
    (...args) =>
        css`
            @media (${selector}: ${width}px) {
                ${css(...args)}
            }
        `

export const media = {
    XS: (...args) => mediaQuery('max-width', 768)(...args),

    MC: (...args) =>
        mediaQuery('max-width', breakpoints.contentBrakePoint)(...args),
}

export function styledIf(condition) {
    const check = (props) =>
        typeof condition === 'function'
            ? condition(props)
            : props[condition] === true

    return (...args) =>
        (props) =>
            check(props) && css(...args)
}

export const fonts = {
    title: "'Space Age', sans-serif",
    light: "'Sofia Pro Light', sans-serif",
    regular: "'Sofia Pro Regular', sans-serif",
    medium: "'Sofia Pro Medium', sans-serif",
    semiBold: "'Sofia Pro Semi Bold', sans-serif",
    bold: "'Sofia Pro Bold', sans-serif",
}

export const fontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
}
