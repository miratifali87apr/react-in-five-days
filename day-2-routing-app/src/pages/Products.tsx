import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

type Product = {
    id: number;
    name: string;
};

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an async API call (e.g. fetch)
        const fetchProducts = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500)); // fake delay
            setProducts([
                { id: 101, name: "Shoes" },
                { id: 102, name: "Phone" },
                { id: 103, name: "Laptop" },
            ]);
            setLoading(false);
        };

        fetchProducts();
    }, []); // run only once on mount

    return (
        <PageLayout>
            <h2>🛍️ Product List</h2>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </PageLayout>
    );
};

export default Products;
