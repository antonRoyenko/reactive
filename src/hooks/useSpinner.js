import { useEffect, useState } from 'react'

function useSpinner(timeout = 1000) {
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        setTimeout(() => setSpinner(false), timeout)
    }, [timeout])

    return spinner
}

export default useSpinner
