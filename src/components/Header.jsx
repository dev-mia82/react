import './Header.css'

const Header = ({leftElement, centerElement, rightElement}) => {
    return (
        <div className="Header">
            <section className="left_section">{leftElement}</section>
            <section className="center_section">{centerElement}</section>
            <section className="right_section">{rightElement}</section>
        </div>
    );
};

export default Header;