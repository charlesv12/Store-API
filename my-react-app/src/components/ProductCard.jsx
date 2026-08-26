import { useState } from 'react';
import styles from './ProductCard.module.css';
<div className={styles.card}></div>

export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className={styles.card}>
            <h3>{product.name}</h3>
            <p>₱{product.price}</p>
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span> {quantity} </span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
    );
}