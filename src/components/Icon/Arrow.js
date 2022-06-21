import { ArrowWrapper } from './styled'

function Arrow({ color = '#fff', direction = 'left' }) {
    let rotate = 180
    if (direction === 'right') {
        rotate = 0
    } else if (direction === 'bottom') {
        rotate = 90
    }

    return (
        <ArrowWrapper transform={rotate}>
            <svg
                fill="currentColor"
                viewBox="0 0 14 11"
                width="14"
                height="11"
                color={color}
            >
                <path
                    d="M12.4226 5.5L1.26782 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M12.5774 5.5L8.57739 9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M12.5774 5.5L8.57739 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </ArrowWrapper>
    )
}

export default Arrow
