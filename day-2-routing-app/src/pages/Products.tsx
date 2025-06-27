import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout.tsx";

const Products = () => {
    // Sample product IDs (later you'll fetch these)
    const productIds = [101, 102, 103];

    return (
        <PageLayout>
            <h2>🛍️ Product List</h2>
            <ul>
                {productIds.map((id) => (
                    <li key={id}>
                        <Link to={`/products/${id}`}>View Product {id}</Link>
                    </li>
                ))}
            </ul>
        </PageLayout>
    );
};

export default Products;
