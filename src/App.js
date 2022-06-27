import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import './styles/fonts/fonts.css'

import MainScreen from './containers/MainScreen'
import AboutScreen from './containers/AboutScreen'
import WhyScreen from './containers/WhyScreen'

export default function App() {
    return (
        <div
            style={{
                overflow: 'hidden',
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}
        >
            <GlobalStyles />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/why" component={WhyScreen} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
