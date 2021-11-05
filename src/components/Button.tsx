const Button = ({
    text,
    href,
    color,
    shake,
}: {
    text: string,
    href: string,
    color: string,
    shake: boolean,
}) => {
    // Reference: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
    function hexToRGB(hex: string, alpha: number = 0.6) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    if (shake) {
        return (
            <a className="btn hover victor-mono-i shake" href={href} style={{
                color: "#fff",
                backgroundColor: color,
                filter: `drop-shadow(5px 5px 0 ${hexToRGB(color)})`
            }}>{text}</a>
        )
    } else {
        return (
            <a className="btn hover victor-mono-i" href={href} target="_blank" style={{
                color: "#fff",
                backgroundColor: color,
                filter: `drop-shadow(5px 5px 0 ${hexToRGB(color)})`
            }}>{text}</a>
        )
    }

    
}

Button.defaultProps = {
    text: "placeholder",
    href: "placeholder",
    color: "#292d32",
    shake: false,
}

export default Button;