export const EasterEgg = () => {
    return (
        <div className="easteregg">
            <div className="easteregg-container">
                <div className="easteregg-subcontainer">
                    <div id="ditto"/>
                </div>
                <audio autoPlay={true} loop={true}>
                    <source src="https://robindelaporte.fr/song.mp3"/>
                </audio>
            </div>
        </div>
    )
}

export default EasterEgg;