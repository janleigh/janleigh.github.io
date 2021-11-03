import PropTypes from 'prop-types';

const Header = ({
    title = "",
    color = "",
}) => {
    return (
        <h1 className="undertitle victor-mono-i" style={{
            color: color,
        }}>{title}</h1>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
}

Header.defaultProps = {
    title: "Kizu",
    color: "#fff",
}

export default Header;