// eslint-disable-next-line no-unused-vars
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyles from './styles/GlobalStyles'
import './styles/fonts/fonts.css'
import MainScreen from './containers/MainScreen'

export default function App() {
    return (
        <ChakraProvider>
            <GlobalStyles />
            <MainScreen />
        </ChakraProvider>
    )
}
