import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ padding: "1rem", background: "#eee" }}>
            <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
            <Link to="/products" style={{ marginRight: "1rem" }}>Products</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;
