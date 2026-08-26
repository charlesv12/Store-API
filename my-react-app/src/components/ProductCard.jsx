import styles from './ProductCard.module.css';
// ...
<div className={styles.card}></div>

// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
    return (
        <div className="card">
            <h3>{product.name}</h3>
            <p>₱{product.price}</p>
        </div>
    );
}