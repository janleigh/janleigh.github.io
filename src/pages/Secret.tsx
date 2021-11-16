export const Secret = () => {
    return (
        <div className="secret">
            <div className="secret-container">
                <div className="secret-subcontainer">
                    <div className="ditto one">
                        {Array(1156).fill(0).map((_, i) => (
                            <div key={i} className="pixels" />
                        ))}
                    </div>
                    <div className="ditto two">
                        {Array(1156).fill(0).map((_, i) => (
                            <div key={i} className="pixels" />
                        ))}
                    </div>
                    <div className="ditto three">
                        {Array(1156).fill(0).map((_, i) => (
                            <div key={i} className="pixels" />
                        ))}
                    </div>
                    <div className="ditto four">
                        {Array(1156).fill(0).map((_, i) => (
                            <div key={i} className="pixels" />
                        ))}
                    </div>
                </div>
                <audio autoPlay={Boolean(true)}>
                    <source src="https://robindelaporte.fr/song.mp3"/>
                </audio>
            </div>
        </div>
    )
}

export default Secret;