export const Footer = ({
    author
}: {
    author: string;
}) => {
    return (
        <div className="box-container">
            <p className="iosevka">Last Revision: <span style={{ color: "#f49898" }}>Nov. 3, 2021</span> | {author} (c) 2021</p>
            <p className="iosevka" style={{ color: "#373737" }}>Made using React.</p>
        </div>
    )
}

Footer.defaultProps = {
    author: "Author"
}

export default Footer;