import { createGlobalStyle } from 'styled-components'

import { fonts, fontWeights } from './mixins'

import './reset.css'

export default createGlobalStyle`
    html,
    body {
        width: 100%;
        height: 100%;
    }

    body {
        font-weight: ${fontWeights.regular};
        font-size: 16px;
        font-family: ${fonts.basic};
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
    }

    #app {
        min-width: 320px;
        min-height: 100%;
        overflow: auto;
    }

    input::-ms-clear,
    input::-ms-reveal {
        display: none;
    }

    button:active span,
    button:focus span {
        transform: translate(0,0);
    }
`