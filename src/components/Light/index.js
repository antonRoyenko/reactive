function Light() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                intensity={0.6}
                position={[-0.6, 0.6, 0.6]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                castShadow
            />
        </>
    )
}

export default Light
