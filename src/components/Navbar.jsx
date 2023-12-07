import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link style={{ margin: "10px" }} to="/">Home</Link>
            <Link style={{ margin: "10px" }} to="/about">About</Link>
            <Link style={{ margin: "10px" }} to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;