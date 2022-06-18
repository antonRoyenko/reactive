import { ChakraProvider } from '@chakra-ui/react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Atom, Light, Stars } from './components'
import GlobalStyles from './styles/GlobalStyles'

export default function App() {
    return (
        <ChakraProvider>
            <GlobalStyles />
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden auto',
                    top: 0,
                    left: 0,
                    background: '#202025',
                }}
            >
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                    <Light />

                    <Suspense fallback={null}>
                        <Atom />
                    </Suspense>
                </Canvas>
            </div>
        </ChakraProvider>
    )
}
