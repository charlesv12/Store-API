import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch(() => setError('Failed to load products.'))
            .finally(() => setLoading(false));
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}