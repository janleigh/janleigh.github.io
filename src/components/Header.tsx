const Header = ({
    title,
    color,
}: {
    title: string;
    color: string;
}) => {
    return (
        <h1 className="undertitle victor-mono-i" style={{
            color: color,
        }}>{title}</h1>
    )
}

Header.defaultProps = {
    title: "Kizu",
    color: "#fff",
}

export default Header;