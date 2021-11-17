export const Nostalgia = () => {
    return (
        <div className="nostalgia">
            <div className="nostalgia-container">
                <div className="item">
                    <div className="image">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig05.deviantart.net%2Fd24a%2Ff%2F2011%2F163%2F1%2F7%2Flittleroot_town_by_segesi-d3irw4f.png&f=1&nofb=1"/>
                        <div className="caption">littleroot town</div>
                    </div>
                </div>
            </div>
            <audio autoPlay={true} loop={true}>
                <source src="https://cdn.xndr.tech/u/FveBjnE.bin"/>
            </audio>
        </div>
    )
}

export default Nostalgia;