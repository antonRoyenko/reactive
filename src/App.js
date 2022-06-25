import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import './styles/fonts/fonts.css'

import MainScreen from './containers/MainScreen'
import AboutScreen from './containers/AboutScreen'

export default function App() {
    return (
        <ChakraProvider>
            <GlobalStyles />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainScreen} />
                    <Route path="/about" component={AboutScreen} />
                </Switch>
            </BrowserRouter>
        </ChakraProvider>
    )
}
