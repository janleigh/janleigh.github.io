import PropTypes from 'prop-types';

export const Footer = ({
    author = ""
}) => {
    return (
        <div className="box-container">
            <p className="iosevka">Last Revision: <span style={{ color: "#f49898" }}>Nov. 3, 2021</span> | {author} (c) 2021</p>
        </div>
    )
}

Footer.propTypes = {
    author: PropTypes.string
}

Footer.defaultProps = {
    author: "Author"
}

export default Footer;