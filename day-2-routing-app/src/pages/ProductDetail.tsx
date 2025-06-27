import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout.tsx";

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <PageLayout>
            <h2>🧾 Product Detail</h2>
            <p>Product ID: {id}</p>
        </PageLayout>
    );
};

export default ProductDetail;
