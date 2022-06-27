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
        font-family: ${fonts.medium};
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
    
    h1 {
    	font-family: ${fonts.title};
    	color: white;
    	font-size: 5rem;
    	white-space: nowrap
    }
    
    h2 {
    	font-family: ${fonts.bold};
    	color: white;
    	font-size: 2rem;
    	white-space: nowrap
    }
    
    a {
    	font-family: ${fonts.medium};
    }
    
    @media (max-width: 768px) {
    	body {
    		font-size: 14px;
    	}
    
    	h1 {
    	    font-size: 1.5rem;
    	}
    	
    	h2 {
    		font-size: 1rem;
    		white-space: normal;
    	}
    	
    	a {
    		font-size: 14px;
    	}
    }
`
