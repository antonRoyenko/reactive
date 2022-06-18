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
    lessThen: (width) => mediaQuery('max-width', width),
    moreThen: (width) => mediaQuery('min-width', width),

    XS: (...args) => mediaQuery('max-width', 575)(...args),
    MD: (...args) => mediaQuery('max-width', 992)(...args),

    MC: (...args) =>
        mediaQuery('max-width', breakpoints.contentBrakePoint)(...args),
    ML: (...args) => mediaQuery('max-width', breakpoints.mobileLayout)(...args),
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
    basic: "EB Garamond', serif",
}

export const fontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
}

export const fontSize = {
    xSmall: '0.75rem', // 12px
    small: '0.875rem', // 14px
    default: '1rem', // 16px
    medium: '1.125rem', // 18px
    xMedium: '1.25rem', // 20px
    xxMedium: '1.5rem', // 24px
    large: '1.75rem', // 24px
}
